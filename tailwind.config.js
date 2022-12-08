/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "f-pink": "hsl(322, 100%, 66%)",
        "light-pink": "hsl(321, 100%, 78%)",
        "Llight-red": "hsl(0, 100%, 63%)",
        // ### Neutral
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "very-pale-blue": "hsl(207, 100%, 98%)",
      },
      fontFamily: {
        "open-sans": ['"Open Sans"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
