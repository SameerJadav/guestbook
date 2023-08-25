"use client"

import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { type PostWithAuthor } from "~/types/post"
import Post from "~/components/Post"
import { Error, Loading } from "~/components/States"

async function fetchPosts() {
  const res = await axios.get("/api/post")
  if (!res.data) return []
  return res.data as PostWithAuthor[]
}

export default function Feed() {
  const { data, status } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPosts,
  })

  const posts = useMemo(() => {
    if (!data) return []
    return data.map((entry) => <Post key={entry.post.id} {...entry} />)
  }, [data])

  if (status === "loading") {
    return <Loading />
  }

  if (status === "error") {
    return <Error />
  }

  return (
    <div className="scrollbar | mt-4 flex w-full flex-1 flex-col gap-2 overflow-y-scroll scroll-smooth">
      {posts}
    </div>
  )
}
