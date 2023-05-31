/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      letterSpacing: {
        tightest: '-.08em',
      },
      lineHeight: {
        thin:'0.75',        
      },
      gradientColorStops: {
        'gradient-1-start': '#d4acfb',
        'gradient-1-end': '#b84fce',
        
        'gradient-2-start': '#ff930f',
        'gradient-2-end': '#fff95b',
        
        'gradient-3-start': '#6ef195',
        'gradient-3-end': '#00e3fd',


      },
      keyframes: {
        'gradient-foreground-1': {
          'from, 16.667%, to': {
            opacity: 1,
          },
          '33.333%, 83.333%': {
            opacity: 0,
          },
        },
        'gradient-background-1': {
          'from, 16.667%, to': {
            opacity: 0,
          },
          '25%, 91.667%': {
            opacity: 1,
          },
        },
        'gradient-foreground-2': {
          'from, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 66.667%': {
            opacity: 0,
          },
        },
        'gradient-background-2': {
          'from, to': {
            opacity: 1,
          },
          '33.333%, 50%': {
            opacity: 0,
          },
          '25%, 58.333%': {
            opacity: 1,
          },
        },
        'gradient-foreground-3': {
          'from, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        'gradient-background-3': {
          'from, 58.333%, 91.667%, to': {
            opacity: 1,
          },
          '66.667%, 83.333%': {
            opacity: 0,
          },
        },
        'text-enter':{
          'from': { opacity: 0},
          'to': { opacity: 1},
        },
        'text-line-height':{
          'from': { lineHeight: 0 },
          'to': { lineHeight: 0.7 },
        },
        'blink-dash':{
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        'gradient-background-1': 'gradient-background-1 8s infinite',
        'gradient-foreground-1': 'gradient-foreground-1 8s infinite',
        'gradient-background-2': 'gradient-background-2 8s infinite',
        'gradient-foreground-2': 'gradient-foreground-2 8s infinite',
        'gradient-background-3': 'gradient-background-3 8s infinite',
        'gradient-foreground-3': 'gradient-foreground-3 8s infinite',
        'text-enter': 'text-enter 1s ease-in',
        'text-line-height': 'text-line-height 1s ease alternate',
        'blink-dash': 'blink-dash 1s linear infinite',
      }
    }
  },
  plugins: [],
}
