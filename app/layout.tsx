import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  DEFAULT_DESCRIPTION,
} from "@/lib/seo";
import { getSameAsUrls } from "@/lib/business-profile";

const inter = Inter({ subsets: ["latin"] });

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Auto Garage Equipment Services UAE`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "auto garage equipment maintenance uae",
    "car lift installation sharjah",
    "air compressor repair ajman",
    "garage electrical troubleshooting uae",
    "paint booth installation ajman",
    "welding machine repair sharjah",
    "garage equipment maintenance sharjah",
    "auto workshop technical services ajman",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Auto Garage Equipment Services",
  classification: "Business",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} - Auto Garage Equipment Services UAE`,
    description:
      "Installation, maintenance, and repair for garage equipment in Sharjah and Ajman. Air compressors, car lifts, paint booths, and control systems.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - UAE garage equipment services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Garage Equipment Experts`,
    description:
      "Professional garage equipment installation and repair services in Sharjah and Ajman.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification
      ? { other: { "msvalidate.01": bingVerification } }
      : {}),
  },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Ajman, Sharjah, UAE",
    "geo.position": "25.4052;55.5136",
    ICBM: "25.4052, 55.5136",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a2540" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2540" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: `${SITE_URL}/images/arooj_logo.jpeg`,
    url: SITE_URL,
    telephone: "+971564861236",
    email: "Alaroojtradings@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ajman",
      addressRegion: "Ajman",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.4052,
      longitude: 55.5136,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Ajman" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Equipment Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Air Compressor Services",
            description: "Air compressor installation and repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Car Lift Installation & Repair",
            description: "Car lift setup, maintenance, and fault fixing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical & Control Systems",
            description: "Electrical troubleshooting for auto workshops",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paint Booth Setup",
            description: "Paint booth installation and system checks",
          },
        },
      ],
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/arooj_logo.jpeg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971564861236",
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: getSameAsUrls(),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AE",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en-AE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={[localBusiness, organization, website]} />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
