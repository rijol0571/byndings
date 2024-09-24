/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',  // Just-In-Time mode for faster builds and smaller CSS output
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // You can extend colors, spacing, fonts, etc. if needed here
      colors: {
        'custom-orange': '#ff7f50',  // Custom color for buttons or text
        'custom-yellow': '#ffc107',  // Custom yellow for your payment and delivery buttons
      },
    },
  },
  plugins: [],
};
