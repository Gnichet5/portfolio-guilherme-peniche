import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
