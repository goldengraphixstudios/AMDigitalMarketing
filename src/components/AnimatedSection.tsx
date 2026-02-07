"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionTokens, sectionReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/useHasMounted";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const mounted = useHasMounted();
  const reduce = useReducedMotion();
  const shouldReduce = mounted ? reduce : false;

  return (
    <motion.div
      className={cn(className)}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
      initial={shouldReduce ? sectionReveal.show : sectionReveal.hidden}
      whileInView={sectionReveal.show}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: motionTokens.duration.slow,
        ease: motionTokens.ease.glide,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
