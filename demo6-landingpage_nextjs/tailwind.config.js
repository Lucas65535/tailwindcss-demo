module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4960F9",
        secondary: "#F8F8F8",
        grayPrimary: "#4D4D4D",
        graySecondary: "#808080",
        grayTertiary: "#949494",
      },
      fontSize: {
        h1: ["57.3px"],
        h2: ["47.8px"],
        h3: ["39.8px"],
        h4: ["33.2px"],
        h5: ["27.6px"],
        h6: ["23px"],
        pl: ["19.2px"],
        pm: ["16px"],
        ps: ["13.33px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
