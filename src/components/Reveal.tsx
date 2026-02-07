"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionTokens, sectionReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/useHasMounted";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const mounted = useHasMounted();
  const reduce = useReducedMotion();
  const shouldReduce = mounted ? reduce : false;

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduce ? sectionReveal.show : sectionReveal.hidden}
      whileInView={sectionReveal.show}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: motionTokens.duration.medium,
        ease: motionTokens.ease.soft,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
