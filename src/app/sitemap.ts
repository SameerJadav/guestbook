import { siteConfig } from "~/config/site"

export default async function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString().split("T")[0],
    },
  ]
}
