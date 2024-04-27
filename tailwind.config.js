/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

const daisyui = require('daisyui');