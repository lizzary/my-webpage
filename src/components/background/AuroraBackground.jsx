/**
 * Layered "aurora" gradient — three slow-moving radial blobs plus
 * a noise-free grid overlay. All pure CSS, GPU-cheap.
 *
 * Place inside a `position: relative` parent and put your content
 * in a sibling with z-index > 0.
 */
export default function AuroraBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* base vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,#0a0f24_0%,#050714_60%,#03040b_100%)]"/>

            {/* aurora blob 1 — indigo */}
            <div
                className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full opacity-60 blur-[120px] mix-blend-screen aurora-drift-1"
                style={{background: "radial-gradient(circle at center, #4f46e5 0%, transparent 70%)"}}
            />
            {/* aurora blob 2 — cyan */}
            <div
                className="absolute top-1/3 -right-32 h-[55vh] w-[55vh] rounded-full opacity-55 blur-[120px] mix-blend-screen aurora-drift-2"
                style={{background: "radial-gradient(circle at center, #06b6d4 0%, transparent 70%)"}}
            />
            {/* aurora blob 3 — amber, low */}
            <div
                className="absolute -bottom-32 left-1/4 h-[50vh] w-[50vh] rounded-full opacity-30 blur-[140px] mix-blend-screen aurora-drift-3"
                style={{background: "radial-gradient(circle at center, #f59e0b 0%, transparent 70%)"}}
            />
            {/* aurora blob 4 — violet, mid */}
            <div
                className="absolute top-1/2 left-1/3 h-[45vh] w-[45vh] rounded-full opacity-40 blur-[120px] mix-blend-screen aurora-drift-4"
                style={{background: "radial-gradient(circle at center, #8b5cf6 0%, transparent 70%)"}}
            />

            {/* faint grid overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 80%)",
                }}
            />

            {/* top-edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"/>
        </div>
    );
}
