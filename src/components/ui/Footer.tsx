'use client'

import { Mail, Linkedin, Github, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:Guipeniche@hotmail.com',
      label: 'Email',
      color: 'hover:text-red-600'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/guilherme-peniche-323553264',
      label: 'LinkedIn',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      href: 'https://github.com/Gnichet5',
      label: 'GitHub',
      color: 'hover:text-neutral-900'
    }
  ]

  const quickLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <footer className="relative bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Guilherme Peniche<span className="text-indigo-400">.</span>
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Cientista da Computação recém-formado pelo Centro Universitário Jorge Amado.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-2.5 bg-neutral-800 rounded-lg text-neutral-400 transition-all ${link.color} hover:bg-neutral-700`}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-neutral-400">
              <li>
                <a 
                  href="mailto:Guipeniche@hotmail.com"
                  className="hover:text-white transition-colors"
                >
                  Guipeniche@hotmail.com
                </a>
              </li>
              <li>Salvador, Bahia, BR</li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Buscando oportunidades
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>
            © {currentYear} Guilherme Peniche Cordeiro. Todos os direitos reservados.
          </p>

        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
    </footer>
  )
}
