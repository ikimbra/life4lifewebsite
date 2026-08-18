import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /* Legal drafts are noindex at the page level too; excluded here so they
         never surface as thin results while awaiting client review. */
      disallow: ["/privacy", "/terms"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
