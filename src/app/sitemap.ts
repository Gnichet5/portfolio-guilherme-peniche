import type { MetadataRoute } from 'next'
import { profile, projects } from '@/lib/constants'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.site, priority: 1 },
    { url: `${profile.site}/curriculo`, priority: 0.5 },
    ...projects.map((project) => ({
      url: `${profile.site}/projetos/${project.id}`,
      priority: 0.8,
    })),
  ]
}
