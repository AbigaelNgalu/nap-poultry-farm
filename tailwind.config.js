/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
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
  darkMode: 'media',
}
