"use client";

import * as React from "react";
import { processSteps } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Process() {
  const reduce = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduce) return;
    const el = containerRef.current;
    if (!el) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const cards = el.querySelectorAll(".process-card");
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            end: "bottom 20%",
            scrub: false,
          },
        }
      );

      ScrollTrigger.create({
        trigger: el,
        start: "top top+=120",
        end: "bottom+=200 top",
        pin: el.querySelector(".process-pin"),
        pinSpacing: true,
      });
    });

    return () => {
      mm.revert();
    };
  }, [reduce]);

  return (
    <section id="systems" className="section">
      <AnimatedSection>
        <div ref={containerRef} className="container-lux space-y-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Systems That Convert</p>
          <h2 className="text-3xl font-semibold lg:text-4xl">
            A process built for clarity, automation, and growth.
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="process-pin space-y-6 rounded-[28px] border border-white/60 bg-white/70 p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">What we deliver</p>
            <ul className="space-y-4 text-lg text-foreground/80">
              <li>Lead generation funnels that attract the right prospects.</li>
              <li>CRM workflows that track, segment, and nurture every inquiry.</li>
              <li>Automations that keep your team focused on high-value work.</li>
              <li>Ongoing optimization to keep systems aligned with growth.</li>
            </ul>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="process-card glass-card rounded-[24px] p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
