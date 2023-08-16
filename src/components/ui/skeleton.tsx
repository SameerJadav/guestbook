import { cn } from "~/lib/utils"

export default function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-md bg-gray3 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:border-y before:border-gray6 before:bg-gradient-to-r before:from-transparent before:via-gray5 before:to-transparent",
        className,
      )}
      {...props}
    />
  )
}
