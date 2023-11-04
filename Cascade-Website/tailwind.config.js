/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue1x: "#0634E9",
        brandBlue2x: "#87CEEBCC",
        brandBlue3x: "#28BBEC",
        brandBlack1x: "#010101",
        brandYellow1x: "#FCCB06",
        brandGray1x: "#FFFFFFCC",
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
    },
  },
  plugins: [],
};
