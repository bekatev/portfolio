/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f2efea",
        },
        bckg: {
          DEFAULT: "#0d0d0d",
        },
        bttn: {
          DEFAULT: "#557373",
        },
      },
    },
  },
  plugins: [],
};
