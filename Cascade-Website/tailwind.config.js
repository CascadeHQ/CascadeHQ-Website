/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue1x: "#0634E9",
        brandBlue2x: "#87CEEBCC",
        brandBlue3x: "#28BBEC",
        brandBlue4x:"#f0f8fa",
        brandBlue5x: "#017AFF",
        brandBlack1x: "#010101",
        brandYellow1x: "#FCCB06",
        brandGray1x: "#FFFFFFCC",
        brandGray2x:"#fff9f1",
        brandWhite1x: "#FFFFFF",
        brandGreen: "#2E9C00",
        brandGreen2: "#0C72BA",
      },
      fontFamily: {
        valueBlack:["value-black", "sans-serif"],
        valueBold: ["value-bold", "sans-serif"],
        valueMedium:["value-medium", "sans-serif"],
        valueRegular: ["value-regular", "sans-serif"],
        euclidRegular: ["euclid-regular", "sans-serif"],
        euclidBold: ["euclid-bold", "sans-serif"],
        euclidMedium: ["euclid-medium", "sans-serif"],
        euclidSemibold: ["euclid-semibold", "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
        md: "14px",
        "32px": "2rem",
        "10xl": "10rem",
        "12xl": "12rem",
        "14xl": "14rem",
        "16xl": "16rem",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        navItem: "0px, 10px rgba(188, 186, 186, 0.25)",
      },
      backgroundImage:{
        "service-pattern":"url('./assets/images/Rectangle.png')",
        "about-hero-section":"url('./src/pages/aboutUs/images/Background.jpg)"
      },
    },
  },
  plugins: [],
};
