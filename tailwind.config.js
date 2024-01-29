/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./assets/AZ_HP_BG.png')",
      },
      colors: {
        'prime-light': '#FFF7F0',
        'prime-red': '#DE1221',
        'prime-dark': '#331700',
        'prime-brown': '#CE8A51',
        'second-brown': '#601F0D',
      },
      fontFamily: {
        body: ['Inter var', ...defaultTheme.fontFamily.sans],
        concert: ['Concert One'],
        fancy: ['Gwendolyn'],
        title: ['Bevan'],
      },
    },
  },
  plugins: [],
}

