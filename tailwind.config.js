/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    fontFamily: {
      caveat: ["Caveat", "cursive"],
      orelega: ["Orelega One", "serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      prosto: ["Prosto One", "sans-serif"],
    },
    extend: {
      colors: {
        yellow: {
          100: "#F0AF75",
          200: "#FFAE46",
        },
        pink: {
          100: "#F77C91",
          200: "#F150F6",
        },
        red: {
          100: "#FA374A",
        },
        purple: {
          100: "#7E38D8",
          200: "#564087",
          300: "#45286A",
        },
        blue: {
          100: "#5565B0",
          200: "#353E6A",
          300: "#3F4081",
        },
        dark: {
          100: "#202135",
          200: "#2B2337",
        },
        white: "#F7FBF7",

        // black: "#130D19",
      },
    },
  },
  plugins: [],
};
