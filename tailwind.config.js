/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#DCDCDC",
          100: "#D1D0CE",
          200: "#C5C6D0",
          300: "#BEBEBE",
          400: "#B6B6B4",
          500: "#808080",
          600: "#696969",
          700: "#676767",
          800: "#61666A",
          900: "#555555",
          950: "#504A4B",
        },
        dark: {
          50: "#888B8D",
          100: "#868A81",
          200: "#848482",
          300: "#5C5858",
          400: "#666362",
          500: "#494F55",
          600: "#3C4748",
          700: "#41424C",
          800: "#373737",
          900: "#343432",
          950: "#323232",
        },
        darker: {
          50: "#2B2523",
          100: "#2A3439",
          200: "#0D0D0D",
        },
      },
      backgroundColor: {
        "light-bg": "#DCDCDC",
        "light-card": "#FFFFFF",
        "light-surface": "#F5F5F5",
        "dark-bg": "#343432",
        "dark-card": "#555555",
        "dark-surface": "#373737",
      },
      textColor: {
        "light-primary": "#323232",
        "light-secondary": "#555555",
        "dark-primary": "#FFFFFF",
        "dark-secondary": "#BEBEBE",
      },
      borderColor: {
        "light-border": "#808080",
        "dark-border": "#696969",
      },
    },
  },
  plugins: [],
};
