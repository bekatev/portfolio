/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f95738",
        },
        bckg: {
          DEFAULT: "#faf0ca",
        },
        txt: {
          DEFAULT: "#0d3b66",
        },
      },
    },
  },
  plugins: [],
};
