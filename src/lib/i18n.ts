export const locales = ['pt', 'en'] as const
export type Locale = (typeof locales)[number]
export const localeCookie = 'portfolio_language'
export function isLocale(value: unknown): value is Locale {
  return value === 'pt' || value === 'en'
}
export const projectSlugs: Record<string, Record<Locale, string>> = {
  janus: { pt: 'janus', en: 'janus' },
  'deteccao-de-fraudes': { pt: 'deteccao-de-fraudes', en: 'fraud-detection' },
  siintec: { pt: 'siintec', en: 'drl-optimization' },
  'compras-programadas': {
    pt: 'compras-programadas',
    en: 'recurring-investments',
  },
}
export type PageIdentity =
  { kind: 'home' } | { kind: 'resume' } | { kind: 'project'; id: string }
export function localizedPath(
  locale: Locale,
  page: PageIdentity = { kind: 'home' },
): string {
  if (page.kind === 'home') return `/${locale}`
  if (page.kind === 'resume')
    return `/${locale}/${locale === 'pt' ? 'curriculo' : 'resume'}`
  const slug = projectSlugs[page.id]?.[locale]
  if (!slug) throw new Error(`Unknown project: ${page.id}`)
  return `/${locale}/${locale === 'pt' ? 'projetos' : 'projects'}/${slug}`
}
export function identifyPage(
  locale: Locale,
  segments: string[] = [],
): PageIdentity | null {
  if (!segments.length) return { kind: 'home' }
  if (
    segments.length === 1 &&
    segments[0] === (locale === 'pt' ? 'curriculo' : 'resume')
  )
    return { kind: 'resume' }
  if (
    segments.length === 2 &&
    segments[0] === (locale === 'pt' ? 'projetos' : 'projects')
  ) {
    const entry = Object.entries(projectSlugs).find(
      ([, slugs]) => slugs[locale] === segments[1],
    )
    if (entry) return { kind: 'project', id: entry[0] }
  }
  return null
}
export function switchLanguagePath(pathname: string, target: Locale): string {
  const [current, ...segments] = pathname.split('/').filter(Boolean)
  const page = isLocale(current) ? identifyPage(current, segments) : null
  return localizedPath(target, page ?? { kind: 'home' })
}
// Explicit language URLs always win. Preferences are used only for unprefixed entry points.
export function detectLocale(
  acceptLanguage: string | null,
  saved?: string,
): Locale {
  if (isLocale(saved)) return saved
  const languages = (acceptLanguage ?? '')
    .split(',')
    .map((entry, order) => {
      const [tag, ...parameters] = entry.trim().toLowerCase().split(';')
      const weight = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith('q='))
      const q = weight ? Number(weight.slice(2)) : 1
      return { tag: tag.split('-')[0], q, order }
    })
    .filter((item) => Number.isFinite(item.q) && item.q > 0 && item.q <= 1)
    .sort((a, b) => b.q - a.q || a.order - b.order)
  for (const language of languages)
    if (isLocale(language.tag)) return language.tag
  return 'pt'
}
export function legacyPage(pathname: string): PageIdentity | null {
  if (pathname === '/') return { kind: 'home' }
  const segments = pathname.split('/').filter(Boolean)
  return identifyPage('pt', segments) ?? identifyPage('en', segments)
}
