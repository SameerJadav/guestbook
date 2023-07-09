import { cn } from "~/lib/utils"

interface ExternalLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

export default function ExternalLink({
  href,
  className,
  children,
}: ExternalLinkProps) {
  return (
    <a
      className={cn(
        "underline decoration-slate7 underline-offset-2 transition-colors hover:text-slate11 hover:decoration-slate8",
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  )
}
