import { readFileSync } from 'node:fs'

interface IaAsset {
  path?: string
  description?: string
  caption?: string
  usage?: string[]
}

interface IaMessageNode {
  type: 'message'
  path: string
  copy_texts?: {
    eyebrow?: string | null
    headline?: string
    summary?: string
    bullets?: string[] | null
  }
  assets?: IaAsset[]
  children?: IaMessageNode[]
}

interface IaSectionNode {
  type: 'section'
  children?: IaMessageNode[]
}

interface IaPageNode {
  type: 'page'
  path: string
  children?: IaSectionNode[]
}

interface FloatingEntry {
  label: string
  supportingText?: string
  targetPath?: string
}

interface IaDocument {
  floatingEntry?: FloatingEntry
  pages: IaPageNode[]
}

interface ContactAsset {
  path: string
  description?: string
}

interface ContactMessage {
  copy_texts: {
    headline: string
    summary: string
    bullets?: string[]
  }
  assets?: ContactAsset[]
}

const publishedIaFile = new URL('../../../docs/official_site/ia_populated_published.json', import.meta.url)
const contactFile = new URL(
  '../../../assets/official_site/source/message_house/contact/free-feasibility-assessment/message.json',
  import.meta.url,
)

function readJsonFile<T>(file: URL): T {
  return JSON.parse(readFileSync(file, 'utf-8')) as T
}

function requireValue<T>(value: T | undefined, message: string): T {
  if (value === undefined) {
    throw new Error(message)
  }

  return value
}

function toPublishedContactAssetUrl(relativePath: string): string {
  return `/assets/message-house/contact/free-feasibility-assessment/${relativePath}`
}

function mapCopy(copy: IaMessageNode['copy_texts']) {
  return {
    eyebrow: copy?.eyebrow,
    headline: requireValue(copy?.headline, 'Missing message headline'),
    summary: copy?.summary,
    bullets: copy?.bullets ?? [],
  }
}

function normalizeUsages(usages: string[] | undefined): string[] {
  return Array.isArray(usages) ? usages.filter((usage) => typeof usage === 'string' && usage.length > 0) : []
}

export function getHomePageContent() {
  const ia = readJsonFile<IaDocument>(publishedIaFile)
  const page = ia.pages.find((entry) => entry.path === '/')
  const section = requireValue(page?.children?.[0], 'Home page section missing')
  const hero = requireValue(section.children?.[0], 'Home hero message missing')
  const delivery = requireValue(hero.children?.[0], 'Home delivery message missing')
  const evidence = requireValue(hero.children?.[1], 'Home evidence message missing')

  return {
    hero: mapCopy(hero.copy_texts),
    delivery: mapCopy(delivery.copy_texts),
    evidence: mapCopy(evidence.copy_texts),
    evidenceAssets: (evidence.assets ?? []).map((asset) => ({
      url: requireValue(asset.path, 'Missing evidence asset path'),
      alt: asset.description ?? 'Scienith 结果示意图',
      caption: asset.caption ?? asset.description,
      usage: normalizeUsages(asset.usage),
    })),
    floatingEntry: ia.floatingEntry,
  }
}

export function getSiteChromeContent() {
  const ia = readJsonFile<IaDocument>(publishedIaFile)
  const contact = readJsonFile<ContactMessage>(contactFile)
  const floatingEntry = requireValue(ia.floatingEntry, 'Floating entry missing')
  const contactAssets = contact.assets ?? []

  return {
    header: {
      brandLabel: 'Scienith',
      brandHref: '/',
      brandLogoSrc: '/assets/brand/scienith-mark.png',
      navItems: [
        { label: '首页', href: '/' },
        { label: '交付方式', href: '/#delivery' },
        { label: '证据示例', href: '/#evidence' },
        { label: '联系', href: '/#site-footer' },
      ],
      actions: [
        { label: floatingEntry.label, href: '/#site-footer', variant: 'primary' as const },
      ],
    },
    footer: {
      brandLabel: 'Scienith',
      brandHref: '/',
      brandLogoSrc: '/assets/brand/scienith-mark.png',
      brandSummary:
        '围绕医学 AI 建模与结果交付，把问题定义、过程稳健性和材料可复核性放在同一套站点语言里表达。',
      groups: [
        {
          title: '首页',
          links: [
            { label: '服务底线', href: '/#delivery' },
            { label: '小样本稳健性', href: '/#evidence' },
            { label: '免费可行性评估', href: '/#site-footer' },
          ],
        },
        {
          title: '联系',
          links: [
            {
              label: '售前咨询二维码',
              href: toPublishedContactAssetUrl('images/qr-presale.png'),
            },
            {
              label: '公众号二维码',
              href: toPublishedContactAssetUrl('images/qr-official-account.png'),
            },
          ],
        },
      ],
      legalLinks: [
        { label: '隐私', href: '#' },
        { label: '条款', href: '#' },
      ],
      layout: 'columns' as const,
      tone: 'default' as const,
      copyright: '© 2026 Scienith. All rights reserved.',
    },
    floatingCta: {
      label: floatingEntry.label,
      supportingText: floatingEntry.supportingText,
      summary: contact.copy_texts.summary,
      href: '/#site-footer',
      previewAsset:
        contactAssets[1]
          ? {
              url: toPublishedContactAssetUrl(contactAssets[1].path),
              alt: contactAssets[1].description ?? '售前咨询二维码',
            }
          : undefined,
    },
  }
}
