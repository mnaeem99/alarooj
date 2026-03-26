import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - UAE Garage Equipment Experts",
  description: "Learn about AL AROOJ TECHNICAL TRADING F.Z.E, a UAE-licensed company specializing in garage equipment installation, maintenance, and repair services.",
  keywords: [
    "about al arooj technical trading",
    "garage equipment experts uae",
    "licensed technical trading company ajman",
  ],
  openGraph: {
    title: "About AL AROOJ TECHNICAL TRADING F.Z.E",
    description: "Trusted technical partner for auto workshops in Sharjah and Ajman.",
    url: "https://alaroojtechnical.ae/why-us",
    type: "website",
  },
  alternates: {
    canonical: "/why-us",
  },
};

export default function WhyUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


