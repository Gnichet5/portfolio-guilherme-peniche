import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import { profile } from '@/lib/constants'
import { isLocale, locales } from '@/lib/i18n'
export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: 'Guilherme Peniche', template: '%s | Guilherme Peniche' },
  authors: [{ name: profile.fullName }],
  icons: { icon: '/icon' },
}
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return (
    <html lang={lang === 'pt' ? 'pt-BR' : 'en'}>
      <body>
        <Navbar locale={lang} />
        {children}
        <Footer locale={lang} />
      </body>
    </html>
  )
}
