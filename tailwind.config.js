/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#292929',
        red: '#FF2B51',
      },
      backgroundColor: {
        black: '#191919',
      },
    },
  },
  plugins: [],
}
