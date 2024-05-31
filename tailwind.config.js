/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8D84FF",
        },
        bckg: {
          DEFAULT: "#D5E0FE",
        },
        txt: {
          DEFAULT: "#5025D2",
        },
      },
    },
  },
  plugins: [],
};
