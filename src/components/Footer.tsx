"use client";

import Link from "next/link";
import { brand, contact, ctas } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/30 bg-white/70 backdrop-blur-xl">
      <div className="container-lux grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-sm uppercase tracking-[0.4em] text-foreground/70">
            {brand.name}
          </div>
          <p className="text-lg leading-relaxed text-foreground/80">{brand.slogan}</p>
          <p className="text-sm text-foreground/60">{brand.descriptor}</p>
        </div>
        <div className="space-y-3 text-sm uppercase tracking-[0.25em]">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Connect</p>
          <a href={`mailto:${contact.email}`} className="block text-foreground/80">
            {contact.email}
          </a>
          <a href={contact.linkedin} className="block text-foreground/80">
            LinkedIn
          </a>
          <a href={contact.instagram} className="block text-foreground/80">
            Instagram
          </a>
          <a href={contact.facebook} className="block text-foreground/80">
            Facebook
          </a>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">{ctas.freeAudit}</p>
        </div>
      </div>
      <div className="gradient-divider" />
      <div className="container-lux py-6 text-xs uppercase tracking-[0.3em] text-foreground/50">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
