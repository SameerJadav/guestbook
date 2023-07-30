import { type MetadataRoute } from "next"
import { SITE } from "~/config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
