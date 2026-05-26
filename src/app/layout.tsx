import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import {
  COMPANY,
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  encodeAssetPath,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/seo";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const defaultDescription =
  "NEST Equipment Rental offers generator rental, lighting towers, power distribution, air compressors, and welding machines across Abu Dhabi, Dubai, and the UAE. 24/7 technical support.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Generator & Equipment Rental UAE | NEST Equipment Rental Abu Dhabi",
    template: "%s | NEST Equipment Rental",
  },
  description: defaultDescription,
  keywords: DEFAULT_KEYWORDS,
  applicationName: COMPANY.shortName,
  authors: [{ name: COMPANY.name, url: SITE_URL }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  category: "Equipment Rental",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-AE": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: COMPANY.shortName,
    title:
      "Generator & Equipment Rental UAE | NEST Equipment Rental Abu Dhabi",
    description: defaultDescription,
    images: [
      {
        url: absoluteUrl(encodeAssetPath(DEFAULT_OG_IMAGE)),
        width: 1200,
        height: 630,
        alt: `${COMPANY.brandName} - Equipment Rental UAE`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Generator & Equipment Rental UAE | NEST Equipment Rental Abu Dhabi",
    description: defaultDescription,
    images: [absoluteUrl(encodeAssetPath(DEFAULT_OG_IMAGE))],
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
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        <ScrollToTop />
        <PageLoader />
        <Header />
        <main style={{ flex: 1, minHeight: "80vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

