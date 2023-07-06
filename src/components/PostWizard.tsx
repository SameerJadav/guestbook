"use client"

import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import { LogIn } from "lucide-react"
import { cn } from "~/lib/utils"
import { Button, buttonVariants } from "./ui/button"

export default function PostWizard() {
  const { isSignedIn } = useUser()

  return (
    <div className="mt-6 border-b border-slate6 pb-6">
      {!isSignedIn && (
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
      )}

      {isSignedIn && (
        <div className="flex items-center gap-2 rounded-md border border-slate7 bg-slate3 p-2 transition-colors hover:border-slate8 hover:bg-slate4">
          <input
            type="text"
            name="message"
            id="message"
            className="flex-1 bg-transparent p-0 outline-none placeholder:text-slate11"
            placeholder="Your message..."
          />
          <Button size="sm">Sign</Button>
        </div>
      )}
    </div>
  )
}
