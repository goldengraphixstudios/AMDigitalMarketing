"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";

export function BackgroundMotion() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const mounted = useHasMounted();

  React.useEffect(() => {
    if (!mounted || reduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const particles: {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      hue: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles.length = 0;
      const count = Math.min(90, Math.floor(window.innerWidth / 18));
      for (let i = 0; i < count; i += 1) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: 1.8 + Math.random() * 3.6,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          alpha: 0.18 + Math.random() * 0.35,
          hue: Math.random() > 0.5 ? 330 : 285,
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -60) p.x = canvas.width + 60;
        if (p.x > canvas.width + 60) p.x = -60;
        if (p.y < -60) p.y = canvas.height + 60;
        if (p.y > canvas.height + 60) p.y = -60;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 85%, 65%, ${p.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255,48,109,0.35)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();
    const handleResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, [mounted, reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(255,48,109,0.25),transparent_55%),radial-gradient(circle_at_85%_15%,rgba(198,140,220,0.26),transparent_55%),radial-gradient(circle_at_50%_90%,rgba(255,181,205,0.35),transparent_55%)]" />
      <div className="gradient-drift absolute inset-0" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="wave-layer absolute -bottom-12 left-0 h-[45vh] w-[200%]" />
    </div>
  );
}
