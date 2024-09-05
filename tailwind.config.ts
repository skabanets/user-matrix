/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "roboto-regular": ["Roboto-Regular", "sans-serif"],
      "roboto-bold": ["Roboto-Bold", "sans-serif"],
    },
    screens: {
      lg: "1440px",
    },
    extend: {
      colors: {
        primaryBgColor: "var(--background-color)",
        primaryTextColor: "var(--primary-text-color)",
        tableHeaderBgColor: "var(--table-header-background-color)",
        tableHeaderTextColor: "var(--table-header-text-color)",
        tableRowOddColor: "var(--table-row-odd-color)",
        tableRowEvenColor: "var(--table-row-even-color)",
        greyColor: "var(--grey-color)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen lg": {
            paddingLeft: "100px",
            paddingRight: "100px",
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
