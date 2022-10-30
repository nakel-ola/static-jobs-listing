/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 29%, 50%)" // Desaturated Dark Cyan
        },
        neutral: {
          "light-grayish-cyan": "hsl(180, 52%, 96%)", // Light Grayish Cyan (Background)
          "light-grayish-cyan-filter": "hsl(180, 31%, 95%)", // Light Grayish Cyan (Filter Tablets)
          "dark-grayish-cyan": "hsl(180, 8%, 52%)", // Dark Grayish Cyan
          "very-dark-grayish-cyan": "hsl(180, 14%, 20%)" // Very Dark Grayish Cyan
        }
      },
      backgroundImage: {
        "header-desktop": "url('./src/assets/images/bg-header-desktop.svg')",
        "header-mobile": "url('./src/assets/images/bg-header-mobile.svg')",
      }
    },
  },
  plugins: [],
}
