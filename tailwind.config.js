const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", ...fontFamily.sans],
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      colors: {
        cyan: {
          10: "#001d35",
          20: "#003549",
          30: "#004D68",
          40: "#006689",
          50: "#C2E7FF",
          60: "#209BCC",
          70: "#A8CBFF",
          80: "#78D1FF",
          90: "#C3E8FF",
          95: "#E2F3FF",
          99: "#FBFCFF",
        },
        dark: {
          10: "#151C21",
          20: "#2A3136",
          30: "#41484D",
          40: "#585F64",
          50: "#71787D",
          60: "#8A9297",
          70: "#A5ACB2",
          80: "#C0C7CD",
          90: "#DCE3E9",
          95: "#EBF2FE",
          99: "#f1f4f9",
        },
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
