"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionTokens, heroWord } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/useHasMounted";

type LightSweepTextProps = {
  text: string;
  className?: string;
};

export function LightSweepText({ text, className }: LightSweepTextProps) {
  const words = text.split(" ");
  const mounted = useHasMounted();
  const reduce = useReducedMotion();
  const shouldReduce = mounted ? reduce : false;

  return (
    <span className={cn("relative inline-block", className)}>
      {!shouldReduce && (
        <motion.span
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "120%", opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.4, delay: 0.4, ease: motionTokens.ease.luxury }}
        />
      )}
      <motion.span
        className="relative z-10 inline-flex flex-wrap gap-x-2"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: motionTokens.stagger.small,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={shouldReduce ? { hidden: heroWord.show, show: heroWord.show } : heroWord}
              transition={{ duration: motionTokens.duration.medium, ease: motionTokens.ease.luxury }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
