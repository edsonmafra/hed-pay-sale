/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./public/**/*.html",
    "./src/modules/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/pages/**/*.tsx"
  ],
  theme: {
    colors: {
      white: "#FFF",

      black: "#000",

      grey: "#DFDFDF",
      "grey-dark": "#6883A4",

      primary: "#02FEFE",
      "primary-light": "#00FFD1",
      "primary-dark": "#001AFF",
      "primary-darker": "#0475C8",
      "primary-border": "#09F3F4",
      "primary-border-dark": "#00FFFF",
      "primary-border-darker": "#17AEEF",

      background: "#254055",

      default: "#142850",

      negative: "#FF0100",

      positive: "#2FEE10",

      transparent: "transparent"
    },
    fontSize: {
      xxs: "0.65rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "6rem"
    },
    fontFamily: {
      sans: ['"Raleway"', "sans-serif"]
    },
    fontWeight: {
      thin: "300",
      regular: "400",
      "semi-bold": "600",
      bold: "700",
      "extra-bold": "900"
    },
    screens: {
      "3xs": { min: "480.98px" },
      "2xs": { min: "580.98px" },
      xs: { min: "740.98px" },
      sm: { min: "840.98px" },
      md: { min: "1220.98px" },
      mdH: { raw: "(max-height: 750.98px)" },
      lg: { min: "1440.98px" },
      xl: { min: "1920.98px" },
      "2xl": { min: "2560px" }
    },
    extend: {
      backgroundImage: {
        "bg-gradient": "linear-gradient(109.63deg, #42a7c1 4.61%, #f4f4f4 96.52%)",
        "teal-gradient": "linear-gradient(93.38deg, #2999ae 0.73%, #ceeaf2 100%)"
      }
    }
  },
  plugins: []
};
