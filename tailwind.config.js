/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          bg: 'var(--color-bg)',
          'bg-secondary': 'var(--color-bg-secondary)',
          'bg-tertiary': 'var(--color-bg-tertiary)',
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          border: 'var(--color-border)',
          'border-light': 'var(--color-border-light)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          'accent-soft': 'var(--color-accent-soft)',
          card: 'var(--color-card)',
          hover: 'var(--color-hover)',
          'btn-bg': 'var(--color-btn-bg)',
          'btn-bg-hover': 'var(--color-btn-bg-hover)',
          'btn-text': 'var(--color-btn-text)',
        },
      },
    },
  },
  plugins: [],
};
