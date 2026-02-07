import { brand, ctas } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { FreeAuditForm } from "@/components/FreeAuditForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export function LeadMagnet() {
  return (
    <section className="section">
      <AnimatedSection className="container-lux grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Lead Magnet</p>
          <h2 className="text-3xl font-semibold lg:text-4xl">{ctas.freeAudit}</h2>
          <p className="text-lg text-foreground/70">
            Receive a concise, systems-first review of your funnel, CRM, and automation
            opportunities. Built to help you identify quick wins and longer-term growth.
          </p>
          <div className="glass-card rounded-[24px] p-6 text-sm text-foreground/70">
            {brand.pricing}
          </div>
        </Reveal>
        <Reveal className="glass-card rounded-[32px] p-8">
          <FreeAuditForm />
        </Reveal>
      </AnimatedSection>
    </section>
  );
}
