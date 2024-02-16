/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      nutmeg: 'hsl(14, 45%, 36%)',
      'dark-raspberry': {
        100: 'hsl(332, 51%, 32%)',
        900: 'hsl(332, 51%, 98%)',
      },
      white: 'hsl(0, 0%, 100%)',
      'rose-white': 'hsl(330, 100%, 98%)',
      eggshell: 'hsl(30, 54%, 90%)',
      'light-grey': 'hsl(30, 18%, 87%)',
      'wenge-brown': 'hsl(30, 10%, 34',
      'dark-charcoal': 'hsl(24, 5%, 18%)',
    },
    extend: {},
  },
  plugins: [],
};
