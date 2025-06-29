/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // 👈 ปิด preflight
  },
  plugins: [],
};
