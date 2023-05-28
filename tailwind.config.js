/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      start: ["Press Start 2P", "cursive"],
    },
    extend: {
      colors: {
        normal: '#aa9',
        fire: '#f42',
        water: '#39f',
        electric: '#fc3',
        grass: '#7c5',
        ice: '#6cf',
        fighting: '#b54',
        poison: '#a59',
        ground: '#db5',
        flying: '#89f',
        psychic: '#f59',
        bug: '#ab2',
        rock: '#ba6',
        ghost: '#66b',
        dragon: '#76e',
        dark: '#754',
        steel: '#aab',
        fairy: '#e9e',
      },
    },
  },
  plugins: [],
}

