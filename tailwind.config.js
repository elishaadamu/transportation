/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                md: "850px", // Medium devices
            },
            colors: {
                text: "#1e293b",
                bg: "#ffffff",
                "primary-orange": "#d97706",
                "primary-black": "#0f172a",
                "primary-blue": "#1d4ed8",
                "active-blue": "#1e3a8a",
                "primary-red": "#1d4ed8",
                "active-link": "#1e40af",
            },
        },
    },
    plugins: [],
};
