import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Project } from '@/lib/constants'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <article className="project-card">
      <ProjectVisual visual={project.visual} />
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>
          <Link href={`/projetos/${project.id}`}>{project.title}</Link>
        </h3>
        <p>{project.description}</p>
        <div className="project-stack">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <Link href={`/projetos/${project.id}`} className="text-link">
            Explorar projeto <ArrowUpRight size={18} />
          </Link>
          {project.githubUrl && (
            <a
              className="repo-link"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Código de ${project.title} no GitHub`}
            >
              <Github size={17} />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
