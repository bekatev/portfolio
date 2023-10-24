/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eca6a6",
          hover: "#d49595",
        },
        bckg: {
          DEFAULT: "#e2dea9",
        },
        txt: {
          DEFAULT: "#3c5484",
        },
      },
    },
  },
  plugins: [],
};
