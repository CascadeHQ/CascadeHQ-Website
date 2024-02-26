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
        brandBlue6x: "#C8E0F4",
        brandBlue7x: "#0C72BA",
        brandBlue8x: "#87CEEB29",
        brandBlack1x: "#010101",
        brandYellow1x: "#FCCB06",
        brandGray1x: "#FFFFFFCC",
        brandGray3x: "#9E9E9E",
        brandGray2x:"#fff9f1",
        brandWhite1x: "#FFFFFF",
        brandGreen1x: "#2E9C00",
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
        euclidItalic: ["euclid-italic", "sans-serif"],
        euclidItalicBold: ["euclid-italicBold", "sans-serif"],
        DegularDiplayThinItalic: ["degulardisplay-thinitalic", "sans-serif"],
        DegularDiplayThin: ["degulardisplay-thin", "sans-serif"],
        DegularDiplaySemiBoldItalic: ["degulardisplay-semibolditalic", "sans-serif"],
        DegularDiplaySemiBold: ["degulardisplay-semibold", "sans-serif"],
        DegularDiplayRegularItalic: ["degulardisplay-regularitalic", "sans-serif"],
        DegularDiplayRegular: ["degulardisplay-regular", "sans-serif"],
        DegularDiplayMediumItalic: ["degulardisplay-mediumitalic", "sans-serif"],
        DegularDiplayMedium: ["degulardisplay-medium", "sans-serif"],
        DegularDiplayLightItalic: ["degulardisplay-lightitalic", "sans-serif"],
        DegularDiplayLight: ["degulardisplay-light", "sans-serif"],
        DegularDiplayBoldItalic: ["degulardisplay-bolditalic", "sans-serif"],
        DegularDiplayBold: ["degulardisplay-bold", "sans-serif"],
        DegularDiplayBlackItalic: ["degulardisplay-blackitalic", "sans-serif"],
        DegularDiplayBlack: ["degulardisplay-black", "sans-serif"],
        TrapSemiBold: ["trap-semibold", "sans-serif"],
        TrapRegular: ["trap-regular", "sans-serif"],
        TrapMedium: ["trap-medium", "sans-serif"],
        TrapLight: ["trap-light", "sans-serif"],
        TrapExtraBold: ["trap-extrabold", "sans-serif"],
        TrapBold: ["trap-bold", "sans-serif"],
        TrapBlack: ["trap-black", "sans-serif"],

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
      animation:{
        marquee:'marquee 25s linear infinite',
        marqueeSec: 'marqueeSec 25s linear infinite',
      },
      keyframes:{
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeSec: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
