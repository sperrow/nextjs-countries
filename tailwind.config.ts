import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-mode-input': 'hsl(0, 0%, 52%)',
        'light-mode-background': 'hsl(0, 0%, 98%)'
      }
    }
  },
  plugins: [],
}
export default config
