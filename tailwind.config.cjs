/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      NotoSans: ['Noto Sans TC', 'sans-serif']
    },
    extend: {
      container: {
        center: true, 
        padding: "60px"
      }
    },
  },
  plugins: [],
}
