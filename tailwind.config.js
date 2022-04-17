module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    // daisyUI config
    daisyui: {
        themes: [{
            light: {
                ...require("daisyui/src/colors/themes")[
                    "[data-theme=garden]"
                ],
                "base-100": "#1A3C40"
            },
        }, ],
    },
};