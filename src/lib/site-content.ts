interface MessageAsset {
  url: string
  alt: string
  caption?: string
  usage?: string[]
}

interface MessageCopy {
  eyebrow?: string
  headline: string
  summary?: string
  bullets: string[]
}

const homeContent = {
  hero: {
    eyebrow: 'AI 应用优势',
    headline: '先讲清楚 AI 在医学研究里能带来什么，再谈谁来做这件事',
    summary:
      '这部分内容用于说明 AI 建模分析本身在医学研究中的应用优势，比如盘活现有真实世界数据、支持多模态建模、帮助变量收缩、支持风险分层与后续转化讨论。这些优势首先属于方法在研究中的价值，而不是单纯的服务卖点。',
    bullets: [],
  },
  delivery: {
    eyebrow: '交付方式',
    headline: 'XeleFlow 把结果做成交互式报告、演示视频与可复核材料包',
    summary:
      '医学 AI 建模的交付不应该只是一份静态文档。XeleFlow 作为项目交付系统，支持按章节目录和流程图查看分析过程，交互式浏览图表、导出图表和原始数据，并用中英文结果页面与分享方式更高效地支持汇报、协作和投稿阶段的补充分析。',
    bullets: [
      '支持目录跳转、流程图定位和层级下钻，帮助团队快速理解分析步骤与依赖关系',
      '支持图表交互浏览，并导出 PNG、SVG、PDF 和 JSON 等结果文件，方便二次绘图和复核',
      '支持中英文切换、PDF 导出和按权限分享，更适合作为交付质量与协作效率的展示',
    ],
  },
  evidence: {
    eyebrow: '小样本也能做',
    headline: '专攻小样本稳健性，减少偶然结果和审稿质疑',
    summary:
      '很多医学课题都会遇到样本量有限、随访不完整或变量噪声较大的现实情况。XeleFlow 针对小数据集优化了变量筛选和模型评估流程，强调稳定性、重复评估和不确定性表达。',
    bullets: [
      '通过多轮稳定性筛选寻找更有共识的关键变量',
      '采用重复或蒙特卡洛交叉验证评估模型，避免只看单次划分结果',
      '用置信区间或结果分布客观描述不确定性，而不是只报一个点估计',
    ],
  },
  evidenceAssets: [
    {
      url: '/assets/message-house/services/service-advantages/scienith-service-advantages/small-sample-robustness/images/feature-stability.png',
      alt: '稳定性特征筛选示意图',
      caption: '示意图用于说明稳定性筛选、重复评估和区间表达，不代表固定模板。',
      usage: ['hero', 'section'],
    },
    {
      url: '/assets/message-house/services/service-advantages/scienith-service-advantages/small-sample-robustness/images/monte-carlo-cv.png',
      alt: '蒙特卡洛交叉验证示意图',
      caption: '示意图用于说明稳定性筛选、重复评估和区间表达，不代表固定模板。',
      usage: ['section'],
    },
    {
      url: '/assets/message-house/services/service-advantages/scienith-service-advantages/small-sample-robustness/images/roc-confidence-interval.png',
      alt: 'ROC 曲线置信区间示意图',
      caption: '示意图用于说明稳定性筛选、重复评估和区间表达，不代表固定模板。',
      usage: ['section'],
    },
  ] satisfies MessageAsset[],
} satisfies {
  hero: MessageCopy
  delivery: MessageCopy
  evidence: MessageCopy
  evidenceAssets: MessageAsset[]
}

const siteChromeContent = {
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
    actions: [{ label: '免费可行性评估', href: '/#site-footer', variant: 'primary' as const }],
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
            href: '/assets/message-house/contact/free-feasibility-assessment/images/qr-presale.png',
          },
          {
            label: '公众号二维码',
            href: '/assets/message-house/contact/free-feasibility-assessment/images/qr-official-account.png',
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
    label: '免费可行性评估',
    supportingText: '售前咨询 / 公众号入口',
    summary:
      '我们提供免费的 AI 建模可行性评估，提前识别样本量、结局定义、缺失情况和变量质量等关键风险，帮助团队更稳妥地决定是否进入正式建模。',
    href: '/#site-footer',
    previewAsset: {
      url: '/assets/message-house/contact/free-feasibility-assessment/images/qr-presale.png',
      alt: '售前咨询二维码',
    },
  },
}

export function getHomePageContent() {
  return homeContent
}

export function getSiteChromeContent() {
  return siteChromeContent
}
