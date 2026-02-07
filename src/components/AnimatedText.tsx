"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionTokens, heroWord } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/useHasMounted";

type AnimatedWordsProps = {
  text: string;
  className?: string;
};

export function AnimatedWords({ text, className }: AnimatedWordsProps) {
  const words = text.split(" ");
  const mounted = useHasMounted();
  const reduce = useReducedMotion();
  const shouldReduce = mounted ? reduce : false;

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-2", className)}
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
  );
}
