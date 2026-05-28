/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        arc: {
          bg: '#0a0a0f',
          surface: '#111118',
          card: '#16161f',
          border: '#1e1e2e',
          muted: '#2a2a3a',
          text: '#e8e8f0',
          subtle: '#8888a8',
          faint: '#444460',
          blue: '#3b82f6',
          'blue-dim': '#1d4ed8',
          'blue-glow': 'rgba(59,130,246,0.15)',
          cyan: '#06b6d4',
          'cyan-dim': 'rgba(6,182,212,0.12)',
          teal: '#14b8a6',
          amber: '#f59e0b',
          rose: '#f43f5e',
          emerald: '#10b981',
          navy: '#0f172a',
          charcoal: '#1c1c28',
          graphite: '#252535',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '33%': { transform: 'translateX(6px) translateY(-4px)' },
          '66%': { transform: 'translateX(-4px) translateY(4px)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 20px rgba(59,130,246,0.25), 0 0 60px rgba(59,130,246,0.1)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.25), 0 0 60px rgba(6,182,212,0.1)',
        'glow-sm': '0 0 10px rgba(59,130,246,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
