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
        apple: {
          black: '#000000',
          dark: '#0e0e10',
          surface: '#161617',
          card: '#1d1d1f',
          cardLight: '#2c2c2e',
          blue: '#2997ff',
          blueHover: '#0077ed',
          white: '#ffffff',
          offWhite: '#f5f5f7',
          muted: '#86868b',
          mutedLight: '#a1a1a6',
          border: 'rgba(255, 255, 255, 0.1)',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
          // Light Mode Palette
          lightBg: '#f5f5f7',
          lightSurface: '#ffffff',
          lightCard: '#ffffff',
          lightText: '#1d1d1f',
          lightMuted: '#6e6e73',
          lightBorder: 'rgba(0, 0, 0, 0.1)',
          lightBlue: '#0066cc'
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', 'sans-serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      backgroundImage: {
        'apple-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
        'apple-text-gradient': 'linear-gradient(180deg, #ffffff 0%, #86868b 100%)',
        'apple-text-gradient-light': 'linear-gradient(180deg, #1d1d1f 0%, #6e6e73 100%)',
        'apple-blue-gradient': 'linear-gradient(135deg, #2997ff 0%, #0077ed 100%)',
      },
      boxShadow: {
        'apple-glass': '0 10px 40px 0 rgba(0, 0, 0, 0.5)',
        'apple-glass-light': '0 10px 40px 0 rgba(0, 0, 0, 0.08)',
        'apple-subtle': '0 4px 20px 0 rgba(0, 0, 0, 0.3)',
        'apple-subtle-light': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
