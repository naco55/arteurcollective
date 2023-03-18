/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

const daisyui = require('daisyui');

// module.exports = {
//   purge: ['./src/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       height: {
//         'navbar': '5rem', // Change this value to your desired height
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [daisyui],
// };

