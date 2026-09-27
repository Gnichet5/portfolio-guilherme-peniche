import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/constants'
import ProjectVisual from '@/components/ui/ProjectVisual'

export const dynamicParams = false
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.id === slug)
  return {
    title: project?.title ?? 'Projeto',
    description: project?.description,
    alternates: { canonical: `/projetos/${slug}` },
  }
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((item) => item.id === slug)
  if (!project) notFound()
  return (
    <main id="main-content" className="case-page section-shell">
      <Link href="/#projects" className="text-link">
        <ArrowLeft size={16} /> Todos os projetos
      </Link>
      <div className="case-heading">
        <p className="eyebrow">
          {project.category} / {project.year}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <ProjectVisual visual={project.visual} />
      <div className="case-grid">
        <aside>
          <h2>Tecnologias</h2>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="case-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="button button-primary"
                target="_blank"
                rel="noreferrer"
              >
                Ver repositório <ArrowUpRight size={16} />
              </a>
            )}
            {project.articleUrl && (
              <a
                href={project.articleUrl}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                Ler publicação <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </aside>
        <div className="case-copy">
          <section>
            <h2>Contexto</h2>
            <p>{project.context}</p>
          </section>
          <section>
            <h2>O problema</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <h2>Minha contribuição</h2>
            <p>{project.contribution}</p>
          </section>
          <section>
            <h2>O que foi desenvolvido</h2>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Resultado e aprendizados</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
      </div>
      <div className="case-footer">
        <h2>Vamos falar sobre software?</h2>
        <Link href="/#contact" className="button button-primary">
          Entre em contato <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  )
}
