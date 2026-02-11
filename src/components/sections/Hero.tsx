'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'

const GeometricBackground = dynamic(() => import('../canvas/GeometricBackground'), {
  ssr: false,
})

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    // CORREÇÃO 1: Mudei overflow-hidden para overflow-x-hidden (permite scroll vertical se precisar)
    // CORREÇÃO 2: Adicionei 'pt-32' para dar espaço ao Header no topo em telas mobile
    // CORREÇÃO 3: min-h-[100dvh] lida melhor com mobile browsers
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-x-hidden bg-gradient-to-b from-white via-neutral-50 to-neutral-100 pt-32 pb-20 md:pt-0 md:pb-0">
      
      {/* Background 3D */}
      <div className="absolute inset-0 -z-10 h-full w-full">
         <GeometricBackground />
      </div>
      
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className="mb-12 flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-neutral-300 bg-white/80 backdrop-blur-sm text-xs md:text-sm font-medium text-neutral-700 shadow-sm whitespace-normal text-center">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
            Buscando oportunidades como Desenvolvedor
          </span>
        </motion.div>

        {/* Nome */}
        <motion.h1 
          variants={itemVariants}
          // Ajustei tamanhos de fonte para mobile (text-5xl)
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight text-neutral-900 break-words"
        >
          Guilherme Peniche
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-neutral-600 mb-4 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Cientista da Computação
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-xl text-neutral-500 mb-8 md:mb-12 max-w-2xl mx-auto px-4"
        >
          Desenvolvedor Full Stack especializado em{' '}
          <span className="text-indigo-600 font-medium">Soluções Inteligentes</span>{' '}
          e otimização de sistemas complexos
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 w-full max-w-md mx-auto sm:max-w-none"
        >
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-lg font-medium transition-all hover:bg-neutral-800 hover:gap-3 hover:shadow-lg"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 border-2 border-neutral-300 text-neutral-900 rounded-lg font-medium hover:border-neutral-900 transition-all bg-white/50 backdrop-blur-sm"
          >
            Entre em Contato
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="mailto:Guipeniche@hotmail.com"
            className="p-3 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all hover:scale-110 bg-white/50"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Gnichet5"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all hover:scale-110 bg-white/50"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-peniche-323553264"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-all hover:scale-110 bg-white/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto px-2"
        >
          {[
            'React',
            'Next.js',
            'Python',
            'Machine Learning',
            'PostgreSQL',
            'Vue.js',
            'Java',
            'Deep Learning'
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 text-neutral-700 text-xs md:text-sm font-medium hover:border-indigo-400 hover:text-indigo-600 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Escondido em telas muito pequenas para não sobrepor */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-neutral-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero