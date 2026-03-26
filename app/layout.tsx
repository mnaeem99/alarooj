import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AL AROOJ TECHNICAL TRADING F.Z.E | Auto Garage Equipment Services UAE",
    template: "%s | AL AROOJ TECHNICAL TRADING F.Z.E",
  },
  description: "Professional auto garage equipment installation, maintenance, and repair services in Sharjah and Ajman, UAE. Air compressors, car lifts, paint booths, welding machines, washer pumps, vacuum machines, and electrical control troubleshooting.",
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
  authors: [{ name: "AL AROOJ TECHNICAL TRADING F.Z.E", url: "https://alaroojtechnical.ae" }],
  creator: "AL AROOJ TECHNICAL TRADING F.Z.E",
  publisher: "AL AROOJ TECHNICAL TRADING F.Z.E",
  category: "Auto Garage Equipment Services",
  classification: "Business",
  applicationName: "AL AROOJ TECHNICAL TRADING F.Z.E",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a2540" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2540" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/images/ahlam_logo.png", type: "image/png" },
      { url: "/images/ahlam_logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/ahlam_logo.png", type: "image/png" },
    ],
    shortcut: "/images/ahlam_logo.png",
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://alaroojtechnical.ae"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://alaroojtechnical.ae",
      "ar-AE": "https://alaroojtechnical.ae/ar",
    },
  },
  openGraph: {
    title: "AL AROOJ TECHNICAL TRADING F.Z.E - Auto Garage Equipment Services UAE",
    description: "Installation, maintenance, and repair for garage equipment in Sharjah and Ajman. Air compressors, car lifts, paint booths, and control systems.",
    url: "https://alaroojtechnical.ae",
    siteName: "AL AROOJ TECHNICAL TRADING F.Z.E",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ahlam_logo.png",
        width: 1200,
        height: 630,
        alt: "AL AROOJ TECHNICAL TRADING F.Z.E - UAE garage equipment services",
      },
      {
        url: "/images/ahlam_banner.png",
        width: 1200,
        height: 630,
        alt: "AL AROOJ TECHNICAL TRADING F.Z.E",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL AROOJ TECHNICAL TRADING F.Z.E - Garage Equipment Experts",
    description: "Professional garage equipment installation and repair services in Sharjah and Ajman.",
    images: ["/images/ahlam_logo.png"],
    creator: "@alaroojtechnical",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Ajman Free Zone",
    "geo.position": "25.4052;55.5136",
    "ICBM": "25.4052, 55.5136",
    "contact": "+971500000000",
    "email": "info@alaroojtechnical.ae",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AL AROOJ TECHNICAL TRADING F.Z.E",
    "image": "https://alaroojtechnical.ae/images/ahlam_logo.png",
    "@id": "https://alaroojtechnical.ae",
    "url": "https://alaroojtechnical.ae",
    "telephone": "+971500000000",
    "email": "info@alaroojtechnical.ae",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ajman",
      "addressRegion": "Ajman",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.4052,
      "longitude": 55.5136
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "priceRange": "$$",
    "serviceArea": { "@type": "AdministrativeArea", "name": "Sharjah & Ajman" },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Garage Equipment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Air Compressor Services",
            "description": "Air compressor installation and repair services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Lift Installation & Repair",
            "description": "Car lift setup, maintenance, and fault fixing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Electrical & Control Systems",
            "description": "Electrical troubleshooting for auto workshops"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Paint Booth Setup",
            "description": "Paint booth installation and system checks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Garage Equipment Maintenance",
            "description": "Maintenance and repairs for workshop equipment"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "50"
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AL AROOJ TECHNICAL TRADING F.Z.E",
    "url": "https://alaroojtechnical.ae",
    "logo": "https://alaroojtechnical.ae/images/ahlam_logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971500000000",
      "contactType": "Customer Service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    "sameAs": [
      "https://wa.me/971500000000"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

