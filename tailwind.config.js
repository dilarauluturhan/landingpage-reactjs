/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        unbounded: ["Unbounded", "sans-serif"]
      },
      colors: {
        "sideColor": "#A3B763",
        "buttonColor": "#454545"
      }
    },
  },
  plugins: [],
}
