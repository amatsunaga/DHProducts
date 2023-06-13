/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}", "./src/**/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
          },
          colors: {
            yellow05: "#F9CA24"
          }
    },
  },
  plugins: [],
};
