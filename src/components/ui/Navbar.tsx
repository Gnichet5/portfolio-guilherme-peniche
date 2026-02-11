'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Scroll spy - detect active section
      const sections = ['about', 'projects', 'experience', 'skills', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('')
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg border-b border-neutral-200 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#')}
              className="text-xl md:text-2xl font-bold text-neutral-900 hover:text-indigo-600 transition-colors"
            >
              Portifólio<span className="text-indigo-600">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = link.href === '#' 
                  ? activeSection === '' 
                  : activeSection === link.href.slice(1)

                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive 
                        ? 'text-indigo-600' 
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg"
            >
              Contratar
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white border-b border-neutral-200 shadow-lg"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = link.href === '#' 
                  ? activeSection === '' 
                  : activeSection === link.href.slice(1)

                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-all"
              >
                Contratar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
