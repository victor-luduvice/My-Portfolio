/** Gera as regras de rastreamento dos mecanismos de busca. */
import type { MetadataRoute } from "next";
import { siteContent } from "@/data/content";

export const dynamic = "force-static";

/** Permite indexar o site e informa onde encontrar o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteContent.siteUrl}/sitemap.xml` };
}
