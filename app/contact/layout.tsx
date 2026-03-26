import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get a Quote",
  description: "Contact AL AROOJ TECHNICAL TRADING F.Z.E for garage equipment installation, maintenance, and repair in Sharjah and Ajman. Call, WhatsApp, or send an inquiry.",
  keywords: [
    "garage equipment quote sharjah",
    "car lift repair contact ajman",
    "auto workshop maintenance uae contact",
  ],
  openGraph: {
    title: "Contact AL AROOJ TECHNICAL TRADING F.Z.E",
    description: "Reach us for professional garage equipment technical services in UAE.",
    url: "https://alaroojtechnical.ae/contact",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


