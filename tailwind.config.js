/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090909',
        surface: {
          secondary: '#111111',
          card: '#151515',
          cardHover: '#1c1c1c',
          muted: '#181818',
        },
        brand: {
          red: '#D92332',
          redDark: '#A91D2B',
          redMuted: 'rgba(217, 35, 50, 0.15)',
        },
        neutral: {
          primary: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#777777',
          border: '#252525',
          borderLight: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.7)',
        'subtle-red': '0 0 20px -5px rgba(217, 35, 50, 0.25)',
      }
    },
  },
  plugins: [],
}
