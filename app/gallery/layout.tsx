import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects and Gallery - Workshop Installations & Repairs",
  description: "View project images and before/after repair examples from auto workshop equipment services in Sharjah and Ajman.",
  keywords: [
    "garage equipment projects uae",
    "car lift installation gallery",
    "workshop repair before after",
  ],
  openGraph: {
    title: "AL AROOJ TECHNICAL TRADING F.Z.E Projects Gallery",
    description: "Explore workshop equipment installation and maintenance work in UAE.",
    url: "https://alaroojtechnical.ae/gallery",
    type: "website",
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


