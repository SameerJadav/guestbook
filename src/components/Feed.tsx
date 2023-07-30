"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Post {
  id: string
  createdAt: string
  content: string
  authorId: string
}

interface Author {
  id: string
  firstName: string
}

interface PostWithAuthor {
  post: Post
  author: Author
}

export default function Feed() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axios.get("/api/post")
      if (!res.data) throw new Error("No data")
      return res.data as PostWithAuthor[]
    },
  })

  if (isLoading) {
    return (
      <div className="mt-4 w-full text-start">
        <p>Just a sec, summoning the memories...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="mt-4 w-full text-start">
        <p>Stories took a detour, we&apos;re on the lookout...</p>
      </div>
    )
  }

  return (
    <div className="scrollbar | mt-4 flex-1 space-y-2 overflow-y-scroll scroll-smooth">
      {data.map((entry) => (
        <p key={entry.post.id}>
          <span className="text-slate11">{entry.author.firstName}:</span>{" "}
          {entry.post.content}
        </p>
      ))}
    </div>
  )
}
