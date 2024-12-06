/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM sans', 'sans-serif']
      },
      margin: {
        '22': '5.5rem',
      },
      width: {
        '112': '28rem', // Classe w-112 per 28rem
        '120': '30rem', // Classe w-128 per 32rem
        '144': '36rem',
      },
      height: {
        '112': '28rem', // Classe w-112 per 28rem
        '120': '30rem', // Classe w-128 per 32rem
        '144': '36rem',
        'screen-and-half': '150vh',
        '180vh': '180vh',
        '350vh': '350vh',
      },
      spacing: {
        '76': '19rem',
        '88': '22rem',
        '104': '26rem',
        '132': '33rem',
      },
      backgroundImage: {
        'image': "url('/src/assets/bg-cafe.jpg')",
      },
      backgroundSize: {
        '100%': '100%',
      },
      colors: {
        'black': '#111315',
        'dark-grey': '#1B1D1F',
        'grey': '#6F757C',
        'green': '#BEE3CC',
        'white': '#FEF7EE',
        'yellow': '#F6C768',
        'red': '#ED735D',
      },
    },
  },
  plugins: [],
}

