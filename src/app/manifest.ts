import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.shortName,
    short_name: "NEST",
    description:
      "Generator and equipment rental solutions across the UAE including power generation, lighting towers, and site support equipment.",
    start_url: "/",
    display: "standalone",
    background_color: "#06070a",
    theme_color: "#cf0022",
    lang: "en-AE",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
