/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                text: "#b7b7b7",
                bg: "black",
                "primary-orange": "orange",
                "primary-red": "cc5261",
                "active-link": "#a30d33",
            },
        },
    },
    plugins: [],
};
