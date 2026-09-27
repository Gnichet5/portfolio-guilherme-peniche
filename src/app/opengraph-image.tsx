import { ImageResponse } from 'next/og'
export const alt =
  'Guilherme Peniche — Desenvolvedor Full Stack com atuação em IA aplicada'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export default function OpenGraphImage() {
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
        <span>GP / PORTFÓLIO</span>
        <span>SALVADOR, BAHIA</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 94, letterSpacing: '-5px', fontWeight: 700 }}>
          Guilherme Peniche.
        </div>
        <div style={{ fontSize: 36, marginTop: 20, color: '#686a76' }}>
          Desenvolvimento Full Stack & IA aplicada
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
        Sistemas corporativos · Inteligência artificial · Pesquisa
      </div>
    </div>,
    size,
  )
}
