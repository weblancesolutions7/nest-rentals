import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getServicesPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Equipment Rental Services",
  description:
    "Explore NEST Equipment Rental services: generator hire (20–1500 kVA), lighting towers, power distribution, cabling, air compressors, welding machines, fuel tanks, and load banks across the UAE.",
  path: "/services",
  keywords: [
    "generator rental services UAE",
    "lighting tower rental",
    "power distribution rental",
    "air compressor rental Abu Dhabi",
    "welding machine rental UAE",
    "load bank rental",
    "diesel generator hire",
  ],
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          getServicesPageSchema(),
        ]}
      />
      {children}
    </>
  );
}
