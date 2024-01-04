import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'light-mode-input': 'hsl(0, 0%, 52%)',
                'light-mode-background': 'hsl(0, 0%, 98%)',
                'light-mode-text': 'hsl(200, 15%, 8%)',
                'dark-mode-elements': 'hsl(209, 23%, 22%)',
                'dark-mode-background': 'hsl(207, 26%, 17%)',
            },
        },
    },
    plugins: [],
};
export default config;
