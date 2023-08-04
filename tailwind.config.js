/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Chakra Petch, sans-serif'],
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}