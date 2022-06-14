module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burntOrange: '#EE4E34',
        peach: '#fcedda',
        grey: '#5e5e5e',
      },
      fontFamily: {
        sans: ['Libre Baskerville', 'serif'],
        header: ['Alegreya', 'serif'],
        paragraph: ['Alegreya Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
