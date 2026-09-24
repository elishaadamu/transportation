/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                md: "850px", // Medium devices
            },
            colors: {
                text: "#f1f1f1",
                bg: "black",
                "primary-orange": "#fdb913",
                "primary-black": "black",
                "primary-blue": "#2563eb",
                "active-blue": "#1e3a8a",
                "primary-red": "#2563eb", // Updated to blue
                "active-link": "#1e40af", // Updated to rich blue
            },
        },
    },
    plugins: [],
};
