/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFB819",
          secondary: "#8A4A2A",
          accent: "#F8E9DD",
          neutral: "#212836",
          "base-100": "#F8E9DD",
          info: "#94ddf9",
          success: "#1d7263",
          warning: "#bd9614",
          error: "#e75d50",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
