/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      header: ["Playfair Display"],
    },
    extend: {
      colors: {
        primary: {
          50: "#e9f8ff",
          100: "#ceeeff",
          200: "#a7e2ff",
          300: "#6bd5ff",
          400: "#26b9ff",
          500: "#008fff",
          600: "#0065ff",
          700: "#004aff",
          800: "#003ee6",
          900: "#003bb3",
          950: "#001845",
        },
        secondary: {
          50: "#f6fce9",
          100: "#eaf8cf",
          200: "#d5f1a5",
          300: "#aee15a",
          400: "#9dd645",
          500: "#7fbc26",
          600: "#62951b",
          700: "#4b7219",
          800: "#3d5b19",
          900: "#354d1a",
          950: "#1a2a09",
        },
      },
    },
    screens: {
      "5xs": "320px",
      // => @media (min-width: 320px) { for iphone 5 }

      "4xs": "360px",
      // => @media (min-width: 320px) { for Samsung phone }

      "3xs": "380px",
      // => @media (min-width: 380px) { ... }

      "2xs": "420px",
      // => @media (min-width: 380px) { ... }

      xs: "512px",
      // => @media (min-width: 512px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdx: "800px",
      // => @media (min-width: 800px) { ... }
      mdxx: "850px",
      // => @media (min-width: 850px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
      // => @media (min-width: 1600px) { ... }

      "4xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    }
  },
  plugins: [],
}

