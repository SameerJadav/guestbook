import { siteConfig } from "~/config"
import { Icons } from "~/components/Icons"
import ExternalLink from "./ExternalLink"

export default function Footer() {
  return (
    <footer className="mt-4 flex w-full items-center justify-between border-t border-slate6 py-4">
      <p>
        Built by{" "}
        <ExternalLink href={siteConfig.links.twitter}>
          Sameer Jadav
        </ExternalLink>
        .
      </p>
      <div className="flex items-center gap-4">
        <ExternalLink href={siteConfig.links.github}>
          <Icons.github className="h-5 w-5" />
        </ExternalLink>
        <ExternalLink href={siteConfig.links.mail}>
          <Icons.mail className="h-5 w-5" />
        </ExternalLink>
      </div>
    </footer>
  )
}
