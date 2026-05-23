import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Garage Equipment Services in UAE",
  description:
    "Air compressor services, car lift installation and repair, electrical and control troubleshooting, paint booth setup, and garage equipment maintenance in Sharjah and Ajman.",
  path: "/services",
  keywords: [
    "air compressor services uae",
    "car lift repair sharjah",
    "electrical control systems garage",
    "paint booth setup ajman",
    "garage equipment maintenance uae",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


