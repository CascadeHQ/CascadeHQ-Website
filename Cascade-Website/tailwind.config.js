/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        brandBlue1x: "#0634E9",
        brandBlue2x: "#87CEEBCC",
        brandBlue3x: "#28BBEC",
        brandBlack1x: "#010101",
        brandYellow1x: "#FCCB06",
        brandGray1x: "#FFFFFFCC",
        brandWhite1x: "#FFFFFF",
        brandGreen: "#2E9C00",
      }
    },
  },
  plugins: [],
}