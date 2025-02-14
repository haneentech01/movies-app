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
        custom: "4.5rem 1.5rem",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      boxShadow: {
        custom: " 0 0 4px rgb(14 55 54 / 15%)",
      },
    },

    screens: {
      xxs: { max: "300px" },
      xs: { max: "370px" },
      sm: { max: "472px" },
      md: { max: "774px" },
      lg: { max: "991px" },
      xl: { max: "1080px" },
      "2xl": { max: "1280px" },
    },
  },
  plugins: [],
};
