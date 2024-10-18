/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#9747FF",
      },
    },
  },
  plugins: [],
};
