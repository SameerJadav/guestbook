import { siteConfig } from "~/config/site"

export default function Nav() {
  return (
    <nav className="mt-6 flex items-center justify-center gap-2 border-t border-slate6 py-6">
      <a
        className="underline decoration-slate7 underline-offset-2 transition-colors hover:text-slate11 hover:decoration-slate8"
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.twitter}
      >
        Twitter
      </a>
      ∙
      <a
        className="underline decoration-slate7 underline-offset-2 transition-colors hover:text-slate11 hover:decoration-slate8"
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.github}
      >
        Github
      </a>
      ∙
      <a
        className="underline decoration-slate7 underline-offset-2 transition-colors hover:text-slate11 hover:decoration-slate8"
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.linkedin}
      >
        LinkedIn
      </a>
      ∙
      <a
        className="underline decoration-slate7 underline-offset-2 transition-colors hover:text-slate11 hover:decoration-slate8"
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.instagram}
      >
        Instagram
      </a>
      ∙
      <a
        className="underline decoration-slate7 underline-offset-2 transition-colors hover:text-slate11 hover:decoration-slate8"
        target="_blank"
        rel="noopener noreferrer"
        href={siteConfig.links.mail}
      >
        Mail
      </a>
    </nav>
  )
}
