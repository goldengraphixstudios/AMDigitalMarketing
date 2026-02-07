import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { LeadMagnet } from "@/components/LeadMagnet";
import { AboutPreview } from "@/components/AboutPreview";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Proof />
      <Services />
      <Process />
      <LeadMagnet />
      <AboutPreview />
      <ContactSection />
    </div>
  );
}
