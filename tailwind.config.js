/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "palette-noble-black-700": "#15181b",
        "palette-pac-man-500": "#ffca5f",
        goldenrod: "#e6b045",
        "palette-noble-black-600": "#1a1d21",
        mediumpurple: "#b9a0ff",
        black: "#000",
        white: "#fff",
        "palette-pac-man-50": "#fffcf7",
        darkslategray: "#484f56",
        gainsboro: "#e7e7e7",
        gray: {
          "100": "#282b30",
          "200": "rgba(255, 255, 255, 0.2)",
        },
        "palette-noble-black-50": "#f9f9f9",
        lightgreen: "#c1f6af",
        red: "#ff0000",
        antiquewhite: "#fff4df",
      },
      spacing: {},
      fontFamily: {
        "astrix-beta-heading-s": "Lexend",
        inter: "Inter",
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "21xl": "40px",
        "4xs": "9px",
        "81xl": "100px",
        "xl-8": "20.8px",
        "5xs-8": "7.8px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "xs-2": "11.2px",
      "5xs-8": "7.8px",
      "6xs-7": "6.7px",
      sm: "14px",
      base: "16px",
      lgi: "19px",
      "38xl": "57px",
      "15xl": "34px",
      "27xl": "46px",
      "7xl": "26px",
      "2xl": "21px",
      lg: "18px",
      "13xl": "32px",
      "21xl": "40px",
      xl: "20px",
      "109xl": "128px",
      "32xl": "51px",
      "3xl": "22px",
      "base-6": "15.6px",
      "10xl-9": "29.9px",
      "xl-8": "20.8px",
      mid: "17px",
      "lg-2": "18.2px",
      "45xl": "64px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
