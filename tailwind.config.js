/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F0BD6F",
        },
        bckg: {
          DEFAULT: "#1B4542",
        },
        bttn: {
          DEFAULT: "#D26867",
        },
      },
    },
  },
  plugins: [],
};
