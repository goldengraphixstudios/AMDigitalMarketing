"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { brand, ctas, contact, serviceHighlights } from "@/lib/content";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GradientBlobs } from "@/components/animated/GradientBlobs";
import { WaveRibbon } from "@/components/animated/WaveRibbon";
import { ParallaxGroup, ParallaxLayer } from "@/components/animated/ParallaxGroup";
import { MagneticButton } from "@/components/animated/MagneticButton";
import { LightSweepText } from "@/components/animated/LightSweepText";
import { ServiceIcon } from "@/components/ServiceIcon";
import { cn } from "@/lib/utils";

function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <motion.div
        className="absolute -top-6 right-6 h-32 w-32 rounded-full bg-gradient-to-br from-brand-pink/30 via-brand-lilac/25 to-transparent"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glass-card relative overflow-hidden rounded-[28px] p-6"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -6, 0],
                transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }
        }
      >
        <div className="card-sweep" />
        <div className="relative space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            Signature Systems
          </p>
          <div className="grid gap-4">
            {serviceHighlights.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-3"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-pink/15 text-brand-purple">
                  <ServiceIcon name={service.icon} className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{service.title}</p>
                  <p className="text-xs text-foreground/60">{service.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute -bottom-10 left-4 h-28 w-28 rounded-full bg-gradient-to-br from-brand-blush/50 via-transparent to-transparent"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HeroCinematic() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden pb-6 pt-10">
      <ParallaxGroup className="relative min-h-full">
        <ParallaxLayer depth={0.12} className="absolute inset-0 z-0">
          <div className="hero-mesh" />
          <GradientBlobs />
        </ParallaxLayer>
        <ParallaxLayer depth={0.2} className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
          <WaveRibbon className="opacity-45" />
        </ParallaxLayer>
        <ParallaxLayer depth={0.35} position="relative" className="relative z-10">
          <div className="container-lux grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection className="text-xs uppercase tracking-[0.4em] text-foreground/60">
                {brand.descriptor}
              </AnimatedSection>
              <h1 className="text-4xl font-semibold leading-tight lg:text-5xl xl:text-6xl">
                <LightSweepText text={brand.heroHeadline} />
              </h1>
              <AnimatedSection className="text-base leading-relaxed text-foreground/70">
                {brand.heroSubheadline}
              </AnimatedSection>
              <AnimatedSection className="flex flex-wrap items-center gap-4">
                <MagneticButton href="/contact" variant="primary">
                  {ctas.requestQuote}
                </MagneticButton>
                <MagneticButton href="/services" variant="outline">
                  {ctas.exploreServices}
                </MagneticButton>
                <Link
                  href={contact.bookingLink ?? "#"}
                  className={cn(
                    "btn-outline",
                    !contact.bookingLink && "cursor-not-allowed opacity-70 pointer-events-none"
                  )}
                  aria-disabled={!contact.bookingLink}
                >
                  {ctas.bookCall}
                </Link>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </ParallaxLayer>
      </ParallaxGroup>
    </section>
  );
}
