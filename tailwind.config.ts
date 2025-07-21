import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent1: 'var(--color-accent1)',
        accent2: 'var(--color-accent2)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        aboreto: ["var(--font-aboreto)"],
        gantari: ["var(--font-gantari)"],
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;