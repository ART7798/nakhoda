/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dana: ["DanaRegular"],
      },
      fontSize: {
        15: "15px",
        13: "13px",
        12: "12px",
      },
      color: {
        primary: "#fde900",
        secondary: "#76d4ec",
        tertiary: "#331209",
        darkText: "#252525",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
