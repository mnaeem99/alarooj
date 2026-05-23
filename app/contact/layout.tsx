import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us - Get a Quote",
  description:
    "Contact AL AROOJ TECHNICAL TRADING F.Z.E for garage equipment installation, maintenance, and repair in Sharjah and Ajman. Call, WhatsApp, or send an inquiry.",
  path: "/contact",
  keywords: [
    "garage equipment quote sharjah",
    "car lift repair contact ajman",
    "auto workshop maintenance uae contact",
  ],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


