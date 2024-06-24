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
        h1: "50px",
        h2: "40px",
        h3: "32px",
        h4: "24px",
        h5: "20px",
        h6: "18px",
      },
      fontWeight: {
        h1: "800",
        h2: "800",
        h3: "700",
        h4: "600",
        h5: "500",
        h6: "500",
      },
      colors: {
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
      backgroundImage: {
        "gradient-linear": "var(--gradient-linear)",
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
