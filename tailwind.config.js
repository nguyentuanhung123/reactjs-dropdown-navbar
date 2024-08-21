/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#4A3AFF",
    },
    backgroundImage: {
      Hero: "url('assets/Hero.png')",
    },
  },
  plugins: [],
}