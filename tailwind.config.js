/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Poppins: "Poppins",
        },
        extend: {
            colors: {
                BerkeleyBlue: "#134074",
                HoverBlue: "#0B2545",
                PowderBlue: "#8DA9C4",
                yellow: "#e4d61b",
                MintCream: "#EEF4ED",
                gray: "#4B4B4C",
            },
            animation: {
                slide: "slide 25s linear infinite",
            },
            keyframes: {
                slide: {
                    "0%,100%": { transform: "translateX(5%)" },
                    "50%": { transform: "translateX(-120%)" },
                },
            },
        },
        screens: {
            xs: "480px",
            sm: "768px",
            md: "1060px",
        },
    },
    plugins: [],
};
