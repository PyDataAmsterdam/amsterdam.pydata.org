/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      padding: {
        '40p': '40%',
        '56p': '56%',
      },
      colors: {
        'pydata-blue': '#459cb8',
        'pydata-orange': '#ed9042',
      },
      backgroundColor: {
        'default': '#e4d1b6', // Your desired default background color
      },
      screens: {
        'buttons-breakpoint': '1183px',
        'buttons-breakpoint-xs': '722px',
        'logo-navbar-breakpoint': '993px',
        'pretalx-widget-breakpoint': '710px'
      },
      keyframes: {
        flipDown: {
          '100%': {transform: 'rotateX(90deg)'}
        },
        flipUp: {
          '100%': {transform: 'rotateX(0deg)'}
        }
      },
      animation: {
        'flipDown': 'flipDown 200ms ease-in',
        'flipUp': 'flipUp 200ms ease-out 200ms',
      }
    },
    variants: {
      extend: {
        padding: ['responsive'],
        grayscale: ['hover'],
        filter: ['hover'],
        animation: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
}
