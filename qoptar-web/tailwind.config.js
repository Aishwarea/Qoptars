/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: '#1a1a1a',
      'gray': '#262626',
      'white': '#ffffff',
      'blue': {
    500: '#0000e6',
    700: '#0000b3',
      },
    },
    extend: {},
  },
  plugins: [],
}

