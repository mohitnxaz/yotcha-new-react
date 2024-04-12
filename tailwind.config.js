/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "260px",
        ...defaultTheme.screens,
      },
    },

    extend: {
      fontFamily: {
        body: ["var(--font-jost)"],
        head: ["var(--font-nunito)"],
      },
  
      colors: {
        primary: {
          DEFAULT: "#00C5B4",
          hover: "#3cb4ac",
          background: "rgba(82,133,60,0.10)",
        },
        secondary: {
          DEFAULT: " #52853C",
          hover: "rgba(82,133,60,0.30)",
        },
        white: {
          DEFAULT: "#FFF",
          body: "#ffffff99",
        },
        transparent: "transparent",
        orange: {
          DEFAULT: "#F95D02",
          background: "rgba(249,93,2,0.10)",
        },
        red: "#FF385C",
        black: {
          DEFAULT: "#000000",
          title: "#2D3954",
          subTitle: "#616E96",
          body: "#666",
          border: "#B1B1B1",
          background: "#f4f4f4",
          shadow: "rgba(0,0,0,0.12)",
        },
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
        // ring: "hsl(var(--ring))",
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
