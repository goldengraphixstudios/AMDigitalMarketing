import type { Metadata } from "next";
import { Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/AppShell";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Allura({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "AM Digital Marketing",
    template: "%s | AM Digital Marketing",
  },
  description:
    "CRM, funnels, automation, and digital marketing strategy for service-based businesses.",
  openGraph: {
    title: "AM Digital Marketing",
    description:
      "CRM, funnels, automation, and digital marketing strategy for service-based businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${script.variable} antialiased`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
