import { NextResponse } from "next/server"
import { auth, clerkClient } from "@clerk/nextjs"
import { prisma } from "~/server/db"

export async function GET() {
  const postsPromise = prisma.post.findMany({
    take: 100,
    orderBy: {
      createdAt: "desc",
    },
  })

  const usersPromise = clerkClient.users.getUserList({
    userId: (await postsPromise).map((post) => post.authorId),
    limit: 100,
  })

  const [postsResult, usersResult] = await Promise.allSettled([
    postsPromise,
    usersPromise,
  ])

  const posts = postsResult.status === "fulfilled" ? postsResult.value : []
  const users = usersResult.status === "fulfilled" ? usersResult.value : []

  const authors = users.map((user) => {
    return {
      id: user.id,
      firstName: user.firstName,
    }
  })

  const postsWithAuthors = posts.map((post) => {
    const author = authors.find((author) => author.id === post.authorId)

    if (!author) throw new Error(`Author not found for post ${post.id}`)

    return {
      post,
      author,
    }
  })

  return NextResponse.json(postsWithAuthors)
}

export async function POST(req: Request) {
  const { userId: authorId } = auth()

  if (!authorId) throw new Error("User ID not found")

  const { content } = (await req.json()) as { content: string }

  const post = await prisma.post.create({
    data: {
      authorId,
      content,
    },
  })

  return NextResponse.json(post)
}
