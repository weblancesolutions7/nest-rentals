import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about NEST Equipment Rental — an Abu Dhabi based equipment rental company supplying generators, lighting towers, and power solutions to construction, oil & gas, industrial, and event sectors across the UAE.",
  path: "/about",
  keywords: [
    "about NEST Equipment Rental",
    "equipment rental company Abu Dhabi",
    "generator rental company UAE",
    "power rental company UAE",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
