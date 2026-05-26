import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.nest-rental.ae"
).replace(/\/$/, "");

export const COMPANY = {
  name: "Nest Equipment Rental Sole Proprietorship L.L.C.",
  shortName: "NEST Equipment Rental",
  brandName: "NEST Equipment",
  email: "info@nest-rental.ae",
  phone: "+971565070050",
  phoneDisplay: "+971 56 507 0050",
  website: "www.nest-rental.ae",
  foundingDate: "2025",
  address: {
    streetAddress: "M-38, Mussafah Industrial Area",
    addressLocality: "Abu Dhabi",
    addressRegion: "Abu Dhabi",
    addressCountry: "AE",
  },
  geo: {
    latitude: 24.3130768,
    longitude: 54.51098485,
  },
  areaServed: [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "United Arab Emirates",
  ],
} as const;

export const DEFAULT_OG_IMAGE = "/images/Website Images/Home page.png";

export const DEFAULT_KEYWORDS = [
  "equipment rental UAE",
  "generator rental UAE",
  "generator rental Abu Dhabi",
  "generator rental Dubai",
  "lighting tower rental UAE",
  "power distribution rental",
  "air compressor rental UAE",
  "welding machine rental UAE",
  "construction equipment rental UAE",
  "industrial equipment rental UAE",
  "event power rental UAE",
  "silent generator rental",
  "NEST Equipment Rental",
  "nest rental",
  "equipment hire UAE",
];

export const SERVICE_OFFERINGS = [
  {
    name: "Power Generation & Generator Rental",
    description:
      "Silent diesel generators from 20 kVA to 1500 kVA for construction, industrial, and event sites across the UAE.",
    url: "/services#power",
  },
  {
    name: "Lighting Solutions & Tower Lights",
    description:
      "High-performance tower lights and industrial lighting for construction sites, facilities, and outdoor events.",
    url: "/services#lighting",
  },
  {
    name: "Power Distribution & Cabling",
    description:
      "Distribution boards, cables, load management, and safe electrical distribution for demanding project sites.",
    url: "/services#distribution",
  },
  {
    name: "Support Equipment Rental",
    description:
      "Air compressors, fuel tanks, load banks, and site support equipment for uninterrupted operations.",
    url: "/services#support",
  },
  {
    name: "Welding Machine Rental",
    description:
      "Industrial welding machines for construction, fabrication, and on-site repair across the UAE.",
    url: "/services#welding",
  },
  {
    name: "Control & Switchgear",
    description:
      "ATS panels, changeover systems, and synchronization panels for reliable power management.",
    url: "/services#control",
  },
] as const;

type PageSeoOptions = {
  title?: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  absoluteTitle?: string;
};

export function absoluteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function encodeAssetPath(path: string): string {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export function createPageMetadata(options: PageSeoOptions): Metadata {
  const { title, description, path, keywords, noIndex, absoluteTitle } =
    options;
  const pageTitle = absoluteTitle ?? title ?? COMPANY.shortName;
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(encodeAssetPath(DEFAULT_OG_IMAGE));

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: keywords ?? DEFAULT_KEYWORDS,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_AE",
      url,
      siteName: COMPANY.shortName,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${COMPANY.brandName} - Equipment Rental UAE`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    alternateName: [COMPANY.shortName, COMPANY.brandName, "NEST Rental"],
    url: SITE_URL,
    logo: absoluteUrl(
      encodeAssetPath("/images/logo/Nest Logo PNG for Black background.png")
    ),
    image: absoluteUrl(encodeAssetPath(DEFAULT_OG_IMAGE)),
    description:
      "NEST Equipment Rental provides generator rental, lighting towers, power distribution, air compressors, welding machines, and complete equipment rental solutions across the UAE.",
    email: COMPANY.email,
    telephone: COMPANY.phone,
    foundingDate: COMPANY.foundingDate,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      ...COMPANY.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    areaServed: COMPANY.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [`https://${COMPANY.website}`],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Equipment Rental Services",
      itemListElement: SERVICE_OFFERINGS.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: absoluteUrl(service.url),
          provider: {
            "@id": `${SITE_URL}/#organization`,
          },
          areaServed: "United Arab Emirates",
        },
      })),
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: COMPANY.shortName,
    alternateName: COMPANY.brandName,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-AE",
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getServicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NEST Equipment Rental Services",
    description:
      "Complete equipment rental services including generators, lighting, power distribution, and support equipment in the UAE.",
    itemListElement: SERVICE_OFFERINGS.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: absoluteUrl(service.url),
    })),
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    name: "Contact NEST Equipment Rental",
    url: absoluteUrl("/contact"),
    description:
      "Contact NEST Equipment Rental for generator hire, lighting towers, power distribution, and equipment rental quotes across the UAE.",
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
