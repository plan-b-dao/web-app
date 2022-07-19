const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'spring-green': {
          light: "#5CFF95",
          DEFAULT: "#33FF79",
          dark: "#0AFF60"
        },
      },
      fontFamily: {
        'poppins': ["Poppins", ...defaultTheme.fontFamily.sans],
        'playfair-display': ["Playfair Display", ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        "gradient": "linear-gradient(to right bottom, #33ff79, #34ff8f, #3dffa2, #4bffb4, #5cffc3)",
        "gradient-reverse": "linear-gradient(to right top, #33ff79, #34ff8f, #3dffa2, #4bffb4, #5cffc3)",
        "philanthropy": "url('/assets/images/philanthropy-bg.png')"
      },
      height: {
        'half-screen': "calc(100vh - 25vh)"
      },
      fontSize: {
        'h1': "64px"
      },
      keyframes: {
        'mobile-animation': {
          '0%': { height: "0vh"},
          '100%': { height: "100vh"},
        },
        'mobile-menu-show': {
          '0%': { opacity: "0"},
          '100%': { opacity: "1"},
        }
      },
      animation: {
        'mobile-animation': 'mobile-animation .25s ease-in',
        'mobile-menu-show': 'mobile-menu-show .25s ease-in .35s forwards'
      },
    },
  },
  plugins: [],
}