/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        augustina :["Agustina"],
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateY(120%)",
            transform: "translateY(120%)",
          },
          "100%": {
            "-webkit-transform": "translateY(0%)",
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    }
  },
  plugins: [],
}

