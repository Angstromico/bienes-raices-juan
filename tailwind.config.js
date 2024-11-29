/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        primary: ['Lato', 'sans-serif'], // Primary font
      },
      colors: {
        yellow: '#E08709',
        green: '#71B100',
        gray: '#e1e1e1',
        darkGray: '#333333',
      },
      screens: {
        mobile: '480px',
      },
      maxWidth: {
        centeredContent: '800px',
      },
    },
  },
  plugins: [],
}
