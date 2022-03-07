module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media', // 'media' or 'class'
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
    extend: {
      scrollbar: ['rounded']
    },
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
