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
          // Adicionei 'text-center' e 'mx-auto' aqui
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <span className="inline-block px-4 py-2 mb-6 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">
            Expertise Técnica
          </span>
          
          {/* O H2 já estava com text-center, mas o pai garante */}
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
                className="group relative bg-white border border-neutral-200 rounded-2xl p-8 hover:border-neutral-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors">
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
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2.5 bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm font-medium rounded-lg hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Projetos pessoais', value: '6+' },
            { label: 'Anos de Experiência Profissional', value: '1+' },
            { label: 'Palestras sobre tecnologia', value: '5+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white border border-neutral-200 rounded-xl hover:border-indigo-300 transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

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
