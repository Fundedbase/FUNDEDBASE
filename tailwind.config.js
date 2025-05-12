/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          '50': '#eefff7',
          '100': '#d7ffee',
          '200': '#b2ffde',
          '300': '#76ffc6',
          '400': '#33f5a6',
          '500': '#09de87',
          '600': '#00c072',
          '700': '#049159',
          '800': '#0a7148',
          '900': '#0a5d3e',
          '950': '#003421',
        },
        // Keep any other custom colors you have
      },
    },
  },
  plugins: [],
}; 