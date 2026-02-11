'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ui/ProjectCard'
import { projects } from '@/lib/constants'
import { Briefcase } from 'lucide-react'

export default function Projects() {
  // Separar projetos acadêmicos da experiência profissional
  const academicProjects = projects.filter(p => p.id !== 'serin')
  const professionalExperience = projects.filter(p => p.id === 'serin')

  return (
    <>
      {/* Projetos Acadêmicos */}
      <section id="projects" className="relative py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16 text-center mx-auto"

          >
            <span className="inline-block px-4 py-2 mb-6 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">
              Portfólio Acadêmico
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Projetos em Destaque
            </h2>
            
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Projetos desenvolvidos ao longo da graduação combinando ciência de dados, 
              inteligência artificial e engenharia de software para resolver problemas complexos.
            </p>
          </motion.div>

          {/* Academic Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section id="experience" className="relative py-20 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-600 rounded-lg">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">
                Experiência Profissional
              </span>
            </div>
            

          </motion.div>

          {/* Professional Experience Card - Full Width para dar destaque */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {professionalExperience.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={0}
              />
            ))}
          </motion.div>


        </div>
      </section>
    </>
  )
}
