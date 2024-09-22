const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      serif: ['var(--font-pt-serif)', ...fontFamily.serif],
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    extend: {
      colors: {
        //prettier-ignore
        'primary': '#2a3b52',
        secondary: '#91b1b2',
        accent: '#FFEEE2',
        success: '#88B396',
      },
    },
  },
  plugins: [],
};

// 2a3b52: blue color - primary
// 91b1b2: light blue color - secondary
// eec9b6: pink color  - accent
// 8E9E49: green color - success
