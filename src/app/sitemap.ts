import { type MetadataRoute } from "next"
import { siteConfig } from "~/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ]
}
