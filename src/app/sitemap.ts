/** Gera a lista de páginas públicas que os mecanismos de busca podem indexar. */
import type { MetadataRoute } from "next";
import { siteContent } from "@/data/content";

export const dynamic = "force-static";

/** O portfólio é uma página única, então o sitemap contém apenas a raiz. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteContent.siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
