/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        'ye-orange': '#FF7F00',
        'ye-purple': '#9B30FF',
        'ye-yellow': '#FFD700',
        'ye-navy': '#000080',
        'ye-silver': '#C0C0C0',
        'ye-pink': '#FF1493',
        'ye-blue': '#00BFFF',
      },
      backgroundImage: {
        'gradient-ye': 'linear-gradient(45deg, #FF7F00, #9B30FF, #FFD700)',
        'gradient-ye-alt': 'linear-gradient(135deg, #000080, #FF1493, #00BFFF)',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}