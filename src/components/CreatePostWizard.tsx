import { auth } from "@clerk/nextjs"
import { prisma } from "~/server/db"
import { Button } from "./ui/button"

export default function CreatePostWizard() {
  async function createPost() {
    "use server"

    const { userId } = auth()

    if (!userId) throw new Error("User ID not found")

    const post = await prisma.post.create({
      data: {
        authorId: userId,
        content: "testing of appDir",
      },
    })

    return post
  }

  return (
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
  )
}
