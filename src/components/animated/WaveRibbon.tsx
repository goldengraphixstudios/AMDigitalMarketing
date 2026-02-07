"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function WaveRibbon({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn("absolute inset-x-0", className)}
      animate={reduce ? undefined : { x: ["0%", "-50%"], scaleY: [1, 1.04, 1] }}
      transition={{ duration: 24, repeat: reduce ? 0 : Infinity, ease: "linear" }}
    >
      <svg
        viewBox="0 0 1440 320"
        className="h-40 w-[200%]"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255,181,205,0.4)"
          d="M0,160L80,176C160,192,320,224,480,240C640,256,800,256,960,240C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </motion.div>
  );
}
