import type { Metadata } from "next";

/** Canonical production URL — used for sitemap, OG, and JSON-LD */
export const SITE_URL = "https://alaroojtechnical.com";

export const SITE_NAME = "AL AROOJ TECHNICAL TRADING F.Z.E";

/**
 * Social preview image. Add public/images/og-cover.jpg (1200×630) for best results,
 * then change this constant to "/images/og-cover.jpg".
 */
export const DEFAULT_OG_IMAGE = "/images/arooj_logo.jpeg";

export const INDEXNOW_KEY = "d8377f7b26ac38a65dd4e73360676b62";

export const INDEXNOW_KEY_URL = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

export const DEFAULT_DESCRIPTION =
  "Professional auto garage equipment installation, maintenance, and repair in Sharjah and Ajman, UAE. Air compressors, car lifts, paint booths, welding machines, and electrical troubleshooting.";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
};

/** Shared Open Graph + canonical metadata for inner pages */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: PageMetadataInput): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${SITE_URL}${canonicalPath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
