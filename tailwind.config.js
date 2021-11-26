module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "Fira Code", "sans-serif"],
        code: ["Fira Code", "Nunito", "sans-serif"],
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
