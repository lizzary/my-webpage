import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import SectionGlow from "../background/SectionGlow";

const categoryAccent = {
    Frontend: {dot: "from-cyan-300 to-indigo-400", chip: "hover:border-cyan-300/40"},
    Backend: {dot: "from-amber-300 to-rose-400", chip: "hover:border-amber-300/40"},
    Concurrency: {dot: "from-violet-300 to-fuchsia-400", chip: "hover:border-violet-300/40"},
    Database: {dot: "from-emerald-300 to-cyan-400", chip: "hover:border-emerald-300/40"},
    Systems: {dot: "from-indigo-300 to-blue-400", chip: "hover:border-indigo-300/40"},
    "ML / Stats": {dot: "from-pink-300 to-orange-300", chip: "hover:border-pink-300/40"},
};

export default function Skills() {
    const {t} = useLocale();
    return (
        <section id="skills" className="relative py-28">
            <SectionGlow from="#06b6d4" position="bottom-right" opacity={0.16}/>
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    eyebrow={t({en: "04 — Toolbox", zh: "04 — 工具箱"})}
                    title={t({
                        en: "Things I reach for, day to day.",
                        zh: "我日常顺手就拿起的工具。",
                    })}
                    intro={t({
                        en: "A snapshot — not an exhaustive list. The deeper the bullet point, the more I've burned my hands on it in production.",
                        zh: "下面只是一张快照，并非完整清单。条目越具体，代表我在生产环境踩过的坑越多。",
                    })}
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(profile.skills).map(([cat, items], idx) => {
                        const accent = categoryAccent[cat] || categoryAccent.Frontend;
                        const catLabel = profile.skillCategories[cat];
                        return (
                            <motion.div
                                key={cat}
                                initial={{opacity: 0, y: 24}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, amount: 0.2}}
                                transition={{duration: 0.5, delay: idx * 0.08}}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.05]"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-br ${accent.dot}`}/>
                                    <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                                        {t(catLabel || cat)}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {items.map((it, i) => (
                                        <span
                                            key={i}
                                            className={`rounded-md border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-white/75 transition ${accent.chip}`}
                                        >
                                            {t(it)}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
