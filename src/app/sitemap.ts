import type { MetadataRoute } from "next";
import { siteContent } from "@/data/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteContent.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
