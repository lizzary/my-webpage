import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import SectionGlow from "../background/SectionGlow";

export default function Contact() {
    const {t} = useLocale();
    const {primaryEmail, socials, intro} = profile.contact;
    return (
        <section id="contact" className="relative py-28">
            <SectionGlow from="#6366f1" position="center" size="60vw" opacity={0.18}/>
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.3}}
                    transition={{duration: 0.7}}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.05] p-10 backdrop-blur-2xl sm:p-14"
                >
                    <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-indigo-500/30 blur-[100px]"/>
                    <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-cyan-500/30 blur-[100px]"/>

                    <div className="relative">
                        <span className="text-xs uppercase tracking-[0.32em] text-indigo-300/80">
                            {t({en: "06 — Contact", zh: "06 — 联系"})}
                        </span>
                        <h2 className="mt-3 max-w-3xl bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl md:text-5xl">
                            {t({
                                en: "Let's build something worth shipping.",
                                zh: "让我们一起做点值得交付的东西。",
                            })}
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
                            {t(intro)}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href={`mailto:${primaryEmail}`}
                                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                            >
                                <span>{primaryEmail}</span>
                                <span className="text-base transition-transform group-hover:translate-x-0.5">→</span>
                            </a>
                            {socials.map((s) => (
                                <a
                                    key={s.href}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white/85 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/[0.08]"
                                >
                                    {t(s.label)} ↗
                                </a>
                            ))}
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:grid-cols-3">
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                                    {t({en: "Based in", zh: "所在地"})}
                                </div>
                                <div className="mt-1 text-white/80">{t(profile.identity.location)}</div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                                    {t({en: "Open to", zh: "感兴趣的方向"})}
                                </div>
                                <div className="mt-1 text-white/80">
                                    {t({
                                        en: "Full-time IT roles · Open-source collaboration · Quant research",
                                        zh: "全职 IT 岗位 · 开源协作 · 量化研究",
                                    })}
                                </div>
                            </div>
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                                    {t({en: "Response time", zh: "回复时间"})}
                                </div>
                                <div className="mt-1 text-white/80">
                                    {t({en: "Usually within 24 h", zh: "通常 24 小时内"})}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
