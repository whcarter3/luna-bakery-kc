const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      serif: ['var(--font-playfair-display)', ...fontFamily.serif],
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
