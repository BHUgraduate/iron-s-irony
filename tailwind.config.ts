import type { Config } from "tailwindcss";

/**
 * Iron’s Irony design tokens. Material-led: iron, concrete and paper, with one restrained warm accent.
 * Accent is for emphasis only (calls to action, active state, heat references).
 * See DESIGN_SYSTEM.md.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        iron: { 950: "#0E0F11", 900: "#151618", 800: "#1C1E22" },
        concrete: "#E7E4DD",
        canvas: { bg: "#F9F8F6" },
        ink: { secondary: "#484B52", muted: "#5F636C" },
        accent: {
          bronze: "#9E7445", // fills and hover states
          amber: "#C28E53", // on dark grounds
          ink: "#7A5628", // text on light grounds (AA)
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: { none: "0px", sm: "2px", DEFAULT: "0px" },
      maxWidth: { "8xl": "88rem" },
      keyframes: {
        fadeIn: { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "none" } },
      },
      transitionTimingFunction: { architectural: "cubic-bezier(0.16, 1, 0.3, 1)" },
    },
  },
  plugins: [],
};

export default config;
