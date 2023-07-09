import { NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs"
import { type User } from "@clerk/nextjs/dist/types/server"
import { prisma } from "~/server/db"

/**
 * This code fetches the latest 100 posts from a database and combines each post with its respective author.
 * It does this by first retrieving the author IDs from the posts, then fetching the user data for those IDs.
 * It then filters and formats the user data for the client and combines each post with its respective author.
 * Finally, it returns a JSON response containing the posts with their respective authors.
 */

const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    firstName: user.firstName,
  }
}

export const revalidate = 0

export async function GET() {
  const posts = await prisma.post.findMany({
    take: 100,
    orderBy: {
      createdAt: "desc",
    },
  })

  const authorId = posts.map((post) => post.authorId)

  const usersPromise = clerkClient.users.getUserList({
    userId: authorId,
    limit: 100,
  })

  const users = await usersPromise

  const authors = users.map(filterUserForClient)

  const postsWithAuthors = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/require-await
    posts.map(async (post) => {
      const author = authors.find((author) => author.id === post.authorId)

      if (!author) throw new Error(`Author not found for post ${post.id}`)

      return {
        post,
        author,
      }
    }),
  )

  return NextResponse.json(postsWithAuthors)
}
