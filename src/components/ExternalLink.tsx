import { cn } from "~/lib/utils";

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function ExternalLink({
  href,
  className,
  children,
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "underline decoration-gray7 underline-offset-2 transition-colors duration-200 ease-in hover:decoration-gray8",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}
