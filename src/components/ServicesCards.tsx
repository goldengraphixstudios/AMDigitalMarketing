"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services, ctas } from "@/lib/content";
import { Magnetic } from "@/components/Magnetic";

const visualMotion = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

function ServiceVisual({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const repeat = reduce ? 0 : Infinity;

  switch (name) {
    case "funnel":
      return (
        <motion.svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-brand-purple"
          variants={visualMotion}
          initial="initial"
          animate="animate"
        >
          <motion.path
            d="M8 14h48L36 36v14l-8 4V36L8 14Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="140"
            strokeDashoffset="140"
            animate={{ strokeDashoffset: [140, 0, 140] }}
            transition={{ duration: 6, repeat, ease: "easeInOut" }}
          />
        </motion.svg>
      );
    case "crm":
      return (
        <motion.svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-brand-purple"
          variants={visualMotion}
          initial="initial"
          animate="animate"
        >
          <motion.circle
            cx="32"
            cy="32"
            r="14"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="120"
            strokeDashoffset="120"
            animate={{ strokeDashoffset: [120, 0, 120] }}
            transition={{ duration: 6, repeat, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="32"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat, ease: "easeInOut" }}
          />
          <motion.circle
            cx="52"
            cy="32"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 3, repeat, ease: "easeInOut" }}
          />
        </motion.svg>
      );
    case "web":
      return (
        <motion.svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-brand-purple"
          variants={visualMotion}
          initial="initial"
          animate="animate"
        >
          <motion.rect
            x="10"
            y="14"
            width="44"
            height="36"
            rx="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="150"
            strokeDashoffset="150"
            animate={{ strokeDashoffset: [150, 0, 150] }}
            transition={{ duration: 6, repeat, ease: "easeInOut" }}
          />
          <motion.path
            d="M10 24h44"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat, ease: "easeInOut" }}
          />
        </motion.svg>
      );
    case "social":
      return (
        <motion.svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-brand-purple"
          variants={visualMotion}
          initial="initial"
          animate="animate"
        >
          <motion.path
            d="M18 30c0-6 5-10 11-10h6a10 10 0 010 20h-6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="140"
            strokeDashoffset="140"
            animate={{ strokeDashoffset: [140, 0, 140] }}
            transition={{ duration: 6, repeat, ease: "easeInOut" }}
          />
          <motion.circle
            cx="20"
            cy="36"
            r="5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat, ease: "easeInOut" }}
          />
        </motion.svg>
      );
    case "ads":
      return (
        <motion.svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-brand-purple"
          variants={visualMotion}
          initial="initial"
          animate="animate"
        >
          <motion.circle
            cx="32"
            cy="32"
            r="16"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="160"
            strokeDashoffset="160"
            animate={{ strokeDashoffset: [160, 0, 160] }}
            transition={{ duration: 6, repeat, ease: "easeInOut" }}
          />
          <motion.circle
            cx="32"
            cy="32"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat, ease: "easeInOut" }}
          />
        </motion.svg>
      );
    default:
      return (
        <motion.svg
          viewBox="0 0 64 64"
          className="h-12 w-12 text-brand-purple"
          variants={visualMotion}
          initial="initial"
          animate="animate"
        >
          <motion.rect
            x="14"
            y="12"
            width="36"
            height="40"
            rx="6"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="150"
            strokeDashoffset="150"
            animate={{ strokeDashoffset: [150, 0, 150] }}
            transition={{ duration: 6, repeat, ease: "easeInOut" }}
          />
          <motion.path
            d="M20 26h24M20 34h18"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat, ease: "easeInOut" }}
          />
        </motion.svg>
      );
  }
}

export function ServicesCards() {
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          className="gradient-border"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.05 }}
        >
          <motion.div
            className="glass-card group relative h-full overflow-hidden rounded-[27px] p-8"
            whileHover={
              reduce
                ? undefined
                : {
                    y: -10,
                    rotateX: 4,
                    rotateY: -3,
                    scale: 1.01,
                    boxShadow: "0 35px 90px rgba(255, 48, 109, 0.25)",
                  }
            }
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -6, 0],
                    transition: {
                      duration: 8 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="card-sweep" />
            <div className="relative flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{service.summary}</p>
              </div>
              <ServiceVisual name={service.icon} />
            </div>
            <ul className="relative mt-4 space-y-2 text-sm text-foreground/70">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-pink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative mt-6">
              <Magnetic>
                <Link href="/contact" className="btn-outline">
                  {ctas.requestQuote}
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
