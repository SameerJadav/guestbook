import Icons from "~/components/Icons";
import { site } from "~/config";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t border-gray-6 py-4">
      <p>
        Built by{" "}
        <a
          className="underline decoration-gray-7 underline-offset-2 transition-colors hover:text-blue-10 hover:decoration-gray-8"
          href={site.author.web}
          rel="noopener noreferrer"
          target="_blank"
        >
          Sameer Jadav
        </a>
        .
      </p>
      <div className="flex items-center gap-4">
        <a
          className="transition-colors hover:text-blue-10"
          href={site.author.twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons.Twitter className="size-6" />
          <p className="sr-only">Twitter</p>
        </a>
        <a
          className="transition-colors hover:text-blue-10"
          href={site.author.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons.Github className="size-6" />
          <p className="sr-only">Github</p>
        </a>
      </div>
    </footer>
  );
}
