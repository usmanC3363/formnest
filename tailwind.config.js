/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode via class or data-theme attribute
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      // Min-width breakpoints (default behavior)
      xs: "410px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1.5xl": "1366px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",

      // contained breakpoints

      "xs-sm": { min: "1px", max: "639px" },
      "sm-md": { min: "640px", max: "767px" },
      "md-lg": { min: "768px", max: "1023px" },
      "sm-lg": { min: "640px", max: "1279px" },
      "lg-xl": { min: "1024px", max: "1279px" },
      "xl-2xl": { min: "1280px", max: "1535px" },

      // Max-width breakpoints (reverse approach)
      "max-xs": { max: "410px" }, // For devices smaller than 450px, small mobiles iphones
      "max-sm": { max: "640px" }, // For devices smaller than 640px
      "max-md": { max: "768px" }, // For devices smaller than 768px
      "max-lg": { max: "1024px" }, // For devices smaller than 1024px
      "max-xl": { max: "1280px" }, // For devices smaller than 1280px
      "max-1.5xl": { max: "1366px" }, // For devices smaller than 1366px
      "max-2xl": { max: "1536px" }, // For devices smaller than 1536px
      "max-3xl": { max: "1920px" }, // For devices smaller than 1920px
      "max-4xl": { max: "2560px" }, // For devices smaller than 2560px
    },
    extend: {
      colors: {
        myblack: {
          50: "#1a1a1a",
          100: "#222222",
          150: "#0f0f0f",
          200: "#333333",
          250: "#2a2a2a",
        },
        mybrown: {
          50: "#3F2B24",
          100: "#3F2B24",
        },
        mywhite: {
          50: "#eaeaea",
          100: "#fefefe",
          200: "#fdfdfd",
        },
        blue: {
          100: "#E4ECFF",
          200: "#7df9ff",
        },
        lilac: {
          100: "#236bfe",
        },
      },

      fontFamily: {
        vonca: ["Vonca", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-870%)" }, // Adjust based on logo size and repeats
        },
      },
      animation: {
        scroll: "scroll 7s linear infinite",
      },
    },
  },
  plugins: [],
};
