/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark","cupcake","luxury","coffee","business","sunset","night","forest"],
  },
}