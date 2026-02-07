"use client";

import * as React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { BackgroundMotion } from "@/components/BackgroundMotion";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        <BackgroundMotion />
        <div className="noise-overlay" />
        <div className="relative z-10">
          <Header />
          <main className="pt-12">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
