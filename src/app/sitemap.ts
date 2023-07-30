import { type MetadataRoute } from "next"
import { SITE } from "~/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ]
}
