import { cn } from "~/lib/utils"
import { noto } from "~/app/layout"

export default function Heading() {
  return (
    <h1
      className={cn("text-center text-6xl md:mt-6 md:text-8xl", noto.className)}
    >
      Guestbook
    </h1>
  )
}
