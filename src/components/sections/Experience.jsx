import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import SectionGlow from "../background/SectionGlow";

export default function Experience() {
    const {t} = useLocale();
    return (
        <section id="experience" className="relative py-28">
            <SectionGlow from="#06b6d4" position="top-right" opacity={0.16}/>
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    eyebrow={t({en: "02 — Experience", zh: "02 — 实习经历"})}
                    title={t({
                        en: "Real production. Real users. Real government scrutiny.",
                        zh: "真实生产环境 · 真实用户 · 真实政府审查。",
                    })}
                    intro={t({
                        en: "One of those internships where you ship code that an entire city library system ends up running on.",
                        zh: "这是一次能让自己写的代码跑在整座城市图书馆系统里的实习。",
                    })}
                />

                <div className="space-y-8">
                    {profile.experience.map((exp, idx) => (
                        <motion.article
                            key={exp.company}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.6, delay: idx * 0.1}}
                            className="relative"
                        >
                            <GlassCard accent="cyan">
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                                    {/* left meta */}
                                    <div className="lg:w-64 lg:shrink-0">
                                        <div className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                                            {t(exp.period)}
                                        </div>
                                        <h3 className="mt-3 text-xl font-semibold text-white">
                                            {t(exp.role)}
                                        </h3>
                                        <div className="mt-2 text-sm text-white/70">{exp.company}</div>
                                        {exp.companyZh && (
                                            <div className="text-xs text-white/45">{exp.companyZh}</div>
                                        )}
                                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                                            {exp.ticker && (
                                                <span className="rounded-full bg-amber-400/10 px-2 py-0.5 font-mono text-amber-300">
                                                    {exp.ticker}
                                                </span>
                                            )}
                                            {exp.url && (
                                                <a
                                                    href={exp.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="rounded-full border border-white/15 px-2 py-0.5 text-white/65 hover:text-white"
                                                >
                                                    {t({en: "site ↗", zh: "官网 ↗"})}
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* right detail */}
                                    <div className="flex-1">
                                        <div className="mb-5 rounded-xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-transparent p-5">
                                            <div className="flex items-start justify-between gap-3">
                                                <div>
                                                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                                                        {t({en: "Project", zh: "项目"})}
                                                    </div>
                                                    <div className="mt-1 text-base font-medium text-white">
                                                        {t(exp.project.name)}
                                                    </div>
                                                </div>
                                                {exp.project.url && (
                                                    <a
                                                        href={exp.project.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="shrink-0 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
                                                    >
                                                        {t({en: "visit ↗", zh: "访问 ↗"})}
                                                    </a>
                                                )}
                                            </div>

                                            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/55">
                                                {exp.project.tender && (
                                                    <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-300/30 bg-amber-400/10 px-2 py-0.5 font-mono text-amber-200">
                                                        <span className="text-[9px] uppercase tracking-widest text-amber-300/70">
                                                            {t(exp.project.tenderLabel || {en: "Tender", zh: "投标编号"})}
                                                        </span>
                                                        <span>{exp.project.tender}</span>
                                                    </span>
                                                )}
                                                <span>{t(exp.project.scope)}</span>
                                            </div>

                                            {exp.project.purpose && (
                                                <div className="mt-4 border-t border-white/10 pt-4">
                                                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                                                        {t(exp.missionLabel || {en: "Mission (my scope)", zh: "项目宗旨（我参与的部分）"})}
                                                    </div>
                                                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                                                        {t(exp.project.purpose)}
                                                    </p>
                                                </div>
                                            )}

                                            {exp.project.features && exp.project.features.length > 0 && (
                                                <div className="mt-4 flex flex-wrap gap-1.5">
                                                    {exp.project.features.map((f, i) => (
                                                        <span
                                                            key={i}
                                                            className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] text-white/70"
                                                        >
                                                            {t(f)}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <ul className="space-y-3 text-sm leading-relaxed text-white/75">
                                            {exp.highlights.map((h, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{opacity: 0, x: -8}}
                                                    whileInView={{opacity: 1, x: 0}}
                                                    viewport={{once: true}}
                                                    transition={{delay: i * 0.05}}
                                                    className="flex gap-3"
                                                >
                                                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-300"/>
                                                    <span>{t(h)}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {exp.note && (
                                            <div className="mt-6 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-xs text-white/55">
                                                {t(exp.note)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
