const autoprefixer = require("autoprefixer");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Default sizes
        base: "16px",
        lg: "18px",

        // Custom sizes for mobile and other breakpoints
        sm: "12px",
        xl: "18px",
      },
      colors: {
        myOrange: "#E39E58",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [autoprefixer],
};
