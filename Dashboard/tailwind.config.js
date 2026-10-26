/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070a0f',
          surface: '#0d131e',
          card: '#0f172a',
          hover: '#162238',
          border: '#1e293b',
          'border-light': '#334155',
          neon: '#00ff9d',
          'neon-dim': '#00ff9d22',
          cyan: '#00e5ff',
          'cyan-dim': '#00e5ff22',
          red: '#ff3366',
          'red-dim': '#ff336622',
          amber: '#f59e0b',
          'amber-dim': '#f59e0b22',
          purple: '#a855f7',
          'purple-dim': '#a855f722',
          muted: '#64748b',
          text: '#f1f5f9',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', 'Monaco', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-neon': '0 0 20px -3px rgba(0, 255, 157, 0.25)',
        'glow-cyan': '0 0 20px -3px rgba(0, 229, 255, 0.25)',
        'glow-red': '0 0 20px -3px rgba(255, 51, 102, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar 4s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
