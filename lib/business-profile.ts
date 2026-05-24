import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";
import directoriesData from "@/data/uae-directories.json";

export type UaeDirectory = {
  id: string;
  name: string;
  priority: "high" | "medium" | "low";
  cost: "free" | "paid" | "freemium";
  signupUrl: string;
  /** Public profile URL — fill in after you create the listing */
  profileUrl: string;
  categories: string[];
  notes: string;
};

export const businessProfile = {
  legalName: SITE_NAME,
  brandName: "AL AROOJ TECHNICAL",
  website: SITE_URL,
  phone: "+971 56 486 1236",
  phoneTel: "+971564861236",
  whatsapp: "https://wa.me/971553250775",
  email: "Alaroojtradings@gmail.com",
  address: {
    locality: "Ajman",
    region: "Ajman",
    country: "United Arab Emirates",
    countryCode: "AE",
  },
  serviceAreas: ["Sharjah", "Ajman", "UAE"],
  categories: [
    "Auto repair shop",
    "Industrial equipment supplier",
    "Machine maintenance service",
    "Garage equipment supplier",
  ],
  shortDescription:
    "Garage equipment installation, maintenance & repair in Sharjah & Ajman — compressors, car lifts, paint booths, welding & electrical systems.",
  longDescription: DEFAULT_DESCRIPTION,
  hours: "Monday–Sunday, 8:00 AM – 8:00 PM",
  keywords: [
    "garage equipment UAE",
    "car lift repair Sharjah",
    "air compressor service Ajman",
    "paint booth installation UAE",
    "auto workshop maintenance",
  ],
} as const;

export const uaeDirectories = directoriesData as UaeDirectory[];

/** Directories you have already registered — shown in footer & JSON-LD sameAs */
export function getActiveDirectoryListings(): UaeDirectory[] {
  return uaeDirectories.filter((d) => d.profileUrl.trim().length > 0);
}

/** All public profile + social URLs for schema.org sameAs */
export function getSameAsUrls(): string[] {
  const urls = [
    businessProfile.whatsapp,
    ...getActiveDirectoryListings().map((d) => d.profileUrl.trim()),
  ];
  return [...new Set(urls)];
}

/** Plain-text block for pasting into directory signup forms */
export function getDirectoryPasteBlock(): string {
  const p = businessProfile;
  return [
    `Business name: ${p.legalName}`,
    `Website: ${p.website}`,
    `Phone: ${p.phone}`,
    `WhatsApp: ${p.whatsapp}`,
    `Email: ${p.email}`,
    `Location: ${p.address.locality}, ${p.address.country}`,
    `Service areas: ${p.serviceAreas.join(", ")}`,
    `Hours: ${p.hours}`,
    ``,
    `Short description:`,
    p.shortDescription,
    ``,
    `Full description:`,
    p.longDescription,
    ``,
    `Categories: ${p.categories.join("; ")}`,
    `Keywords: ${p.keywords.join(", ")}`,
  ].join("\n");
}
