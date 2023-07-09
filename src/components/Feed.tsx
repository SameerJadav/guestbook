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
    queryFn: async () => {
      const res = await axios.get("/api/post")
      if (!res.data) throw new Error("No data")
      return res.data as PostWithAuthor[]
    },
  })

  if (isLoading) {
    return (
      <div className="mt-6 space-y-2">
        <p>loading...</p>
      </div>
    )
  }
  if (isError) return <div>Error</div>

  return (
    <div className="mt-6 space-y-2">
      {data.map((entry) => (
        <p key={entry.post.id}>
          <span className="text-slate11">{entry.author.firstName}:</span>{" "}
          {entry.post.content}
        </p>
      ))}
    </div>
  )
}
