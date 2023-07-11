import { siteConfig } from "~/config"
import ExternalLink from "./ExternalLink"

export default function Footer() {
  return (
    <footer className="mt-4 flex items-center justify-center gap-2 border-t border-slate6 py-4">
      <ExternalLink href={siteConfig.links.twitter}>Twitter</ExternalLink>∙
      <ExternalLink href={siteConfig.links.github}>Github</ExternalLink>∙
      <ExternalLink href={siteConfig.links.linkedin}>LinkedIn</ExternalLink>∙
      <ExternalLink href={siteConfig.links.instagram}>Instagram</ExternalLink>∙
      <ExternalLink href={siteConfig.links.mail}>Mail</ExternalLink>
    </footer>
  )
}
