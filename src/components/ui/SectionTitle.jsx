import {motion} from "framer-motion";

export default function SectionTitle({eyebrow, title, intro, align = "left"}) {
    const alignClass =
        align === "center" ? "items-center text-center" : "items-start text-left";
    return (
        <motion.div
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className={`mb-12 flex max-w-3xl flex-col ${alignClass}`}
        >
            {eyebrow && (
                <span className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-indigo-300/80">
          <span className="inline-block h-px w-8 bg-indigo-300/60"/>
                    {eyebrow}
        </span>
            )}
            <h2 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {intro && (
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                    {intro}
                </p>
            )}
        </motion.div>
    );
}
