import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";

export default function Footer() {
    const {t} = useLocale();
    const year = new Date().getFullYear();
    return (
        <footer className="relative z-10 mt-32 border-t border-white/5 bg-black/30 py-10 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center">
                <div className="flex items-center gap-2 text-sm text-white/55">
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400"/>
                    <span>
                        © {year} {profile.identity.name}.{" "}
                        {t({
                            en: "Crafted with React + Tailwind + Framer Motion.",
                            zh: "由 React + Tailwind + Framer Motion 精心打造。",
                        })}
                    </span>
                </div>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-white/40">
                    <a href={profile.identity.github} target="_blank" rel="noreferrer" className="hover:text-white/80">
                        GitHub
                    </a>
                    <span className="text-white/15">·</span>
                    <a href={`mailto:${profile.identity.email}`} className="hover:text-white/80">
                        {t({en: "Email", zh: "邮箱"})}
                    </a>
                    <span className="text-white/15">·</span>
                    <a href="#top" className="hover:text-white/80">
                        {t({en: "Top ↑", zh: "回到顶部 ↑"})}
                    </a>
                </div>
            </div>
        </footer>
    );
}
