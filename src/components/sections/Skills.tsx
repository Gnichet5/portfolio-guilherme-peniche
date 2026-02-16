'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Layers } from 'lucide-react'
import { skillsData } from '@/lib/constants'

const iconMap: Record<string, any> = {
  'Linguagens': Code2,
  'Data & Analytics': Database,
  'Frameworks & Libraries': Layers,
  'Tools & DevOps': Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-gradient-to-b from-neutral-50 to-white">
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
            Expertise Técnica
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Habilidades e Tecnologias
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Stack tecnológica diversificado com foco em desenvolvimento full stack, 
            ciência de dados e inteligência artificial.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, categoryIndex) => {
            const Icon = iconMap[category.title] || Code2
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                // Removido: group, hovers de borda/sombra e transitions
                className="relative bg-white border border-neutral-200 rounded-2xl p-8"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Removido: group-hover */}
                  <div className="p-3 bg-indigo-50 rounded-xl">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      // Removido: whileHover, hovers de cor e cursor-default (mantido padrao)
                      className="px-4 py-2.5 bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Removido: Div de gradiente que aparecia no hover */}
              </motion.div>
            )
          })}
        </div>

     

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl"
        >
          <p className="text-center text-neutral-700 leading-relaxed">
            <span className="font-semibold text-neutral-900">Sempre aprendendo.</span>{' '}
            Atualmente aprofundando conhecimentos sobre Cloud Computing pela Escola da Nuvem
          </p>
        </motion.div>
      </div>
    </section>
  )
}