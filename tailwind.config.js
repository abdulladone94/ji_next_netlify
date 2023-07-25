/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      colors: {
        'bl-black': '#000000',
        'bl-white': '#ffffff',
        'bl-gray': '#000000',
        'bl-yellow': '#ffff00',
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/hero-pattern.svg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
