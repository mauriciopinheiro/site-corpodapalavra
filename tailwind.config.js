/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        papel: {
          claro: '#FBF9F8',
          DEFAULT: '#F5F3F0',
          escuro: '#EBE7E0',
          envelhecido: '#E2DDD5'
        },
        tinta: {
          DEFAULT: '#0A0A0A',
          pura: '#000000',
          suave: '#1F1F1F',
          desbotada: '#403E3D',
          cinza: '#666260'
        },
        madeira: {
          clara: '#E8DEC8',
          DEFAULT: '#D8C6A5',
          media: '#C4AE88',
          escura: '#93774B',
          veio: '#84693F'
        },
        acento: {
          vermelho: '#D82B2B',
          azul: '#1D58B8',
          amarelo: '#E5A91A'
        }
      },
      fontFamily: {
        anton: ['Anton', 'Impact', 'sans-serif'],
        serifa: ['"Playfair Display"', 'Georgia', 'serif'],
        corpo: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'carimbo': '3px 3px 0px 0px #0A0A0A',
        'carimbo-lg': '6px 6px 0px 0px #0A0A0A',
        'carimbo-branco': '3px 3px 0px 0px #FFFFFF',
        'carimbo-vermelho': '3px 3px 0px 0px #D82B2B',
        'bloco-madeira': '4px 4px 0px 0px rgba(132, 105, 63, 0.4)'
      }
    },
  },
  plugins: [],
}
