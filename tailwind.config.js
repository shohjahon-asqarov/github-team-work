/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'card': '0px 1px 2px 0px #00000026'
      }
    },
  },
  plugins: [],
}

