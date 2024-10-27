const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tailwind-datepicker-react/dist/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        customThin: ['Thin'],
        customRegular: ['Regular'],
        customMedium: ['Medium'],
        customLight: ['Light'],
        customBold: ['Bold']
      },
      colors: {
        black: {
          default: '#000000',
          main: '#0D0D0D'
        },
        gray: {
          border: '#D1D1D6',
          lighter: '#D1D1D6',
          light: '#F8F8F9',
          main: '#F6F6F7',
          calendar: '#F4F4F9',
          dark: '#E5E5EA',
          darker: '#8E8E93',
          'light-1': '#FCFCFD',
          'light-2': '#EAE5E2'
        },
        blue: {
          main: '#5495FC',
          dark: '#007AFF'
        },
        green: {
          lighter: '#00CA39',
          light1: '#34C759',
          light: '#31D366',
          main: '#60EC8E',
          dark: '#69CB3A',
          active: '#34C7591F',
          delivered: '#E4F6E9'
        },
        orange: {
          main: '#FF9900',
          intransit: '#FCF7E2'
        },
        yellow: {
          main: '#FFD020',
          dark: '#FF9500',
          warning: '#FF95001F'
        },
        red: {
          main: '#E33E3E',
          dark: '#FF2D55',
          lock: '#FF2D551F',
          cancel: '#F9E5E6'
        },
        purple: {
          main: '#9A3EE3',
          storage: '#F0E5FA'
        },
        pink: {
          main: '#FF2D55'
        }
      },
      backgroundImage: {
        main: "url('/src/assets/bg/bg.png')"
      }
    },
    boxShadow: {
      's-1': '0px 4px 64px 0px #0000000D',
      's-2': '0px -6px 32px 0px #0000000D',
      's-3': '-1px 2px 100px 0px #004DFF0D',
      's-4': '0px 4px 20px 0px #0000000D'
    }
  },
  plugins: []
}
