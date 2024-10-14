import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        celeste:"#00b6e7",
        gris: "#f2f0f1",
        rojo: "#ef6269",
        azul: "#086da5"
      },
    },
  },
  plugins: [],
};
export default config;
