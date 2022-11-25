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
        darkBlue: '#6752FD',
      },
      backgroundColor: {
        black: '#191919',
        gradientLightBlue: '#5BB9F2',
        gradientDarkBlue: '#6752FD',
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
      },
    },
  },
  plugins: [],
}
