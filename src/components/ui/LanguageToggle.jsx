import {motion} from "framer-motion";
import {useLocale} from "../../contexts/LocaleContext";

/**
 * Segmented EN / 中 pill toggle. Uses framer-motion shared layout
 * to animate the active background between the two options.
 */
export default function LanguageToggle({className = ""}) {
    const {locale, setLocale} = useLocale();

    const options = [
        {key: "en", label: "EN"},
        {key: "zh", label: "中"},
    ];

    return (
        <div
            role="group"
            aria-label="Language"
            className={`relative inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] p-0.5 text-xs backdrop-blur-xl ${className}`}
        >
            {options.map((opt) => {
                const active = locale === opt.key;
                return (
                    <button
                        key={opt.key}
                        type="button"
                        onClick={() => setLocale(opt.key)}
                        aria-pressed={active}
                        className={`relative z-10 inline-flex h-7 min-w-[2rem] items-center justify-center rounded-full px-2.5 font-mono tracking-wider transition-colors duration-200 ${
                            active ? "text-black" : "text-white/65 hover:text-white"
                        }`}
                    >
                        {active && (
                            <motion.span
                                layoutId="lang-active"
                                transition={{type: "spring", stiffness: 500, damping: 32}}
                                className="absolute inset-0 -z-10 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.25)]"
                            />
                        )}
                        {opt.label}
                    </button>
                );
            })}
        </div>
    );
}
