module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4960F9",
        secondary: "#F8F8F8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
