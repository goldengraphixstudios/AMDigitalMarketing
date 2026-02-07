"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ctas, serviceHighlights } from "@/lib/content";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ServiceIcon } from "@/components/ServiceIcon";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section">
      <AnimatedSection className="container-lux space-y-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Services</p>
          <h2 className="text-3xl font-semibold lg:text-4xl">
            A premium summary of what we build.
          </h2>
          <p className="max-w-2xl text-lg text-foreground/70">
            Funnels, CRM, automation, and marketing systems designed to move prospects into booked
            clients.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-card group relative h-full overflow-hidden rounded-[24px] p-6"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -6, 0],
                      transition: { duration: 6 + index, repeat: Infinity, ease: "easeInOut" },
                    }
              }
            >
              <div className="card-sweep" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-pink/15 text-brand-purple">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="relative mt-4 text-sm text-foreground/70">{service.summary}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-start">
          <Link href="/services" className="btn-primary">
            {ctas.exploreServices}
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
