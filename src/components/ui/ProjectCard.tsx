'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Award } from 'lucide-react'
import type { Project } from '@/lib/constants'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-full shadow-lg">
          <Award className="w-3 h-3" />
          Destaque
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <Code2 className="w-5 h-5 text-indigo-600" />
            </div>
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-sm text-neutral-500">{project.year}</p>
        </div>

        <motion.div
          className="p-2 bg-neutral-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1, rotate: 45 }}
        >
          <ArrowUpRight className="w-5 h-5 text-neutral-600" />
        </motion.div>
      </div>

      {/* Description */}
      <p className="text-neutral-700 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Problem Solved */}
      <div className="mb-6 p-4 bg-neutral-50 rounded-xl border border-neutral-100">
        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
          Problema Resolvido
        </h4>
        <p className="text-sm text-neutral-700 leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* Highlights */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Destaques
        </h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="mt-1.5 w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
          Stack Tecnológica
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
    </motion.article>
  )
}
