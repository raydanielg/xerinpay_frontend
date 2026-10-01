import type { MetadataRoute } from "next"

import { SITE } from "@/lib/seo"

/** Only public, indexable, canonical URLs — auth and account routes excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/product", "/pricing", "/developers"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }))
}
