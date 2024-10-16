import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite", // Adds the shimmer animation
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" }, // Start position
          to: { backgroundPosition: "-200% 0" }, // End position
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
