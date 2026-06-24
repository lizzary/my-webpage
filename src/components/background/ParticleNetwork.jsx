import {useEffect, useRef} from "react";

/**
 * Canvas particle network.
 * - 粒子在画布内做布朗运动，距离低于阈值时连线
 * - 鼠标位置周围有轻微推开/连线密集效果
 * - 自动适配高 DPI 屏幕，监听 resize
 */
export default function ParticleNetwork({
                                            density = 0.00009,       // 每像素粒子数
                                            color = "180, 200, 255", // RGB（连线 + 粒子主色，alpha 由距离决定）
                                            maxDistance = 130,
                                            speed = 0.25,
                                            mouseRadius = 160,
                                            className = "",
                                        }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", {alpha: true});
        let raf = 0;
        let particles = [];
        let dpr = Math.min(window.devicePixelRatio || 1, 2);
        let mouse = {x: -9999, y: -9999, active: false};

        const resize = () => {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const target = Math.max(40, Math.floor(w * h * density));
            particles = new Array(target).fill(0).map(() => spawn(w, h));
        };

        const spawn = (w, h) => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            r: 0.8 + Math.random() * 1.4,
        });

        const step = () => {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            ctx.clearRect(0, 0, w, h);

            // update + draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // mouse interaction — gentle push away
                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < mouseRadius * mouseRadius && d2 > 0.0001) {
                        const d = Math.sqrt(d2);
                        const force = (1 - d / mouseRadius) * 0.6;
                        p.vx += (dx / d) * force * 0.05;
                        p.vy += (dy / d) * force * 0.05;
                    }
                }

                p.x += p.vx;
                p.y += p.vy;

                // soft damping so particles don't accelerate forever
                p.vx *= 0.995;
                p.vy *= 0.995;

                // re-inject from edge when out of bounds
                if (p.x < -10) p.x = w + 10;
                else if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                else if (p.y > h + 10) p.y = -10;

                ctx.beginPath();
                ctx.fillStyle = `rgba(${color}, 0.55)`;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            // connecting lines
            const md2 = maxDistance * maxDistance;
            for (let i = 0; i < particles.length; i++) {
                const a = particles[i];
                for (let j = i + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < md2) {
                        const alpha = (1 - d2 / md2) * 0.45;
                        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }

                // also draw a line from each particle to the mouse, for "near pointer" glow
                if (mouse.active) {
                    const dx = a.x - mouse.x;
                    const dy = a.y - mouse.y;
                    const d2m = dx * dx + dy * dy;
                    if (d2m < md2 * 1.6) {
                        const alpha = (1 - d2m / (md2 * 1.6)) * 0.55;
                        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            raf = requestAnimationFrame(step);
        };

        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };
        const onLeave = () => {
            mouse.active = false;
            mouse.x = -9999;
            mouse.y = -9999;
        };

        resize();
        step();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, [density, color, maxDistance, speed, mouseRadius]);

    return (
        <canvas
            ref={canvasRef}
            className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
        />
    );
}
