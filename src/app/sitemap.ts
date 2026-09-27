import type { MetadataRoute } from 'next'
import { profile } from '@/lib/constants'
import {
  locales,
  localizedPath,
  projectSlugs,
  type PageIdentity,
} from '@/lib/i18n'
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageIdentity[] = [
    { kind: 'home' },
    { kind: 'resume' },
    ...Object.keys(projectSlugs).map((id) => ({
      kind: 'project' as const,
      id,
    })),
  ]
  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: profile.site + localizedPath(locale, page),
      priority: page.kind === 'home' ? 1 : page.kind === 'resume' ? 0.5 : 0.8,
      alternates: {
        languages: {
          'pt-BR': profile.site + localizedPath('pt', page),
          en: profile.site + localizedPath('en', page),
        },
      },
    })),
  )
}
