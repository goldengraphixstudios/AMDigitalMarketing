import { AnimatedSection } from "@/components/AnimatedSection";
import { ServicesCards } from "@/components/ServicesCards";
import { ServicesCinematic } from "@/components/ServicesCinematic";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="section">
      <AnimatedSection className="container-lux space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Services</p>
        <h1 className="text-4xl font-semibold lg:text-5xl">
          Outcomes First. Deliverables Second.
        </h1>
        <p className="max-w-3xl text-lg text-foreground/70">
          We build the marketing systems that turn attention into booked clients, combining
          funnels, CRM, automation, and ongoing support.
        </p>
      </AnimatedSection>

      <AnimatedSection className="container-lux mt-10">
        <ServicesCards />
      </AnimatedSection>

      <div className="container-lux my-12">
        <div className="gradient-divider" />
      </div>

      <ServicesCinematic />
    </div>
  );
}
