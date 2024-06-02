/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFF8F8',
          20: '#FFF8F820',
          40: '#FFF8F840',
          60: '#FFF8F860',
          80: '#FFF8F880',
          90: '#FFF8F890'
        },
        secondary: {
          DEFAULT: '#2E90FA',
          20: '#2E90FA20',
          40: '#2E90FA40',
          60: '#2E90FA60',
          80: '#2E90FA80',
          90: '#2E90FA90'
        },
        warning: {
          DEFAULT: '#8D8543',
          20: '#8D854320',
          40: '#8D854340',
          60: '#8D854360',
          80: '#8D854380',
          90: '#8D854390'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
})
