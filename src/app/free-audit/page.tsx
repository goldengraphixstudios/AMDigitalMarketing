import { Reveal } from "@/components/Reveal";
import { FreeAuditForm } from "@/components/FreeAuditForm";
import { ctas } from "@/lib/content";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Free Funnel & Systems Audit",
};

export default function FreeAuditPage() {
  return (
    <div className="section">
      <AnimatedSection className="container-lux grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Free Audit</p>
          <h1 className="text-4xl font-semibold lg:text-5xl">{ctas.freeAudit}</h1>
          <p className="text-lg text-foreground/70">
            Share your website and your main challenge. We will highlight the most impactful
            improvements across funnels, CRM, and automation.
          </p>
        </Reveal>
        <Reveal className="glass-card rounded-[32px] p-8">
          <FreeAuditForm />
        </Reveal>
      </AnimatedSection>
    </div>
  );
}
