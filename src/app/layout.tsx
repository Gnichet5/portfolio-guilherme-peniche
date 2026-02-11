import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Guilherme Peniche | Cientista da Computação',
  description: 'Portfólio de Guilherme Peniche Cordeiro - Desenvolvedor Full Stack júnior especializado em soluções inteligentes, IA e desenvolvimento web.',
  keywords: ['Desenvolvedor Júnior', 'Full Stack', 'React', 'Next.js', 'Python', 'IA', 'Machine Learning', 'Cientista da Computação'],
  authors: [{ name: 'Guilherme Peniche Cordeiro' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Guilherme Peniche | Cientista da Computação',
    description: 'Desenvolvedor Full Stack júnior especializado em soluções inteligentes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
