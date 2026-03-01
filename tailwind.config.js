/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd4',
          200: '#fbd5a8',
          300: '#f8b771',
          400: '#f49038',
          500: '#f17015',
          600: '#e2560b',
          700: '#bb3e0b',
          800: '#953110',
          900: '#792a10',
          950: '#411205',
        },
        ink: {
          50: '#f6f6f7',
          100: '#e1e2e6',
          200: '#c3c5cd',
          300: '#9da0ad',
          400: '#787b8c',
          500: '#5e6173',
          600: '#4b4d5e',
          700: '#3d3f4e',
          800: '#353641',
          900: '#1e1f2a',
          950: '#13141c',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
