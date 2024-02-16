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
      },
      fontFamily: {
        madeTommyBlack: ["made-tommy-black", "sans-serif"],
        madeTommyBlackOutline: ["made-tommy-black-outline", "sans-serif"],
        madeTommyThin: ["made-tommy-thin", "sans-serif"],
        madeTommyThinOutline: ["made-tommy-thin-outline", "sans-serif"],
        madeTommyRegular: ["made-tommy-regular", "sans-serif"],
        madeTommyRegularOutline: ["made-tommy-regular-outline", "sans-serif"],
        madeTommyMedium: ["made-tommy-medium", "sans-serif"],
        madeTommyMediumOutline: ["made-tommy-medium-outline", "sans-serif"],
        madeTommyLight: ["made-tommy-light", "sans-serif"],
        madeTommyLightOutline: ["made-tommy-light-outline", "sans-serif"],
        madeTommyExtraBold: ["made-tommy-bold", "sans-serif"],
        madeTommyExtraBoldOutline: [
          "made-tommy-extraBold-outline",
          "sans-serif",
        ],
        madeTommyBold: ["made-tommy-extraBold", "sans-serif"],
        madeTommyBoldOutline: ["made-tommy-bold-outline", "sans-serif"],
        ruberoidBold: ["ruberoid-bold", "sans-serif"],
        ruberoidBoldOblique: ["ruberoid-bold-oblique", "sans-serif"],
        ruberoidExtraBold: ["ruberoid-extraBold", "sans-serif"],
        ruberoidExtraBoldOblique: ["ruberoid-extraBold-oblique", "sans-serif"],
        ruberoidExtraLight: ["ruberoid-extraLight", "sans-serif"],
        ruberoidExtraLightOblique: ["ruberoid-extraLight-oblique", "sans-serif"],
        ruberoidLight: ["ruberoid-light", "sans-serif"],
        ruberoidLightOblique: ["ruberoid-light-oblique", "sans-serif"],
        ruberoidMedium: ["ruberoid-medium", "sans-serif"],
        ruberoidMediumOblique: ["ruberoid-medium-oblique", "sans-serif"],
        ruberoidOblique: ["ruberoid-oblique", "sans-serif"],
        ruberoidRegular: ["ruberoid-regular", "sans-serif"],
        ruberoidSemiBold: ["ruberoid-semiBold", "sans-serif"],
        ruberoidSemiBoldOblique: ["ruberoid-semiBold-oblique", "sans-serif"],
        ruberoidThin: ["ruberoid-thin", "sans-serif"],
        ruberoidThinOblique: ["ruberoid-thin-oblique", "sans-serif"],
        ruberoidUltraLight: ["ruberoid-ultraLight", "sans-serif"],
        ruberoidUltraLightOblique: ["ruberoid-ultraLight-oblique", "sans-serif"],

        valueBlack:["value-black", "sans-serif"],
        valueBold: ["value-bold", "sans-serif"],
        valueMedium:["value-medium", "sans-serif"],
        valueRegular: ["value-regular", "sans-serif"],

        euclidRegular: ["euclid-regular"],
        euclidBold: ["euclid-bold"],

        euclidMedium: ["euclid-medium"],

        euclidSemibold: ["euclid-semibold"],

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
