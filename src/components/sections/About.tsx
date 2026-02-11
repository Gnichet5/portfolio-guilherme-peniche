'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Target, Code2 } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Formação Acadêmica',
      description: 'Bacharel em Ciência da Computação pelo Centro Universitário Jorge Amado (UNIJORGE)'
    },
    {
      icon: Target,
      title: 'Pesquisa & TCC',
      description: 'Sistema de detecção de fraudes em cartões de crédito e pesquisa em otimização de agentes de Deep Reinforcement Learning'
    },
    {
      icon: Code2,
      title: 'Projetos Práticos',
      description: 'Desenvolvimento de sistemas web (Laravel, React, Inertia.js) e soluções embarcadas com ESP32'
    },
    {
      icon: Briefcase,
      title: 'Objetivo Profissional',
      description: 'Busco oportunidade como desenvolvedor para aplicar conhecimentos e evoluir na carreira'
    }
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full">
            Sobre Mim
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Desenvolvedor em Formação
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          
          {/* Bio Text */}
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {/* Adicionei 'text-justify' aqui */}
            <p className="text-lg text-neutral-700 leading-relaxed text-justify">
              Sou <span className="font-semibold text-neutral-900">recém-formado em Ciência da Computação pela UNIJORGE</span> e 
              venho construindo minha trajetória com foco em desenvolvimento de software e soluções inteligentes.
            </p>

            {/* Adicionei 'text-justify' aqui */}
            <p className="text-base text-neutral-600 leading-relaxed text-justify">
              Ao longo da graduação, participei de <strong>projetos práticos</strong> que uniram hardware, software e 
              análise de dados, desde sistemas embarcados com ESP32 para monitoramento ambiental até aplicações web 
              em Laravel, React e Inertia.js voltadas à automação de processos.
            </p>

            {/* Adicionei 'text-justify' aqui */}
            <p className="text-base text-neutral-600 leading-relaxed text-justify">
              Também desenvolvi <strong>pesquisas aplicadas em machine learning</strong>, com destaque para minha pesquisa
              "Optimization of code for scalability of deep reinforcement learning agents in slow and stochastic industrial process patterns",
              que investiga o impacto das técnicas de otimização de código na escalabilidade e no tempo de treinamento de agentes de aprendizado por reforço profundo (DRL).
            </p>

            {/* Adicionei 'text-justify' aqui */}
            <p className="text-base text-neutral-600 leading-relaxed text-justify">
              Acredito que posso <strong>contribuir trazendo uma visão analítica aliada à prática de desenvolvimento</strong>, 
              buscando sempre soluções eficientes, bem estruturadas e com impacto real. Tenho facilidade em aprender 
              novas tecnologias e trabalhar em equipe.
            </p>
          </motion.div>

          {/* Card da Direita - AGORA ESCONDIDO NO MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // MUDANÇA AQUI: Adicionei 'hidden lg:block' no início da className
            className="hidden lg:block relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl bg-neutral-800 border border-neutral-700"
          >
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-start p-8 md:p-10">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-neutral-400 tracking-wider uppercase">
                      Sobre Mim
                    </h3>
                     <div className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center bg-neutral-700">
                        <Code2 className="text-white w-5 h-5" />
                     </div>
                </div>
                
                <div className="space-y-4 text-white">
                  <p className="text-3xl md:text-4xl font-bold text-neutral-400">
                    Guilherme Peniche Cordeiro
                  </p>
                  <p className="text-xl font-bold text-neutral-400 text-lg font-medium">
                    Cientista da Computação • UNIJORGE
                  </p>
                  
                  <div className="h-px bg-neutral-600 w-full my-6" />
                  
                  <p className="text-base font-bold text-neutral-400 leading-relaxed text-justify" >
                    Desenvolvedor Full Stack em formação com paixão por criar soluções que fazem diferença.
                    Procurando oportunidades para aplicar conhecimentos, aprender e crescer na carreira de desenvolvimento de software.
                  </p>
                </div>
              </motion.div>
            </div>
            
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:bg-white hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white border border-neutral-200 rounded-lg group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-colors">
                    <Icon className="w-5 h-5 text-neutral-700 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1.5">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}