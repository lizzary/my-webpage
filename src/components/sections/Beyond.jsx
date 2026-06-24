import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import SectionGlow from "../background/SectionGlow";

export default function Beyond() {
    const {t} = useLocale();
    const {items} = profile.beyond;
    return (
        <section id="beyond" className="relative py-28">
            <SectionGlow from="#f59e0b" position="top-left" opacity={0.15}/>
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    eyebrow={t({en: "05 — Beyond code", zh: "05 — 代码之外"})}
                    title={t({
                        en: "When I'm not shipping software, I'm modelling markets.",
                        zh: "不写代码的时候，我在建模市场。",
                    })}
                    intro={t({
                        en: "Quantitative finance is what I do for fun — and what keeps my statistics muscle from atrophying.",
                        zh: "量化金融是我的业余爱好 —— 也是让我的统计学肌肉不退化的训练场。",
                    })}
                />

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1}}
                    className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-amber-500/5 via-indigo-500/5 to-cyan-500/5 px-6 py-4"
                >
                    <div className="font-mono text-xs leading-relaxed text-white/55 sm:text-sm">
                        <span className="text-amber-300/80">α</span> = <span className="text-white/80">rank</span>
                        (<span className="text-cyan-300/80">close</span> /
                        <span className="text-cyan-300/80"> delay</span>(close, 5))
                        − <span className="text-indigo-300/80">decay_linear</span>(<span className="text-cyan-300/80">volume</span>, 10)
                        &nbsp;&nbsp;<span className="text-white/35">
                            {t({
                                en: "// neutralised by sector, residualised on β",
                                zh: "// 按行业中性化，并对 β 做残差化",
                            })}
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {items.map((it, i) => (
                        <motion.div
                            key={i}
                            initial={{opacity: 0, y: 24}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.2}}
                            transition={{duration: 0.5, delay: i * 0.1}}
                        >
                            <GlassCard accent="amber">
                                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-amber-200">
                                    {t(it.tag)}
                                </span>
                                <h3 className="mt-4 text-xl font-semibold text-white">{t(it.heading)}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/70">{t(it.body)}</p>
                                {it.link && (
                                    <a
                                        href={it.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-5 inline-flex items-center gap-1 text-xs text-amber-200 hover:text-amber-100"
                                    >
                                        {it.link.replace(/^https?:\/\//, "")} ↗
                                    </a>
                                )}
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
