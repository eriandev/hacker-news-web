import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./**/*.tsx'],
  safelist: ['text-sm', 'text-base', 'text-lg', 'text-xl', 'mb-40'],

  theme: {
    fontFamily: {
      roboto: ['Roboto', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']
    },

    fontSize: {
      sm: '0.688rem',
      base: '0.875rem',
      lg: '1rem',
      xl: '1.5rem'
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
      header: 'linear-gradient(to bottom, #ECECEC -32%, #FFF 124%)'
    },

    boxShadow: {
      sm: '0 2px 2px 0 #DAD8D8',
      md: '0 1px 4px 0 rgba(0,21,41,0.12)'
    },

    maxWidth: {
      card: '550px',
      container: '1140px'
    },

    keyframes: {
      float: {
        '0%': { transform: 'translatey(0px)' },
        '50%': { transform: 'translatey(-15px)' },
        '100%': { transform: 'translatey(0px)' }
      }
    },

    animation: {
      floating: 'float 6s ease-in-out infinite'
    },

    extend: {}
  },

  plugins: []
}

export default config
