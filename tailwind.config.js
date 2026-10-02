/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // White Premium AI SaaS Design Tokens
                'page-bg': '#FFFFFF',
                'section-alt': '#F7F8FB',
                'heading': '#0F1222',
                'body-text': '#5B6275',
                'border-light': '#E8EAF0',
                'accent': {
                    DEFAULT: '#5B5BF0',
                    hover: '#4A4AE2',
                    tint: '#EEF0FF',
                    light: '#F4F5FF',
                },
                'bg-primary': '#FFFFFF',
                'bg-secondary': '#F7F8FB',
                'text-primary': '#0F1222',
                'text-secondary': '#5B6275',
            },
            fontFamily: {
                sans: ['Inter', '"Plus Jakarta Sans"', 'sans-serif'],
                display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
                heading: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            },
            maxWidth: {
                'container': '1200px',
                'atomik': '1200px',
            },
            borderRadius: {
                'card': '20px',
                'card-lg': '24px',
                'btn': '999px',
            },
            boxShadow: {
                'saas-card': '0 10px 40px rgba(20, 24, 60, 0.06)',
                'saas-hover': '0 20px 50px rgba(20, 24, 60, 0.10)',
                'saas-mockup': '0 30px 80px -15px rgba(20, 24, 60, 0.12), 0 0 0 1px #E8EAF0',
                'badge': '0 2px 8px rgba(91, 91, 240, 0.08)',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 35s linear infinite',
            },
        },
    },
    plugins: [],
}
