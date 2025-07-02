import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF385C',
        bg: '#FFFFFF',
        muted: '#F7F7F7'
      },
      borderRadius: {
        base: '0.75rem'
      },
      fontFamily: {
        sans: ['\"Airbnb Cereal\"', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
