import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        'background-secondary': '#020617',
        surface: {
          50: '#334155',
          100: '#1e293b',
          200: '#0f172a',
          300: '#020617',
          border: '#334155',
          'border-subtle': '#1e293b',
        },
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          cyan: '#06B6D4',
          emerald: '#10B981',
          violet: '#6366F1',
          amber: '#F59E0B',
          neon: '#00F0FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-glow': 'radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.15), transparent 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(16, 24, 40, 0.8) 0%, rgba(10, 16, 28, 0.95) 100%)',
        'aurora-glow': 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.22) 0%, rgba(6, 182, 212, 0.12) 40%, rgba(139, 92, 246, 0.08) 70%, transparent 100%)',
        'liquid-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
        'liquid-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
        'liquid-accent': 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(139, 92, 246, 0.05) 100%)',
      },
      boxShadow: {
        'liquid-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px 0 rgba(255, 255, 255, 0.2)',
        'liquid-glass-lg': '0 20px 50px 0 rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.05)',
        'liquid-glow': '0 0 25px -5px rgba(59, 130, 246, 0.3), 0 0 10px -2px rgba(6, 182, 212, 0.2)',
        'liquid-glow-lg': '0 0 50px -10px rgba(59, 130, 246, 0.4), 0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'liquid-pill': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.35), 0 4px 12px 0 rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'liquid-float': 'liquidFloat 8s ease-in-out infinite',
        'liquid-float-delayed': 'liquidFloat 9s ease-in-out 3s infinite',
        'liquid-float-slow': 'liquidFloat 12s ease-in-out 1.5s infinite',
        'liquid-shimmer': 'liquidShimmer 3s ease-in-out infinite',
        'orbit-cw-25': 'orbitCW 25s linear infinite',
        'orbit-ccw-25': 'orbitCCW 25s linear infinite',
        'orbit-cw-45': 'orbitCW 45s linear infinite',
        'orbit-ccw-45': 'orbitCCW 45s linear infinite',
        'orbit-cw-70': 'orbitCW 70s linear infinite',
        'orbit-ccw-70': 'orbitCCW 70s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        liquidFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg) scale(1.02)' },
        },
        liquidShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbitCW: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitCCW: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
