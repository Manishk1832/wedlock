import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/public/hero.jpg')",
      },
        
      screens: {
        '3xl': '1920px', // Custom breakpoint for 1920px and up
      '4xl': '1512px',
      '5xl':'1440px',
      '6xl':'1384px',
      '7xl':'1792px',
      '8xl':'1536px',
      "10xl":'1280px',
      },
     
    },
  },
  plugins: [],
};
export default config;
