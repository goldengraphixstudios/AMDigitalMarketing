"use client";

import * as React from "react";
import { servicesProcessSteps } from "@/lib/content";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ServicesCinematic() {
  const reduce = useReducedMotion();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (reduce) return;
    const section = sectionRef.current;
    if (!section) return;

    const steps = section.querySelectorAll(".cinematic-step");
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.set(steps, { opacity: 0.3, y: 40, scale: 0.96 });

      gsap.to(steps, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top top+=120",
          end: "+=600",
          scrub: true,
          pin: section.querySelector(".cinematic-pin"),
          pinSpacing: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, [reduce]);

  return (
    <section className="section">
      <div ref={sectionRef} className="container-lux space-y-10">
        <div className="cinematic-pin space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
            How We Build Scalable Marketing Systems
          </p>
          <h2 className="text-3xl font-semibold lg:text-4xl">
            Systems that scale with clarity and control.
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            A cinematic build process designed to align your goals, automate follow-ups, and keep
            every inquiry moving forward.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {servicesProcessSteps.map((step, index) => (
            <div
              key={step.title}
              className="cinematic-step glass-card rounded-[24px] p-6"
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
    </section>
  );
}
