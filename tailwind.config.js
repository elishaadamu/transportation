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
                "primary-red": "#cc5262",
                "active-link": "#a30c33",
            },
        },
    },
    plugins: [],
};
