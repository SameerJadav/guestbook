import Link from "next/link"
import { LogIn } from "lucide-react"
import { cn } from "~/lib/utils"
import { buttonVariants } from "~/components/ui/button"
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
        <Link
          href="/sign-in"
          className={cn(
            buttonVariants({
              variant: "secondary",
            }),
            "gap-2"
          )}
        >
          <LogIn size={16} />
          <span>Sign in with Google</span>
        </Link>
      </div>
    </div>
  )
}
