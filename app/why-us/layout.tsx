import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us - UAE Garage Equipment Experts",
  description:
    "Learn about AL AROOJ TECHNICAL TRADING F.Z.E, a UAE-licensed company specializing in garage equipment installation, maintenance, and repair services.",
  path: "/why-us",
  keywords: [
    "about al arooj technical trading",
    "garage equipment experts uae",
    "licensed technical trading company ajman",
  ],
});

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
