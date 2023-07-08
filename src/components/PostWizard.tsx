import Link from "next/link"
import { auth, currentUser } from "@clerk/nextjs"
import { LogIn } from "lucide-react"
import { cn } from "~/lib/utils"
import { prisma } from "~/server/db"
import { Button, buttonVariants } from "./ui/button"

export default async function PostWizard() {
  const user = await currentUser()

  async function createPost() {
    "use server"

    const { userId: authorId } = auth()
    const post = await prisma.post.create({
      data: {
        authorId,
        content: "testing of appDir",
      },
    })

    return post
  }

  return (
    <div className="mt-6 border-b border-slate6 pb-6">
      {!user && (
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

      {user && (
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          action={createPost}
          className="flex items-center gap-2 rounded-md border border-slate7 bg-slate3 p-2 transition-colors hover:border-slate8 hover:bg-slate4"
        >
          <input
            type="text"
            name="message"
            id="message"
            className="flex-1 bg-transparent p-0 outline-none placeholder:text-slate11"
            placeholder="Your message..."
          />
          <Button size="sm">Sign</Button>
        </form>
      )}
    </div>
  )
}
