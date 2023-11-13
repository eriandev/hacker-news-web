import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./**/*.tsx'],
  safelist: ['text-sm', 'text-base', 'text-lg', 'mb-32'],
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
        400: '#D6D6D6',
        500: '#979797',
        600: '#767676',
        700: '#6B6B6B',
        800: '#606060',
        900: '#2E2E2E'
      },

      white: '#FFFFFF',
      black: '#343434',
      transparent: 'transparent'
    },

    backgroundImage: {
      header: 'linear-gradient(to bottom, #ececec -32%, #fff 124%)'
    },

    boxShadow: {
      sm: '0 2px 2px 0 #dad8d8',
      md: '0 1px 4px 0 rgba(0,21,41,0.12)'
    },

    maxWidth: {
      card: '550px',
      container: '1140px'
    },

    extend: {}
  },

  plugins: []
}

export default config
