/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#1d63de',
      }
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'cars': ['Canela-Black', 'Trebuchet MS', 'sans-serif'],
    },
  },
  plugins: [],
};
