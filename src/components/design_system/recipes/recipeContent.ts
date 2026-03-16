export const partnerLogos = [
  {
    label: 'Northbeam',
    caption: 'Northbeam',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="20" r="12" fill="currentColor" fill-opacity="0.12"/><path d="M12 24l6-12 6 12" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/><text x="42" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Northbeam</text></svg>`,
  },
  {
    label: 'Arcwell',
    caption: 'Arcwell',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="20" height="20" rx="10" fill="currentColor" fill-opacity="0.12"/><path d="M12 24c1.5-6.667 5-10 10.5-10S31.5 17.333 33 24" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/><text x="44" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Arcwell</text></svg>`,
  },
  {
    label: 'Meridian',
    caption: 'Meridian',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="24" height="24" rx="8" fill="currentColor" fill-opacity="0.12"/><path d="M14 24V16l6 6 6-6v8" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/><text x="46" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Meridian</text></svg>`,
  },
  {
    label: 'Axiom',
    caption: 'Axiom',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8l10 24H8L18 8Z" fill="currentColor" fill-opacity="0.14"/><path d="M18 15l4 9h-8l4-9Z" fill="currentColor"/><text x="44" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Axiom</text></svg>`,
  },
  {
    label: 'Summit',
    caption: 'Summit',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="20" r="12" fill="currentColor" fill-opacity="0.12"/><path d="M11 24l4.5-8 2.5 4 2.5-4 4.5 8" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/><text x="42" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Summit</text></svg>`,
  },
  {
    label: 'Runway',
    caption: 'Runway',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="24" height="24" rx="12" fill="currentColor" fill-opacity="0.12"/><path d="M14 26V14h4.5c3 0 5 1.8 5 4.5 0 2.8-2 4.5-5 4.5H14" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 21l4 5" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/><text x="44" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Runway</text></svg>`,
  },
  {
    label: 'Everfield',
    caption: 'Everfield',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="24" height="24" rx="8" fill="currentColor" fill-opacity="0.12"/><path d="M14 20h12M20 14v12" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"/><text x="46" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Everfield</text></svg>`,
  },
  {
    label: 'Vertex',
    caption: 'Vertex',
    svg: `<svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="24" height="24" rx="8" fill="currentColor" fill-opacity="0.12"/><path d="M12 14l6 12 6-12" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/><text x="46" y="25" fill="currentColor" font-family="Arial, sans-serif" font-size="16" font-weight="700">Vertex</text></svg>`,
  },
] as const

export const footerGroups = [
  {
    title: '服务',
    links: [
      { label: '能力概览', href: '#' },
      { label: '交付流程', href: '#' },
      { label: '结果呈现', href: '#' },
      { label: '报告样例', href: '#' },
    ],
  },
  {
    title: '场景',
    links: [
      { label: '科研合作', href: '#' },
      { label: '算法验证', href: '#' },
      { label: '医学影像', href: '#' },
      { label: '方案咨询', href: '#' },
    ],
  },
  {
    title: '资料',
    links: [
      { label: '案例节选', href: '#' },
      { label: '方法说明', href: '#' },
      { label: '交付清单', href: '#' },
      { label: '更新记录', href: '#', badge: 'new' },
    ],
  },
  {
    title: '联系',
    links: [
      { label: '常见问题', href: '#' },
      { label: '系统状态', href: '#', status: 'live' as const },
      { label: '预约沟通', href: '#' },
      { label: '联系邮箱', href: '#' },
    ],
  },
] as const

export const legalLinks = [
  { label: '隐私', href: '#' },
  { label: '条款', href: '#' },
  { label: '安全', href: '#' },
] as const

const iconFacebook = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.72 3.268 8.678 7.657 9.73v-6.89H7.523V12h2.134V9.797c0-2.106 1.254-3.269 3.172-3.269.919 0 1.88.164 1.88.164v2.07h-1.06c-1.045 0-1.37.649-1.37 1.314V12h2.33l-.372 2.84h-1.958v6.89C18.732 20.678 22 16.72 22 12Z" /></svg>`
const iconLinkedIn = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.56 18.5h2.76V9.86H5.56V18.5Zm4.4-8.64v8.64h2.76v-4.34c0-1.14.22-2.24 1.63-2.24 1.39 0 1.41 1.3 1.41 2.31v4.27h2.76v-4.82c0-2.37-.51-4.2-3.28-4.2-1.33 0-2.22.73-2.58 1.42h-.04V9.86H9.96Z" /></svg>`
const iconX = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2H21l-6.02 6.879L22 22h-5.485l-4.294-6.255L6.75 22H4l6.44-7.36L2 2h5.624l3.882 5.656L18.244 2Zm-.964 18h1.526L6.794 3.896H5.155L17.28 20Z" /></svg>`
const iconGitHub = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017a10 10 0 0 0 6.838 9.488c.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.606-3.37-1.344-3.37-1.344-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.5 9.5 0 0 1 12 6.844a9.5 9.5 0 0 1 2.504.337c1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.002 10.002 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" /></svg>`

export const socialLinks = [
  { label: 'Facebook', href: '#', icon: iconFacebook },
  { label: 'LinkedIn', href: '#', icon: iconLinkedIn },
  { label: 'X', href: '#', icon: iconX },
  { label: 'GitHub', href: '#', icon: iconGitHub },
] as const
