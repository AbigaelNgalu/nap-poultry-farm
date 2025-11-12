/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Root-level index (if you run vite from repo root)
    "./index.html",
    // My-react-app files
    "./my-react-app/index.html",
    "./my-react-app/src/**/*.{js,jsx,ts,tsx,html}",
    // Any other folders with markup/components
    "./my-react-app/public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

