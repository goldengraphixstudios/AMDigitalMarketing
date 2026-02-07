"use client";

import * as React from "react";
import type { MotionValue } from "framer-motion";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useHasMounted } from "@/lib/useHasMounted";
import { cn } from "@/lib/utils";

type ParallaxGroupProps = {
  children: React.ReactNode;
  className?: string;
};

type ParallaxLayerProps = {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  position?: "absolute" | "relative";
};

type ParallaxContextValue = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scrollY: MotionValue<number>;
  reduce: boolean;
};

const ParallaxContext = React.createContext<ParallaxContextValue | null>(null);

export function ParallaxGroup({ children, className }: ParallaxGroupProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = Boolean(useReducedMotion());
  const mounted = useHasMounted();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    if (!mounted || reduce) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width - 0.5;
      const relY = (event.clientY - rect.top) / rect.height - 0.5;
      x.set(relX * 20);
      y.set(relY * 20);
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [mounted, reduce, x, y]);

  return (
    <ParallaxContext.Provider value={{ x, y, scrollY, reduce }}>
      <div ref={ref} className={cn("relative", className)}>
        {children}
      </div>
    </ParallaxContext.Provider>
  );
}

export function ParallaxLayer({
  children,
  className,
  depth = 0.2,
  position = "absolute",
}: ParallaxLayerProps) {
  const ctx = React.useContext(ParallaxContext);
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const fallbackScroll = useMotionValue(0);

  const x = ctx?.x ?? fallbackX;
  const y = ctx?.y ?? fallbackY;
  const scrollY = ctx?.scrollY ?? fallbackScroll;
  const reduce = ctx?.reduce ?? false;

  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  const scrollShift = useTransform(scrollY, (value) => value * depth * -0.08);
  const mouseShiftX = useTransform(springX, (val) => val * depth);
  const mouseShiftY = useTransform(springY, (val) => val * depth);

  const baseClass = position === "absolute" ? "absolute inset-0" : "relative";

  return (
    <motion.div
      className={cn(baseClass, className)}
      style={{
        y: reduce ? 0 : scrollShift,
        willChange: "transform",
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          x: reduce ? 0 : mouseShiftX,
          y: reduce ? 0 : mouseShiftY,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
