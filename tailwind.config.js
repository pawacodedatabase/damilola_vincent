/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Add any custom colors here if needed, e.g., custom dark/light shades
        'dark-bg': '#121212',
        'light-text': '#f4f4f4',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        // Add other custom animations here if necessary
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        // Add more keyframes if you want additional animations
      },
    },
  },
  plugins: [
    // Add Tailwind plugins if needed, e.g., typography, forms
  ],
};
