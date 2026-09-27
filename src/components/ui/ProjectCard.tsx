import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '@/lib/constants'
import { localizedPath, type Locale } from '@/lib/i18n'
import { copy } from '@/lib/copy'
import ProjectVisual from './ProjectVisual'
export default function ProjectCard({
  project,
  index,
  locale,
}: {
  project: Project
  index: number
  locale: Locale
}) {
  const c = copy[locale].projects
  const href = localizedPath(locale, { kind: 'project', id: project.id })
  return (
    <article className="project-card">
      <ProjectVisual visual={project.visual} locale={locale} />
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="project-stack">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <Link href={href} className="text-link">
            {c.explore} <ArrowUpRight size={18} />
          </Link>
          {project.githubUrl && (
            <a
              className="repo-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${c.repository}: ${project.title}`}
            >
              <Github size={17} />
              <span>{c.code}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
