/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "roboto-regular": ["Roboto-Regular", "sans-serif"],
      "roboto-bold": ["Roboto-Bold", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
