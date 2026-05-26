import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industries We Serve",
  description:
    "Equipment rental solutions for construction, oil & gas, industrial manufacturing, marine, emergency projects, and large scale exhibitions across Abu Dhabi, Dubai, and the UAE.",
  path: "/industries",
  keywords: [
    "construction equipment rental UAE",
    "oil and gas equipment rental",
    "industrial equipment rental",
    "marine equipment rental UAE",
    "event equipment rental UAE",
    "emergency generator rental",
  ],
});

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />
      {children}
    </>
  );
}
