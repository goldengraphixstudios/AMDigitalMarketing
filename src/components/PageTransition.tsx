"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { motionTokens } from "@/lib/motion";
import { useHasMounted } from "@/lib/useHasMounted";

type PageTransitionProps = {
  children: React.ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const mounted = useHasMounted();

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
        transition={{
          duration: motionTokens.duration.medium,
          ease: motionTokens.ease.luxury,
        }}
      >
        {!reduce && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[60] origin-left bg-gradient-to-r from-brand-pink via-brand-lilac to-brand-purple"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.55, ease: motionTokens.ease.luxury }}
          />
        )}
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
