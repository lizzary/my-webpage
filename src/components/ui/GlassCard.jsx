import {motion} from "framer-motion";

/**
 * Frosted-glass card with optional gradient border on hover.
 * Children render inside the inner panel; `accent` controls the hover-glow color.
 */
export default function GlassCard({
                                      children,
                                      className = "",
                                      accent = "indigo", // indigo | cyan | amber | violet
                                      hoverLift = true,
                                  }) {
    const accents = {
        indigo: "from-indigo-400/40 via-indigo-400/0 to-cyan-400/30",
        cyan: "from-cyan-400/40 via-cyan-400/0 to-emerald-400/30",
        amber: "from-amber-300/40 via-amber-300/0 to-rose-400/30",
        violet: "from-violet-400/40 via-violet-400/0 to-fuchsia-400/30",
    };

    return (
        <motion.div
            whileHover={hoverLift ? {y: -4} : undefined}
            transition={{type: "spring", stiffness: 250, damping: 20}}
            className={`group relative rounded-2xl ${className}`}
        >
            {/* gradient border on hover */}
            <div
                className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${accents[accent]} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div
                className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05]">
                {children}
            </div>
        </motion.div>
    );
}
