'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'

function Toast({ message, type, onClose }: { 
  message: string; 
  type: 'success' | 'error'; 
  onClose: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border ${
        type === 'success' 
          ? 'bg-green-50 border-green-200 text-green-800' 
          : 'bg-red-50 border-red-200 text-red-800'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-green-600" />
      ) : (
        <XCircle className="w-5 h-5 text-red-600" />
      )}
      <p className="font-medium">{message}</p>
      <button onClick={onClose} className="ml-4 hover:opacity-70 transition-opacity">✕</button>
    </motion.div>
  )
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false) // Novo estado para sucesso
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false) // Reseta sucesso ao tentar enviar novamente

    const form = e.currentTarget // Salva referência do form
    const formData = new FormData(form)
    
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      honeypot: formData.get('honeypot')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setToast({ message: result.message, type: 'success' })
        setIsSuccess(true) // Ativa estado de sucesso
        form.reset() // Limpa formulário usando a referência salva
        
        setTimeout(() => {
            setToast(null)
            setIsSuccess(false) // Reseta botão após 5s
        }, 5000)
      } else {
        setToast({ message: result.error, type: 'error' })
        setTimeout(() => setToast(null), 5000)
      }
    } catch (error) {
      setToast({ message: 'Erro de conexão. Tente novamente.', type: 'error' })
      setTimeout(() => setToast(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Guipeniche@hotmail.com',
      href: 'mailto:Guipeniche@hotmail.com',
      color: 'hover:text-red-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Guilherme Peniche Cordeiro',
      href: 'https://www.linkedin.com/in/guilherme-peniche-323553264',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Gnichet5',
      href: 'https://github.com/Gnichet5',
      color: 'hover:text-neutral-900'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Salvador, Bahia, BR',
      href: null,
      color: 'hover:text-green-600'
    }
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50">
      <AnimatePresence>
        {toast && (
          <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 text-center mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Vamos Conversar
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Estou aberto a oportunidades de desenvolvimento, colaborações e projetos desafiadores. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LADO ESQUERDO: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon

                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      {link.href ? (
                        <a 
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`group flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-md transition-all ${link.color}`}
                        >
                          <div className="p-3 bg-neutral-50 rounded-lg group-hover:bg-neutral-100 transition-colors">
                            <Icon className="w-5 h-5 text-neutral-600 group-hover:text-current transition-colors" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
                              {link.label}
                            </div>
                            <div className="text-neutral-900 font-medium text-sm md:text-base">
                              {link.value}
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 bg-white border border-neutral-200 rounded-xl">
                          <div className="p-3 bg-neutral-50 rounded-lg">
                            <Icon className="w-5 h-5 text-neutral-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
                              {link.label}
                            </div>
                            <div className="text-neutral-900 font-medium text-sm md:text-base">
                              {link.value}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Disponibilidade
              </h4>
              <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                Buscando oportunidade como desenvolvedor. 
                Disponível para full-time. Respondo geralmente em até 24 horas.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-neutral-700">
                  Disponível imediatamente
                </span>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="honeypot"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Sobre o que você gostaria de conversar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  disabled={isSubmitting || isSuccess}
                  className="w-full px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`group w-fit mx-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-lg mt-2 disabled:cursor-not-allowed ${
                  isSuccess 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : isSuccess ? (
                  <>
                    Mensagem Enviada!
                    <CheckCircle className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-xs text-neutral-500 text-center">
              Ao enviar esta mensagem, você concorda em ser contatado por email.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}