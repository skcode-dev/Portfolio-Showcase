/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'soft-white': '#e2e8f0',
        'soft-gray': '#b8c5d6',
        'soft-blue': '#93c5fd',
        'soft-slate': '#64748b',
      },
      animation: {
        'hologram-rotate': 'hologram-rotate 4s linear infinite',
        'hologram-shine': 'hologram-shine 3s ease-in-out infinite',
        'hologram-hover': 'hologram-hover 2s ease-in-out infinite',
        'rocket-fly': 'rocket-fly 2s ease-in-out infinite',
        'rocket-trail': 'rocket-trail 1.5s ease-in-out infinite',
        'hologram-rotate-light': 'hologram-rotate-light 8s ease-in-out infinite',
        'hologram-rotate-dark': 'hologram-rotate-dark 8s ease-in-out infinite',
        'rainbow-rotate': 'rainbow-rotate 6s linear infinite',
        'particle-float': 'particle-float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'energy-wave': 'energy-wave 2.5s ease-in-out infinite',
        'quantum-flicker': 'quantum-flicker 1.5s ease-in-out infinite',
        'hologram-project': 'hologram-project 3s ease-in-out infinite',
        'depth-pulse': 'depth-pulse 4s ease-in-out infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 8s linear infinite',
        'plasma-flow': 'plasma-flow 5s ease-in-out infinite',
        'hologram-wave': 'hologram-wave 12s ease-in-out infinite',
        'rocket-rumble': 'rocket-rumble 0.3s ease-in-out infinite',
      },
      keyframes: {
        'hologram-rotate': {
          '0%': { 
            background: 'conic-gradient(from 0deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
            transform: 'rotate(0deg)'
          },
          '100%': { 
            background: 'conic-gradient(from 360deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6)',
            transform: 'rotate(360deg)'
          }
        },
        'hologram-rotate-light': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        'hologram-rotate-dark': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
        'rainbow-rotate': {
          '0%': { 
            background: 'conic-gradient(from 0deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899, #ef4444)',
            transform: 'rotate(0deg)'
          },
          '100%': { 
            background: 'conic-gradient(from 360deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899, #ef4444)',
            transform: 'rotate(360deg)'
          }
        },
        'hologram-shine': {
          '0%, 100%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateX(100%)',
            opacity: '1'
          }
        },
        'hologram-hover': {
          '0%, 100%': { 
            transform: 'translateX(-100%) rotate(45deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateX(100%) rotate(45deg)',
            opacity: '0.3'
          }
        },
        'rocket-fly': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)'
          },
          '25%': { 
            transform: 'translateY(-2px) rotate(1deg)'
          },
          '75%': { 
            transform: 'translateY(1px) rotate(-1deg)'
          }
        },
        'rocket-trail': {
          '0%, 100%': { 
            opacity: '0.3',
            height: '8px'
          },
          '50%': { 
            opacity: '0.8',
            height: '12px'
          }
        },
        'particle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateY(-3px) scale(1.2)',
            opacity: '1'
          }
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
            opacity: '0.7'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
            opacity: '1'
          }
        },
        'energy-wave': {
          '0%, 100%': { 
            transform: 'translateX(-100%) scaleX(0.5)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateX(100%) scaleX(1.5)',
            opacity: '0.8'
          }
        },
        'quantum-flicker': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(0.8)'
          },
          '25%': { 
            opacity: '1',
            transform: 'scale(1.2)'
          },
          '50%': { 
            opacity: '0.7',
            transform: 'scale(1)'
          },
          '75%': { 
            opacity: '0.9',
            transform: 'scale(1.1)'
          }
        },
        'hologram-project': {
          '0%, 100%': { 
            transform: 'translateY(100%) scaleY(0.5)',
            opacity: '0'
          },
          '50%': { 
            transform: 'translateY(-50%) scaleY(1.2)',
            opacity: '0.6'
          }
        },
        'depth-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: '1'
          }
        },
        'neon-glow': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))',
            opacity: '0.8'
          },
          '50%': { 
            filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 1))',
            opacity: '1'
          }
        },
        'matrix-rain': {
          '0%': { 
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100%)',
            opacity: '0'
          }
        },
        'plasma-flow': {
          '0%, 100%': { 
            background: 'conic-gradient(from 0deg, #ff0080, #ff8c00, #40e0d0, #ee82ee, #ff0080)',
            transform: 'rotate(0deg) scale(1)'
          },
          '50%': { 
            background: 'conic-gradient(from 180deg, #ff0080, #ff8c00, #40e0d0, #ee82ee, #ff0080)',
            transform: 'rotate(180deg) scale(1.1)'
          }
        },
        'hologram-wave': {
          '0%, 100%': { 'borderRadius': '50% 50% 50% 50% / 50% 50% 50% 50%' },
          '25%': { 'borderRadius': '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { 'borderRadius': '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { 'borderRadius': '33% 67% 58% 42% / 63% 68% 32% 37%' },
        },
        'rocket-rumble': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0)' },
          '25%': { transform: 'translate(0.5px, -0.5px) rotate(0.2deg)' },
          '50%': { transform: 'translate(0, 0.5px) rotate(0)' },
          '75%': { transform: 'translate(-0.5px, 0.5px) rotate(-0.2deg)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config; 
