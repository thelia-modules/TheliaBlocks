const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  prefix: "",
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        cyan: colors.cyan,
        lime: colors.lime,
        rose:colors.rose,
      },},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
