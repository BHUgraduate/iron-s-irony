import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          950: "#0E0F11",
          900: "#151618",
          800: "#1C1E22",
          700: "#2A2D33",
          500: "#6B707A",
        },
        concrete: "#E7E4DD",
        canvas: {
          bg: "#F9F8F6",
          subtle: "#F2EFEB",
          card: "#FFFFFF",
          dark: "#121316",
          "dark-subtle": "#1A1C20",
        },
        ink: {
          primary: "#151618",
          secondary: "#484B52",
          muted: "#747882",
          inverted: "#F9F8F6",
        },
        border: {
          subtle: "#E6E3DC",
          structural: "#D0CCC2",
          iron: "#26282E",
        },
        accent: {
          bronze: "#9E7445",
          "bronze-hover": "#865F34",
          amber: "#C28E53",
          steel: "#5E6773",
        },
        status: {
          success: "#2E5A44",
          error: "#932D2D",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        architectural: "0.15em",
        widest: "0.22em",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
      },
      transitionTimingFunction: {
        architectural: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;