/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001f3f",
      },
      screens: {
        "3xl": "2048px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
