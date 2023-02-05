/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        sitebarWidth: "250px",
        cardWidth:""
      },
      height: {
        cardHeight: "150px",
        contentHeight: "100px"
      },
      backgroundColor:{
        cardbg: "#191C24"
      }
    },
  },
  plugins: [],
}
