/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navBg:"#022b4f",
        navText: " #FFFFFF"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],

}

