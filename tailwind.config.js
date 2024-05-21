/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_blue: '#0156FF',
        main_blue_white: '#01A4FF',
        main_white: '#F5F7FF',
        main_linear_blue: "#005EAD",
        main_gray: '#A2A6B0',
        main_white_gray: '#CACDD8',
        main_red: '#C94D3F',
        main_gray_black: '#666666'
      },
      borderColor: {
        main_blue: '#0156FF'
      }
    },
  },
  plugins: [],
}