/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bills:{
          lightblue:'#EEF5FC',
          darkblue : '#1F6CAB',
          lightgrey:'#A09D9D',
          skyblue:'#2390FA',
          white:'#EAECF0',
          lightgrey2:'#F9F9F9'

        }
      }
    },
  },
  plugins: [],
}