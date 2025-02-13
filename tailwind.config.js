/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        mainColor: "#ff2c1f",
        textColor: "#020307",
        bgColor: "#fff",
      },
      padding: {
        padding: "4.5rem 1.5rem",
      },

      fontFamily: {
        fontFamily: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        boxShadow: " 0 0 4px rgb(14 55 54 / 15%)",
      },
    },
  },
  plugins: [],
};
