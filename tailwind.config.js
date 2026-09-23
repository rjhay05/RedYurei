
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        fantasy: {
          white: '#FFFFFF',
          crimson: '#DD2D4A',
          pink: '#F49AB1',
          gold: '#FFE6AF',
          // Arcane updates
          navy: '#0f0f1a', // Deepest background
          navyLight: '#1a1a2e', // Primary background
          cardBg: '#252547', // Card background
          teal: '#FFE6AF', // Gold (theme-wide replacement)
          // NOTE: teal is intentionally set to gold so all existing fantasy-teal classes become warm gold.
          purple: '#7B2D8E', // Arcane purple
          deepViolet: '#3d1f5c', // Deep violet for gradients
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        longshot: ['LongShot', 'sans-serif'],
        excelsior: ['Excelsior', 'sans-serif'],
        nexa: ['Nexa-Heavy', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      boxShadow: {
        'glow-crimson': '0 0 20px rgba(221, 45, 74, 0.4)',
        'glow-crimson-strong': '0 0 30px rgba(221, 45, 74, 0.7)',
        'glow-gold': '0 0 15px rgba(255, 230, 175, 0.3)',
        'glow-gold-strong': '0 0 25px rgba(255, 230, 175, 0.6)',
        // Arcane updates
        'glow-teal': '0 0 20px rgba(255, 230, 175, 0.3)',
        'glow-teal-strong': '0 0 35px rgba(255, 230, 175, 0.6)',
        'glow-purple': '0 0 25px rgba(123, 45, 142, 0.5)',
        'vignette': 'inset 0 0 150px rgba(15, 15, 26, 0.9)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(221,45,74,0.15) 0%, rgba(15,15,26,0) 70%)',
        'dark-gradient': 'linear-gradient(to bottom, rgba(15,15,26,0) 0%, rgba(15,15,26,1) 100%)',
        // Arcane updates
        'arcane-gradient': 'linear-gradient(135deg, rgba(10,200,185,0.1) 0%, rgba(123,45,142,0.1) 50%, rgba(61,31,92,0.2) 100%)',
        'teal-purple': 'linear-gradient(to right, #0AC8B9, #7B2D8E)',
        'teal-gold': 'linear-gradient(to right, #0AC8B9, #FFE6AF)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'spark': 'spark 4s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spark: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { transform: 'translateY(-100px) scale(0)', opacity: 0 },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, filter: 'brightness(1)' },
          '50%': { opacity: 1, filter: 'brightness(1.3)' },
        }
      }
    },
  },
  plugins: [],
}
