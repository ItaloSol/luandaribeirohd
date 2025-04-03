import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          red: 'rgb(71, 0, 1)',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/imagens/luanda_2.webp')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;