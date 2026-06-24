/**
 * Cheap per-section radial glow + corner accent.
 * Place inside a relative section, behind the content.
 */
export default function SectionGlow({
                                        from = "#6366f1",
                                        to = "transparent",
                                        position = "top-right", // top-right | top-left | bottom-right | bottom-left | center
                                        size = "40vw",
                                        opacity = 0.18,
                                    }) {
    const positions = {
        "top-right": "top-[-10%] right-[-10%]",
        "top-left": "top-[-10%] left-[-10%]",
        "bottom-right": "bottom-[-10%] right-[-10%]",
        "bottom-left": "bottom-[-10%] left-[-10%]",
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    };

    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute ${positions[position]} rounded-full blur-[110px] mix-blend-screen`}
            style={{
                width: size,
                height: size,
                background: `radial-gradient(circle at center, ${from} 0%, ${to} 70%)`,
                opacity,
            }}
        />
    );
}
