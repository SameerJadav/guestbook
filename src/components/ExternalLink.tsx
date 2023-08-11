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
        "decoration-gray7 hover:text-gray11 hover:decoration-gray8 underline underline-offset-2 transition-colors",
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
