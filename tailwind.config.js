/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans Variable", "InterVariable", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Plus Jakarta Sans Variable", "InterVariable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["Kaushan Script", "Brush Script MT", "cursive"],
        editorial: ["Instrument Serif", "Iowan Old Style", "Georgia", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
        },
        bckg: {
          DEFAULT: "rgb(var(--color-bckg) / <alpha-value>)",
        },
        bttn: {
          DEFAULT: "rgb(var(--color-bttn) / <alpha-value>)",
        },
        paper: {
          DEFAULT: "rgb(var(--color-paper) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
        },
        sky: {
          DEFAULT: "rgb(var(--color-sky) / <alpha-value>)",
        },
      },
      borderRadius: {
        card: "22px",
      },
      boxShadow: {
        hard: "6px 6px 0 rgb(var(--color-ink) / 0.92)",
        "hard-sm": "4px 4px 0 rgb(var(--color-ink) / 0.9)",
        "hard-lg": "10px 10px 0 rgb(var(--color-ink) / 0.92)",
      },
    },
  },
  plugins: [],
};
