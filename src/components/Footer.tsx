import { SITE } from "~/config";
import { Icons } from "~/components/Icons";
import ExternalLink from "./ExternalLink";

export default function Footer() {
  return (
    <footer className="mt-4 flex w-full items-center justify-between border-t border-gray6 py-4">
      <p>
        Built by{" "}
        <ExternalLink href={SITE.links.twitter}>Sameer Jadav</ExternalLink>.
      </p>
      <div className="flex items-center gap-4">
        <ExternalLink href={SITE.links.github}>
          <Icons.github className="h-5 w-5" />
          <p className="sr-only">Github</p>
        </ExternalLink>
        <ExternalLink href={SITE.links.mail}>
          <Icons.mail className="h-5 w-5" />
          <p className="sr-only">Mail</p>
        </ExternalLink>
      </div>
    </footer>
  );
}
