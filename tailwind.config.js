/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navBg:"#282A3A",
        naText: "#735F32",
        navText: " #C69749"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

}

