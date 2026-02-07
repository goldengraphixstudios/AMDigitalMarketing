"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const BLOBS = [
  { id: 1, size: 380, top: -10, left: -8, color: "rgba(255,48,109,0.35)" },
  { id: 2, size: 420, top: 12, left: 10, color: "rgba(198,140,220,0.32)" },
  { id: 3, size: 280, top: 28, left: 34, color: "rgba(255,181,205,0.38)" },
  { id: 4, size: 360, top: 6, left: 52, color: "rgba(112,0,143,0.28)" },
  { id: 5, size: 300, top: 36, left: 62, color: "rgba(255,48,109,0.28)" },
  { id: 6, size: 440, top: 18, left: 78, color: "rgba(198,140,220,0.3)" },
  { id: 7, size: 240, top: 58, left: 6, color: "rgba(255,181,205,0.34)" },
  { id: 8, size: 320, top: 64, left: 22, color: "rgba(255,48,109,0.26)" },
  { id: 9, size: 280, top: 52, left: 42, color: "rgba(198,140,220,0.28)" },
  { id: 10, size: 360, top: 66, left: 58, color: "rgba(255,181,205,0.3)" },
  { id: 11, size: 260, top: 72, left: 76, color: "rgba(112,0,143,0.22)" },
  { id: 12, size: 300, top: 84, left: 12, color: "rgba(255,48,109,0.22)" },
  { id: 13, size: 340, top: 84, left: 34, color: "rgba(198,140,220,0.26)" },
  { id: 14, size: 280, top: 88, left: 56, color: "rgba(255,181,205,0.28)" },
  { id: 15, size: 220, top: 88, left: 78, color: "rgba(255,48,109,0.2)" },
  { id: 16, size: 260, top: -12, left: 70, color: "rgba(255,181,205,0.26)" },
  { id: 17, size: 240, top: 10, left: 24, color: "rgba(112,0,143,0.2)" },
  { id: 18, size: 220, top: 30, left: 86, color: "rgba(198,140,220,0.24)" },
  { id: 19, size: 260, top: 48, left: 88, color: "rgba(255,48,109,0.2)" },
  { id: 20, size: 220, top: 70, left: 90, color: "rgba(255,181,205,0.22)" },
  { id: 21, size: 200, top: 2, left: 90, color: "rgba(112,0,143,0.18)" },
  { id: 22, size: 220, top: 22, left: -2, color: "rgba(198,140,220,0.2)" },
  { id: 23, size: 200, top: 46, left: -6, color: "rgba(255,48,109,0.18)" },
  { id: 24, size: 240, top: 76, left: -8, color: "rgba(255,181,205,0.2)" },
];

export function GradientBlobs({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("absolute inset-0", className)}>
      {BLOBS.map((blob, index) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            top: `${blob.top}%`,
            left: `${blob.left}%`,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
            mixBlendMode: "soft-light",
            opacity: 0.55,
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 18, -12, 0],
                  y: [0, -16, 12, 0],
                }
          }
          transition={{
            duration: 22 + (index % 6) * 3,
            repeat: reduce ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
