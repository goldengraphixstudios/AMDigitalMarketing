"use client";

import * as React from "react";
import Link from "next/link";
import { navigation, ctas, contact } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 overflow-hidden rounded-b-3xl border-b border-white/20 bg-gradient-to-r from-brand-pink via-brand-lilac to-brand-purple shadow-xl">
      <div className="container-lux flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="text-base font-bold tracking-[0.2em]">
            <span
              className="text-xl text-white"
              style={{ fontFamily: "var(--font-script)" }}
            >
              AM
            </span>{" "}
            <span className="uppercase text-[11px] font-semibold tracking-[0.38em] text-white/95">
              Digital Marketing
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex font-semibold">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.26em] text-white/90 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="btn-outline border-white/60 bg-white/10 px-5 py-2.5 text-xs text-white hover:border-white/80 hover:text-white"
          >
            {ctas.requestQuote}
          </Link>
          <Link
            href={contact.bookingLink ?? "#"}
            className={cn(
              "btn-primary border border-white/40 px-5 py-2.5 text-xs",
              !contact.bookingLink && "cursor-not-allowed opacity-70 pointer-events-none"
            )}
            aria-disabled={!contact.bookingLink}
          >
            {ctas.bookCall}
          </Link>
        </div>

        <button
          className="lg:hidden text-[11px] uppercase tracking-[0.28em] text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="border-t border-white/30 bg-brand-pink lg:hidden">
          <div className="container-lux flex flex-col gap-4 py-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[0.28em] text-white/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-outline border-white/60 bg-white/10 text-white hover:border-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {ctas.requestQuote}
            </Link>
            <span className="text-xs uppercase tracking-[0.25em] text-white/70">
              Booking link: TODO
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
