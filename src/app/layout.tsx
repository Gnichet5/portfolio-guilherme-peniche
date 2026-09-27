import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { profile } from '@/lib/constants'
export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: 'Guilherme Peniche | Full Stack & IA aplicada',
    template: '%s | Guilherme Peniche',
  },
  description:
    'Desenvolvedor Full Stack com atuação em sistemas corporativos, dashboards e IA aplicada. Conheça projetos, experiência na SERIN e pesquisa premiada no SIINTEC.',
  authors: [{ name: profile.fullName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Guilherme Peniche',
    title: 'Guilherme Peniche | Full Stack & IA aplicada',
    description:
      'Software, dados e IA. Projetos, experiência profissional e pesquisa aplicada.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Peniche | Full Stack & IA aplicada',
    images: ['/opengraph-image'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
