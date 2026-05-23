import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Projects and Gallery - Workshop Installations & Repairs",
  description:
    "View project images and before/after repair examples from auto workshop equipment services in Sharjah and Ajman.",
  path: "/gallery",
  keywords: [
    "garage equipment projects uae",
    "car lift installation gallery",
    "workshop repair before after",
  ],
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
