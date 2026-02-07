import { ContactSection } from "@/components/ContactSection";
import { Reveal } from "@/components/Reveal";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="section">
      <AnimatedSection className="container-lux space-y-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Contact</p>
          <h1 className="text-4xl font-semibold lg:text-5xl">Start your next system.</h1>
        </Reveal>
      </AnimatedSection>
      <ContactSection />
    </div>
  );
}
