/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: "#1A73E8",   // from your Figma brand color
        secondary: "#FF5722",
        pokemon: {
          gold: "#D9B458",
          blue: "#5D6BAD",
          darkGold: "#B37137",
          screen: "#2B343A",
          screenDark: "#0D1C23",
        }
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // match your figma font
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.1)", // same shadow as figma
        pokeball: "4px 7px 0.1px 7px #854D1D",
        pokeballSm: "2px 4px 0.1px 4px #854D1D",
      },
      animation: {
        'star-scroll-fast': 'star-scroll-fast 8s linear infinite',
        'star-scroll-medium': 'star-scroll-medium 12s linear infinite',
        'star-scroll-slow': 'star-scroll-slow 20s linear infinite',
      }
    },
  },

  plugins: [],
};
