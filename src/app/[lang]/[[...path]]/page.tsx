import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Home from '@/components/pages/Home'
import Resume from '@/components/pages/Resume'
import ProjectPage from '@/components/pages/Project'
import { getProjects } from '@/lib/content'
import { copy } from '@/lib/copy'
import { profile } from '@/lib/constants'
import { identifyPage, isLocale, localizedPath, projectSlugs } from '@/lib/i18n'
export const dynamicParams = false
export function generateStaticParams({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) return []
  const locale = params.lang
  return [
    { path: [] },
    { path: localizedPath(locale, { kind: 'resume' }).split('/').slice(2) },
    ...Object.keys(projectSlugs).map((id) => ({
      path: localizedPath(locale, { kind: 'project', id }).split('/').slice(2),
    })),
  ]
}
type Props = { params: Promise<{ lang: string; path?: string[] }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, path } = await params
  if (!isLocale(lang)) return {}
  const page = identifyPage(lang, path)
  if (!page) return {}
  const c = copy[lang]
  const project =
    page.kind === 'project'
      ? getProjects(lang).find((item) => item.id === page.id)
      : undefined
  const title =
    page.kind === 'home'
      ? c.seo.title
      : page.kind === 'resume'
        ? c.resume.title
        : project!.title
  const description =
    project?.description ??
    (page.kind === 'resume' ? c.resume.summary : c.seo.description)
  const canonical = localizedPath(lang, page)
  const images = [
    {
      url: `/${lang}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: c.seo.title,
    },
  ]
  return {
    title: page.kind === 'home' ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        'pt-BR': localizedPath('pt', page),
        en: localizedPath('en', page),
        'x-default': localizedPath('pt', page),
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: lang === 'pt' ? 'pt_BR' : 'en_US',
      alternateLocale: lang === 'pt' ? 'en_US' : 'pt_BR',
      siteName: profile.name,
      url: canonical,
      images,
    },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}
export default async function LocalizedPage({ params }: Props) {
  const { lang, path } = await params
  if (!isLocale(lang)) notFound()
  const page = identifyPage(lang, path)
  if (!page) notFound()
  if (page.kind === 'home') return <Home locale={lang} />
  if (page.kind === 'resume') return <Resume locale={lang} />
  const project = getProjects(lang).find((item) => item.id === page.id)
  if (!project) notFound()
  return <ProjectPage locale={lang} project={project} />
}
