import { brand } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { AnimatedSection } from "@/components/AnimatedSection";

export function Proof() {
  return (
    <section className="section">
      <AnimatedSection className="container-lux space-y-10">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Professional Profile</p>
            <h2 className="text-3xl font-semibold">{brand.name}</h2>
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
              CEO: {brand.ceo}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {brand.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-brand-purple/20 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-foreground/70"
              >
                {role}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="glass-card rounded-[28px] p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Clients we serve</p>
              <p className="text-lg text-foreground/80">
                Coaches, healthcare professionals, wellness brands, and online service providers.
              </p>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              Client logos: TODO (awaiting assets)
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
