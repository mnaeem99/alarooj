import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas - Sharjah and Ajman",
  description: "AL AROOJ TECHNICAL TRADING F.Z.E provides auto workshop equipment installation, maintenance, and repairs across Sharjah and Ajman.",
  keywords: [
    "garage equipment services sharjah",
    "garage equipment services ajman",
    "auto workshop maintenance service areas uae",
  ],
  openGraph: {
    title: "Service Areas | AL AROOJ TECHNICAL TRADING F.Z.E",
    description: "Serving auto workshops in Sharjah and Ajman with technical equipment services.",
    url: "https://alaroojtechnical.ae/areas",
    type: "website",
  },
  alternates: {
    canonical: "/areas",
  },
};

export default function AreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


