import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import SectionGlow from "../background/SectionGlow";

const accentChip = {
    indigo: "bg-indigo-400/10 text-indigo-200 border-indigo-300/20",
    cyan: "bg-cyan-400/10 text-cyan-200 border-cyan-300/20",
    amber: "bg-amber-400/10 text-amber-200 border-amber-300/20",
    violet: "bg-violet-400/10 text-violet-200 border-violet-300/20",
};

const accentDot = {
    indigo: "from-indigo-400 to-cyan-400",
    cyan: "from-cyan-400 to-emerald-400",
    amber: "from-amber-300 to-rose-400",
    violet: "from-violet-400 to-fuchsia-400",
};

export default function Projects() {
    const {t} = useLocale();
    return (
        <section id="projects" className="relative py-28">
            <SectionGlow from="#8b5cf6" position="bottom-left" opacity={0.18}/>
            <SectionGlow from="#f59e0b" position="top-right" opacity={0.14}/>
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    eyebrow={t({en: "03 — Open source", zh: "03 — 开源项目"})}
                    title={t({
                        en: "Code I'm proud to ship in public.",
                        zh: "敢于公开交付的代码。",
                    })}
                    intro={t({
                        en: "Each of these is end-to-end mine — from the design doc to the README to the binary in the release tab.",
                        zh: "下面每一个项目都从设计文档到 README 再到 release 二进制，端到端由我一人完成。",
                    })}
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {profile.projects.map((p, idx) => (
                        <motion.div
                            key={p.name}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.6, delay: idx * 0.1}}
                            className="h-full"
                        >
                            <GlassCard accent={p.accent} className="h-full">
                                <div className="flex h-full flex-col">
                                    <div className="flex items-center gap-3">
                                        <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-br ${accentDot[p.accent]}`}/>
                                        <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                                        {p.wip && (
                                            <span className="rounded-full border border-amber-300/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-amber-200">
                                                {t({en: "WIP", zh: "开发中"})}
                                            </span>
                                        )}
                                        <span className="ml-auto inline-flex items-center gap-1 text-xs text-white/55">
                                            <span>★</span>
                                            <span>{p.stars}</span>
                                        </span>
                                    </div>

                                    {p.sub && (
                                        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                                            {p.sub}
                                        </div>
                                    )}

                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {p.languages.map((l, i) => (
                                            <span
                                                key={i}
                                                className={`rounded-full border px-2 py-0.5 text-[11px] ${accentChip[p.accent]}`}
                                            >
                                                {t(l)}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-white/70">{t(p.blurb)}</p>

                                    <ul className="mt-4 space-y-2 text-xs leading-relaxed text-white/60">
                                        {p.highlights.map((h, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-white/40"/>
                                                <span>{t(h)}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                                        {p.links.length > 0 ? (
                                            p.links.map((l) => (
                                                <a
                                                    key={l.href}
                                                    href={l.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/80 transition hover:border-white/30 hover:bg-white/[0.08]"
                                                >
                                                    {t(l.label)} ↗
                                                </a>
                                            ))
                                        ) : (
                                            <span className="text-xs text-white/40">
                                                {t({en: "Repository coming soon", zh: "仓库即将开放"})}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
