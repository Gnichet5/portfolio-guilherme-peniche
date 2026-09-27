import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/constants'
import { localizedPath, type Locale } from '@/lib/i18n'
import { copy } from '@/lib/copy'
import ProjectVisual from '@/components/ui/ProjectVisual'
export default function ProjectPage({
  locale,
  project,
}: {
  locale: Locale
  project: Project
}) {
  const c = copy[locale].case
  return (
    <main id="main-content" className="case-page section-shell">
      <Link href={`${localizedPath(locale)}#projects`} className="text-link">
        <ArrowLeft size={16} />
        {c.all}
      </Link>
      <div className="case-heading">
        <p className="eyebrow">
          {project.category} / {project.year}
        </p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <ProjectVisual visual={project.visual} locale={locale} />
      <div className="case-grid">
        <aside>
          <h2>{c.technologies}</h2>
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
                {c.repository} <ArrowUpRight size={16} />
              </a>
            )}
            {project.articleUrl && (
              <a
                href={project.articleUrl}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                {c.publication} <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </aside>
        <div className="case-copy">
          <section>
            <h2>{c.context}</h2>
            <p>{project.context}</p>
          </section>
          <section>
            <h2>{c.problem}</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <h2>{c.contribution}</h2>
            <p>{project.contribution}</p>
          </section>
          <section>
            <h2>{c.developed}</h2>
            <ul>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>{c.outcome}</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
      </div>
      <div className="case-footer">
        <h2>{c.talk}</h2>
        <Link
          href={`${localizedPath(locale)}#contact`}
          className="button button-primary"
        >
          {c.contact} <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  )
}
