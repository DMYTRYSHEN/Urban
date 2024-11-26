/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Повільне обертання
        'fade-in': 'fadeIn 3s ease-in-out ', // Плавна поява
        'bounce-x': 'bounceX 2s infinite', // Стрибки по горизонталі
        'pulse-scale': 'pulseScale 5s infinite', // Пульсуючий масштаб
        'slide-up': 'slideUp 1s ease-out', // Рух вгору
        'wiggle': 'wiggle 1s ease-in-out infinite', // Легке "хитання"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25px)' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
