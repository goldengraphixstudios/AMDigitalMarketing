import Link from "next/link";
import { brand } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { BrandPanel } from "@/components/BrandPanel";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutPreview() {
  return (
    <section id="about" className="section">
      <AnimatedSection className="container-lux grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <BrandPanel
            title="Strategy-led systems built around your client journey."
            items={brand.websiteGoals}
            caption="Website Goals"
          />
        </Reveal>
        <Reveal className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">About</p>
          <h2 className="text-3xl font-semibold lg:text-4xl">Meet {brand.ceo}</h2>
          <p className="text-lg text-foreground/70">{brand.about}</p>
          <Link href="/about" className="btn-outline">
            Learn more
          </Link>
        </Reveal>
      </AnimatedSection>
    </section>
  );
}
