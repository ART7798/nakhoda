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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        bodyBg: "var(--body-bg)",
        darkText: "var(--dark-text)",
        inputText: "var(--input-text)",
        inputBg: "var(--input-bg)",
        accordionTitle: "var(--accordion-title)",
        accordionText: "var(--accordion-text)",
        discount: "var(--discount)",
      },
      borderRadius: {
        5: "var(--border-radius-5)",
        7: "var(--border-radius-7)",
        9: "var(--border-radius-9)",
        10: "var(--border-radius-10)",
      },
      spacing: {
        "5c": "5px",
        "7c": "7px",
        "9c": "9px",
        "10c": "10px",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
