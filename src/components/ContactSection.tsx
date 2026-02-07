import Link from "next/link";
import { contact, ctas } from "@/lib/content";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const contactCards = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    primary: true,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amdigitalsolutions",
    href: contact.linkedin,
    icon: Linkedin,
    primary: false,
    external: true,
  },
  {
    label: "Instagram",
    value: "@angelynfunnels",
    href: contact.instagram,
    icon: Instagram,
    primary: false,
    external: true,
  },
  {
    label: "Facebook",
    value: "AM Digital Marketing",
    href: contact.facebook,
    icon: Facebook,
    primary: false,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <AnimatedSection className="container-lux grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-card rounded-[32px] p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Request a Quote</p>
          <h2 className="mt-3 text-3xl font-semibold">{ctas.requestQuote}</h2>
          <p className="mt-4 text-sm text-foreground/70">
            Tell us about your goals, the services you need, and the systems you want to automate.
          </p>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </Reveal>

        <Reveal className="space-y-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Contact</p>
            <div className="space-y-3">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group relative flex items-center justify-between rounded-2xl border border-white/60 bg-white/80 px-5 py-4 transition-all duration-300",
                      "hover:-translate-y-1 hover:border-brand-pink/40 hover:shadow-[0_18px_50px_rgba(255,48,109,0.15)]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink/50",
                      item.primary &&
                        "border-brand-pink/40 bg-gradient-to-r from-white/90 via-white/80 to-brand-blush/30"
                    )}
                  >
                    <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-pink/10 via-brand-lilac/10 to-transparent" />
                    </span>
                    <span className="relative flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full text-brand-purple transition-colors duration-300",
                          item.primary
                            ? "bg-gradient-to-br from-brand-pink/30 via-brand-lilac/20 to-white"
                            : "bg-brand-pink/10",
                          "group-hover:bg-brand-pink/20"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-[11px] uppercase tracking-[0.3em] text-foreground/55">
                          {item.label}
                        </span>
                        <span
                          className={cn(
                            "block text-sm text-foreground",
                            item.primary && "text-base font-semibold"
                          )}
                        >
                          {item.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="relative h-5 w-5 text-foreground/40 transition-colors duration-300 group-hover:text-foreground/80" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Book a Call</p>
            <p className="mt-3 text-sm text-foreground/70">
              Booking link not provided in source files.
            </p>
            <button className="btn-outline mt-4 cursor-not-allowed opacity-70" disabled>
              {ctas.bookCall} (TODO)
            </button>
          </div>

          <div className="glass-card rounded-[28px] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Free Audit</p>
            <p className="mt-3 text-sm text-foreground/70">
              Prefer a lightweight start? Grab the free audit.
            </p>
            <Link href="/free-audit" className="btn-primary mt-4 inline-flex">
              {ctas.freeAudit}
            </Link>
          </div>
        </Reveal>
      </AnimatedSection>
    </section>
  );
}
