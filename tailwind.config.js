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
      backgroundColor: {
        'default': '#e4d1b6', // Your desired default background color
      },
      screens: {
        'buttons-breakpoint': '1183px',
        'buttons-breakpoint-xs': '722px',
        'logo-navbar-breakpoint': '993px',
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
