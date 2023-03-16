/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["Bungee", "Spice"],
      },
      colors: {
        btn1: "#F1F3F5",
        btn2: "#2F6CE5",
        text: "#212529",
        text_pale: "#495057",
      },
    },
  },
  plugins: [],
};
