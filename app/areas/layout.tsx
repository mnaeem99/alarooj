import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Service Areas - Sharjah and Ajman",
  description:
    "AL AROOJ TECHNICAL TRADING F.Z.E provides auto workshop equipment installation, maintenance, and repairs across Sharjah and Ajman.",
  path: "/areas",
  keywords: [
    "garage equipment services sharjah",
    "garage equipment services ajman",
    "auto workshop maintenance service areas uae",
  ],
});

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
