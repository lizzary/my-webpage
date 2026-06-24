/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ink: {
                    950: "#03040b",
                    900: "#050714",
                    800: "#0a0f24",
                },
            },
            boxShadow: {
                glow: "0 0 24px rgba(99,102,241,0.45)",
                "glow-cyan": "0 0 24px rgba(6,182,212,0.45)",
            },
            fontFamily: {
                sans: [
                    "Inter",
                    "SF Pro Display",
                    "Segoe UI",
                    "system-ui",
                    "-apple-system",
                    "Helvetica Neue",
                    "Arial",
                    "PingFang SC",
                    "Microsoft YaHei",
                    "sans-serif",
                ],
                mono: [
                    "JetBrains Mono",
                    "Fira Code",
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Consolas",
                    "monospace",
                ],
            },
        },
    },
    plugins: [],
};
