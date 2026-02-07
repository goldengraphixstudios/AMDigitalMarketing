import { brand } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { BrandPanel } from "@/components/BrandPanel";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="section">
      <AnimatedSection className="container-lux grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <BrandPanel
            title="Leadership grounded in automation, funnels, and CRM strategy."
            items={brand.roles}
            caption="Founder Roles"
          />
        </Reveal>
        <Reveal className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">About</p>
          <h1 className="text-4xl font-semibold lg:text-5xl">{brand.ceo}</h1>
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/60">
            CEO · {brand.name}
          </p>
          <p className="text-lg text-foreground/70">{brand.about}</p>
          <div className="glass-card rounded-[24px] p-6 text-sm text-foreground/70">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Website Goals</p>
            <ul className="mt-3 space-y-2">
              {brand.websiteGoals.map((goal) => (
                <li key={goal} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-pink" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </AnimatedSection>
    </div>
  );
}
