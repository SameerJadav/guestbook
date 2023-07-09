import { clerkClient } from "@clerk/nextjs"
import { type User } from "@clerk/nextjs/dist/types/server"
import { prisma } from "~/server/db"

// Filter user data for the client
const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    firstName: user.firstName,
  }
}

export async function fetchPosts() {
  try {
    const posts = await prisma.post.findMany({
      take: 100,
      orderBy: {
        createdAt: "desc",
      },
    })

    // Extract author IDs from the posts
    const authorId = posts.map((post) => post.authorId)

    // Fetch user data concurrently
    const usersPromise = clerkClient.users.getUserList({
      userId: authorId,
      limit: 100,
    })

    // Retrieve user data
    const users = await usersPromise

    // Filter and format user data for the client
    const authors = users.map(filterUserForClient)

    // Combine each post with its respective author
    const postsWithAuthors = posts.map((post) => {
      const author = authors.find((author) => author.id === post.authorId)

      if (!author) throw new Error(`Author not found for post ${post.id}`)

      return {
        post,
        author,
      }
    })

    return postsWithAuthors
  } catch (error) {
    // Handle error
    console.error("An error occurred while fetching posts and authors:", error)
    throw error
  }
}
