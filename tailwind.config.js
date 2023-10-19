/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FD9222',
        'secondary': '#5e6282',
        'dark': '#283046',
        'dark-secondary': '#161d31',
      }
    },
  },
  plugins: [require("daisyui")]}

