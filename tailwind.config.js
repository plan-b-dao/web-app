const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosso': {
          light: "#F50000",
          DEFAULT: "#D00000",
          dark: "#CC0000",
        },
        'dark-jungle': {
          light: "#2D392F",
          DEFAULT: "#212922",
          dark: "#1B221C"
        },
        'cultured': {
          light: "#FFFFFF",
          DEFAULT: "#F5F5F5",
          dark: "#EBEBEB",
        },
      },
      fontFamily: {
        'poppins': ["Poppins", ...defaultTheme.fontFamily.sans],
        'playfair-display': ["Playfair Display", ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        "gradient": "linear-gradient(to right bottom, #33ff79, #34ff8f, #3dffa2, #4bffb4, #5cffc3)"
      },
      height: {
        'half-screen': "calc(100vh - 25vh)"
      },
      fontSize: {
        'h1': "64px"
      }
    },
  },
  plugins: [],
}