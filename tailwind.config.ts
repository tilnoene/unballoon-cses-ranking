import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"]
      },
      colors: {
        'metal': {
          300: '#535a5f',
          400: '#474d51',
          500: '#3b4044',
          600: '#2f3336',
          700: '#232628',
          800: '#222222',
          900: '#0b0c0d'
        }
      },
    },
  },
  plugins: [],
};
export default config;
