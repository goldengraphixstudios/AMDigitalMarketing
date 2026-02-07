"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const baseStyles =
  "relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-xs uppercase tracking-[0.3em] transition-all duration-300";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
};

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
}: MagneticButtonProps) {
  const reduce = useReducedMotion();

  const content = (
    <span
      className={cn(
        baseStyles,
        "group border border-transparent",
        variant === "primary"
          ? "text-white"
          : "text-brand-purple border-brand-purple/40",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          variant === "primary"
            ? "bg-gradient-to-r from-brand-pink via-brand-lilac to-brand-purple"
            : "bg-gradient-to-r from-brand-pink/20 via-brand-lilac/30 to-brand-purple/30"
        )}
      />
      <span
        className={cn(
          "absolute inset-[1px] rounded-full",
          variant === "primary" ? "bg-[#160b16]" : "bg-white/80"
        )}
      />
      <motion.span
        className={cn(
          "absolute inset-0 rounded-full",
          variant === "primary" && "bg-brand-pink/15"
        )}
        animate={
          reduce || variant !== "primary"
            ? undefined
            : { opacity: [0.2, 0.6, 0.2] }
        }
        transition={{ duration: 6, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
      />
      <span className="absolute inset-0 rounded-full shadow-[inset_0_0_22px_rgba(255,255,255,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[220%] group-hover:opacity-70" />
      <span className="relative z-10">{children}</span>
    </span>
  );

  return (
    <motion.div
      className="inline-flex"
      initial={reduce ? undefined : { opacity: 0, y: 10, scale: 0.97 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={
        reduce
          ? undefined
          : {
              scale: 1.04,
              boxShadow:
                variant === "primary"
                  ? "0 16px 38px rgba(255, 48, 109, 0.25)"
                  : "0 12px 30px rgba(198, 140, 220, 0.22)",
            }
      }
    >
      {href ? (
        <Link href={href} aria-label={typeof children === "string" ? children : undefined}>
          {content}
        </Link>
      ) : (
        <button type="button">{content}</button>
      )}
    </motion.div>
  );
}
