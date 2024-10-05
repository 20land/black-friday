/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeOne: "fade 2s ease-in-out infinite alternate",
        fadeTwo: "fade 2s ease-in-out 2s infinite alternate",
        fadeThree: "fade 2s ease-in-out 4s infinite alternate",
        fadeFour: "fade 2s ease-in-out 6s infinite alternate",
      },
    },
  },
  plugins: [],
};
