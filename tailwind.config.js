/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "helvetica",
        belle: "belle",
      },
    },
  },
  plugins: [require("daisyui")],
};
