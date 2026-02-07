import { Reveal } from "@/components/Reveal";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <div className="section">
      <AnimatedSection className="container-lux space-y-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Portfolio Projects</p>
          <h1 className="text-4xl font-semibold lg:text-5xl">Case studies coming soon.</h1>
          <p className="max-w-2xl text-lg text-foreground/70">
            The source files requested a portfolio page to be created but left blank. Add
            projects, outcomes, and visuals when ready.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <Reveal key={index} className="glass-card rounded-[28px] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                Placeholder Project {index + 1}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Portfolio details pending</h2>
              <p className="mt-3 text-sm text-foreground/70">
                Add project objectives, systems delivered, and measurable outcomes once available.
              </p>
            </Reveal>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
