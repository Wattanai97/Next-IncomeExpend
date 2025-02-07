const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(), // ✅ ใช้วิธีนี้สำหรับ Flowbite React
  ],
  theme: {
    extend: {
      screens: {
        xs: "330px", // ✅ เพิ่ม Breakpoint xs
        sm:"550px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    flowbite.plugin(), // ✅ ใช้วิธีนี้สำหรับ Flowbite React
  ],
};
