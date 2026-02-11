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

      const sections = ['about', 'projects', 'experience', 'skills', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    // espera o menu fechar antes de rolar
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setActiveSection('')
      } else {
        const element = document.querySelector(href)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.scrollY - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }
    }, 250) // tempo da animação
  }

  const showSolidNav = isScrolled || isMobileMenuOpen

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          showSolidNav
            ? 'bg-white/95 backdrop-blur-lg border-b border-neutral-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, '#')}
              className="text-xl md:text-2xl font-bold text-neutral-900 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              Portifólio<span className="text-indigo-600">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '#'
                    ? activeSection === ''
                    : activeSection === link.href.slice(1)

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
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
                  </a>
                )
              })}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all hover:shadow-lg cursor-pointer"
            >
              Contratar
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors z-[110]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-[90] md:hidden bg-white border-b border-neutral-200 shadow-xl overflow-hidden pointer-events-auto"
          >
            <div className="px-6 py-6 space-y-2 flex flex-col">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '#'
                    ? activeSection === ''
                    : activeSection === link.href.slice(1)

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block w-full text-left px-4 py-4 rounded-lg font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="block w-full text-center px-4 py-4 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-all mt-4 cursor-pointer"
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
