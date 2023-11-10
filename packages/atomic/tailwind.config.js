/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  safelist: ['text-sm', 'text-base', 'text-lg'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
    },

    fontSize: {
      sm: '0.688rem',
      base: '0.875rem',
      lg: '1rem'
    },

    colors: {
      red: '#DD0031',
      blue: '#1797FF',

      gray: {
        100: '#FCFCFC',
        200: '#F5F5F5',
        300: '#EAEAEA',
        400: '#979797',
        500: '#767676',
        600: '#6B6B6B',
        700: '#2E2E2E'
      },

      white: '#FFFFFF',
      black: '#343434',
      transparent: 'transparent'
    },

    boxShadow: {
      sm: '0 2px 2px 0 #dad8d8'
    },

    extend: {}
  },
  plugins: []
}
