import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import profile from "../../data/profile";
import {useLocale} from "../../contexts/LocaleContext";
import ParticleNetwork from "../background/ParticleNetwork";
import AuroraBackground from "../background/AuroraBackground";

export default function Hero() {
    const {t} = useLocale();
    const {name, chineseName, handle, roles, tagline, location, email} =
        profile.identity;

    const [roleIdx, setRoleIdx] = useState(0);
    useEffect(() => {
        const id = setInterval(
            () => setRoleIdx((i) => (i + 1) % roles.length),
            2800
        );
        return () => clearInterval(id);
    }, [roles.length]);

    return (
        <section
            id="top"
            className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
        >
            <AuroraBackground/>
            <ParticleNetwork density={0.00012} color="180, 200, 255" maxDistance={140}/>

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-6 py-24">
                {/* status pill */}
                <motion.div
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.1, duration: 0.6}}
                    className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/70 backdrop-blur-xl"
                >
                    <span className="relative inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60"/>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"/>
                    </span>
                    <span>
                        {t({en: "Available for full-time IT roles · ", zh: "正在寻找全职 IT 岗位 · "})}
                        {t(location)}
                    </span>
                </motion.div>

                <motion.span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.2, duration: 0.6}}
                    className="mb-4 font-mono text-sm tracking-widest text-indigo-300/80"
                >
                    {handle}
                </motion.span>

                <motion.h1
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.25, duration: 0.7}}
                    className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-5xl font-bold leading-[1.05] tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
                >
                    {name}
                    {chineseName && (
                        <span className="ml-3 align-middle text-xl text-white/40 sm:text-2xl">
                            {chineseName}
                        </span>
                    )}
                </motion.h1>

                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.45, duration: 0.6}}
                    className="mt-6 flex flex-wrap items-center gap-3 text-lg sm:text-xl md:text-2xl"
                >
                    <span className="text-white/60">{t({en: "I'm a", zh: "我是一名"})}</span>
                    <span className="relative inline-flex h-9 overflow-hidden md:h-10">
                        <motion.span
                            key={roleIdx}
                            initial={{y: 30, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -30, opacity: 0}}
                            transition={{duration: 0.4, ease: "easeOut"}}
                            className="bg-gradient-to-r from-indigo-300 via-cyan-300 to-amber-200 bg-clip-text font-semibold text-transparent"
                        >
                            {t(roles[roleIdx])}
                        </motion.span>
                    </span>
                </motion.div>

                <motion.p
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.6, duration: 0.6}}
                    className="mt-8 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
                >
                    {t(tagline)}
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.75, duration: 0.6}}
                    className="mt-10 flex flex-wrap items-center gap-3"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                    >
                        {t({en: "See my work", zh: "查看作品"})}
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                    <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/85 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/[0.08]"
                    >
                        {t({en: "Email me", zh: "发邮件"})}
                    </a>
                    <a
                        href={profile.identity.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm text-white/85 backdrop-blur-xl transition hover:border-white/30 hover:bg-white/[0.08]"
                    >
                        GitHub ↗
                    </a>
                </motion.div>

                {/* stats strip */}
                <motion.div
                    initial={{opacity: 0, y: 24}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.95, duration: 0.7}}
                    className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
                >
                    {profile.stats.map((s) => (
                        <div
                            key={t(s.label)}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl"
                        >
                            <div className="text-2xl font-semibold text-white sm:text-3xl">{s.value}</div>
                            <div className="mt-1 text-xs uppercase tracking-widest text-white/45">
                                {t(s.label)}
                            </div>
                            {s.hint && (
                                <div className="mt-1 text-xs text-white/55">{t(s.hint)}</div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.4, duration: 0.8}}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
                    <motion.span
                        animate={{y: [0, 10, 0]}}
                        transition={{duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
                        className="h-1.5 w-1 rounded-full bg-white/70"
                    />
                </div>
            </motion.div>
        </section>
    );
}
