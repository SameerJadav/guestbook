import { cn } from "~/lib/utils"
import PostWizard from "~/components/post-wizard"
import { noto } from "./layout"

export default function Home() {
  return (
    <div>
      <h1
        className={cn(
          "text-center text-6xl md:mt-6 md:text-8xl",
          noto.className
        )}
      >
        Guestbook
      </h1>

      <div className="mt-6 border-b border-slate6 pb-6">
        <PostWizard />
      </div>
    </div>
  )
}
