const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'tiny': '.45rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
     },
    colors: {
      inforekan : {
        primary : '#5B7EF1',
        background: '#F6F6FA',
        backgroundLight: '#E9EEFD',
        backgroundDark: '#CBCCDC',
        header: '#12153D',
        textSecondary: '#8684A1',
        textPrimary: '#757393',
        text: '#D1D2E0',
        info: '#6BB5F9',
        success: '#85C13F',
        warning: '#EFB73F',
        cardFooter: '#FBFBFD',
        
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
      orange: colors.orange,
      indigo: colors.indigo,
      amber: colors.amber,
      lime : colors.lime,
      teal : colors.teal,
      emerald : colors.emerald,
      cyan : colors.cyan,
      lightBlue : colors.lightBlue,
      violet : colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.fuchsia,
      blueGray : colors.blueGray,
      coolGray: colors.coolGray,
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      }
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
