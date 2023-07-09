import Link from "next/link"
import { LogIn } from "lucide-react"
import { cn } from "~/lib/utils"
import { buttonVariants } from "./ui/button"

export default function SignIn() {
  return (
    <Link
      href="/sign-in"
      className={cn(
        buttonVariants({
          variant: "secondary",
        }),
        "gap-2",
      )}
    >
      <LogIn size={16} />
      <span>Sign in with Google</span>
    </Link>
  )
}
