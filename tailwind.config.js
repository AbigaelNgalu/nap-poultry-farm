/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./my-react-app/index.html",
    "./my-react-app/src/**/*.{js,jsx,ts,tsx,html}",
    "./my-react-app/public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        customPurple: '#7162a8',
        customIndigo: '#747bff',
      },
    },
  },
  plugins: [],
  darkMode: 'media', // enable light/dark mode based on system preference
}
