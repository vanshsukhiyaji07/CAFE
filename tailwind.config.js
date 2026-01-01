/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cafe-brown': '#4A2C2A',
                'cafe-cream': '#F5E6D3',
                'cafe-gold': '#D4A574',
                'cafe-dark': '#2C1810',
                'cafe-light': '#FDF8F3',
            },
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'body': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
