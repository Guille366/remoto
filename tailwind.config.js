module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
