import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import {
  createPageMetadata,
  getBreadcrumbSchema,
  getContactPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact NEST Equipment Rental for equipment hire quotes in Abu Dhabi and across the UAE. Call +971 56 507 0050 or send a message for generator, lighting, and power rental support.",
  path: "/contact",
  keywords: [
    "contact NEST Equipment Rental",
    "equipment rental quote UAE",
    "generator rental quote Abu Dhabi",
    "rent generator UAE contact",
  ],
});

export default function ContactLayout({
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
            { name: "Contact", path: "/contact" },
          ]),
          getContactPageSchema(),
        ]}
      />
      {children}
    </>
  );
}
