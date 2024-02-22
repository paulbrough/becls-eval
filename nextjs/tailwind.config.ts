import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brand-primary": "#ea1c2c",
      "brand-secondary": "#8E8D8D",
    },

    extend: {
      spacing: {
        small: "0.75rem",
        medium: "1.5rem",
        large: "3rem",
      },
    },
  },
  plugins: [],
};
export default config;
