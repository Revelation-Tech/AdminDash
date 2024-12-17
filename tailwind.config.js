/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxxl: "2rem",
      },
      fontFamily: {
        clashGrotesk: ["Clash Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        karia: ["Panchang", "sans-serif"],
      },
      colors: {
        bills: {
          lightblue: "#EEF5FC",
          darkblue: "#1F6CAB",
          lightgrey: "hsla(0, 0%, 98%, 1)",
          skyblue: "#2390FA",
          white: "#EAECF0",
          lightgrey2: "#F9F9F9",
          text: "hsl(228, 17%, 67%)",
          borderLight: "hsl(0, 0%, 91%)",
          textColor: "hsl(220, 13%, 46%)"
        },
      },
    },
  },
  plugins: [],
};
