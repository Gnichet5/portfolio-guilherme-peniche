import { ImageResponse } from 'next/og'
import { copy } from '@/lib/copy'
import { isLocale } from '@/lib/i18n'
export const alt = 'Guilherme Peniche — Portfolio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const c = copy[isLocale(lang) ? lang : 'pt']
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#faf9f6',
        color: '#202127',
        padding: '65px 80px',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 22,
          color: '#5550db',
        }}
      >
        <span>GP / {c.seo.portfolio}</span>
        <span>{c.contact.location}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 94, letterSpacing: '-5px', fontWeight: 700 }}>
          Guilherme Peniche.
        </div>
        <div style={{ fontSize: 36, marginTop: 20, color: '#686a76' }}>
          {c.seo.imageRole}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          fontSize: 22,
          borderTop: '1px solid #ddd9ee',
          paddingTop: 25,
        }}
      >
        {c.seo.imageFooter}
      </div>
    </div>,
    size,
  )
}
