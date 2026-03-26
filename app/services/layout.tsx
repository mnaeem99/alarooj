import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garage Equipment Services in UAE",
  description: "Air compressor services, car lift installation and repair, electrical and control troubleshooting, paint booth setup, and garage equipment maintenance in Sharjah and Ajman.",
  keywords: [
    "air compressor services uae",
    "car lift repair sharjah",
    "electrical control systems garage",
    "paint booth setup ajman",
    "garage equipment maintenance uae",
  ],
  openGraph: {
    title: "Garage Equipment Services UAE | AL AROOJ TECHNICAL TRADING F.Z.E",
    description: "Professional installation and repair services for auto garage equipment in Sharjah and Ajman.",
    url: "https://alaroojtechnical.ae/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


