import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {useLocale} from "../../contexts/LocaleContext";
import LanguageToggle from "../ui/LanguageToggle";

const linkDefs = [
    {id: "about", label: {en: "About", zh: "关于"}},
    {id: "experience", label: {en: "Experience", zh: "经历"}},
    {id: "projects", label: {en: "Projects", zh: "项目"}},
    {id: "skills", label: {en: "Skills", zh: "技能"}},
    {id: "beyond", label: {en: "Beyond", zh: "代码之外"}},
    {id: "contact", label: {en: "Contact", zh: "联系"}},
];

export default function Navbar() {
    const {t} = useLocale();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("about");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            {rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1]}
        );
        linkDefs.forEach(({id}) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{y: -32, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.6, ease: "easeOut"}}
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
                    : "backdrop-blur-none bg-transparent border-b border-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="group flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 shadow-[0_0_12px_rgba(99,102,241,0.8)]"/>
                    <span className="font-mono text-sm tracking-widest text-white/85 group-hover:text-white">
                        lizzary<span className="text-indigo-400">.dev</span>
                    </span>
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {linkDefs.map((l) => {
                        const isActive = active === l.id;
                        return (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    className={`relative rounded-full px-3.5 py-1.5 text-sm transition ${
                                        isActive ? "text-white" : "text-white/55 hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                                            transition={{type: "spring", stiffness: 400, damping: 30}}
                                        />
                                    )}
                                    {t(l.label)}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden items-center gap-2 md:flex">
                    <LanguageToggle/>
                    <a
                        href="#contact"
                        className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/90 transition hover:border-white/30 hover:bg-white/10"
                    >
                        {t({en: "Get in touch →", zh: "联系我 →"})}
                    </a>
                </div>

                <div className="flex items-center gap-2 md:hidden">
                    <LanguageToggle/>
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen((o) => !o)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80"
                    >
                        <span className="text-lg">{open ? "×" : "≡"}</span>
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
                    <ul className="flex flex-col px-6 py-3">
                        {linkDefs.map((l) => (
                            <li key={l.id}>
                                <a
                                    href={`#${l.id}`}
                                    onClick={() => setOpen(false)}
                                    className="block py-2 text-sm text-white/80"
                                >
                                    {t(l.label)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.nav>
    );
}
