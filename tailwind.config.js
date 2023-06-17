module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    // logs: false, // disable daisyui version message
    themes: ['winter', 'night'],
    darkTheme: 'night',
  },
  plugins: [require('daisyui'),],
};
