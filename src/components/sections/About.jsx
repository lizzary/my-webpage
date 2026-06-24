import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import SectionGlow from "../background/SectionGlow";

export default function About() {
    const {t} = useLocale();
    const {education} = profile;

    const principles = [
        {
            dot: "bg-cyan-300",
            title: {en: "Systems-first.", zh: "系统优先。"},
            body: {
                en: "I think in syscalls, ABIs, and memory layouts — and treat the language as a tool rather than a worldview.",
                zh: "习惯从系统调用、ABI、内存布局的角度思考问题 —— 编程语言只是工具，而非世界观。",
            },
        },
        {
            dot: "bg-indigo-300",
            title: {en: "Empirical.", zh: "实证主义。"},
            body: {
                en: "Decisions are backed by benchmarks, traces, and statistics — not intuition.",
                zh: "决策由 benchmark、trace 和统计数据支撑 —— 而不是直觉。",
            },
        },
        {
            dot: "bg-amber-300",
            title: {en: "Ship in public.", zh: "公开交付。"},
            body: {
                en: "Open-source work keeps me honest — and forces the API surface to make sense to someone other than me.",
                zh: "开源让我保持坦诚 —— 同时逼迫我把 API 设计得让别人也能看懂。",
            },
        },
    ];

    return (
        <section id="about" className="relative py-28">
            <SectionGlow from="#6366f1" position="top-left" opacity={0.18}/>
            <div className="mx-auto max-w-6xl px-6">
                <SectionTitle
                    eyebrow={t({en: "01 — About", zh: "01 — 关于我"})}
                    title={t({
                        en: "Mathematician by training, engineer by craft.",
                        zh: "出身数学，志于工程。",
                    })}
                    intro={t({
                        en: "Statistics gave me the rigour to reason about data; CS & AI gave me the tools to ship systems that act on it. I move comfortably between the two.",
                        zh: "统计学给了我推理数据的严谨；CS 与 AI 给了我把推理变成系统的工具。我在两者之间自由切换。",
                    })}
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <GlassCard accent="indigo" className="lg:col-span-2">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <span className="text-xs uppercase tracking-[0.3em] text-indigo-300/80">
                                    {t({en: "Education", zh: "教育背景"})}
                                </span>
                                <h3 className="mt-2 text-2xl font-semibold text-white">
                                    {t(education.school)}
                                </h3>
                                <p className="mt-1 text-sm text-white/55">{t(education.degree)}</p>
                            </div>
                            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 text-lg font-bold text-white sm:flex">
                                {education.shortSchool}
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {education.majors.map((m, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                                >
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                                        {t(m.type)}
                                    </div>
                                    <div className="mt-1 text-sm font-medium text-white">{t(m.name)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
                                {t({en: "Coursework", zh: "核心课程"})}
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {education.coursework.map((c, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{opacity: 0, y: 8}}
                                        whileInView={{opacity: 1, y: 0}}
                                        viewport={{once: true}}
                                        transition={{delay: i * 0.03, duration: 0.35}}
                                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/75"
                                    >
                                        {t(c)}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    <GlassCard accent="cyan">
                        <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                            {t({en: "How I work", zh: "我的工作方式"})}
                        </span>
                        <ul className="mt-4 space-y-4 text-sm leading-relaxed text-white/75">
                            {principles.map((p, i) => (
                                <li key={i} className="flex gap-3">
                                    <span className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${p.dot}`}/>
                                    <span>
                                        <strong className="text-white">{t(p.title)}</strong> {t(p.body)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
