/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#4599ed",
        textPrimary: "#000000",
        textSecondary: "#6e6d6d",
      },
    },
    plugins: [],
  },
};
