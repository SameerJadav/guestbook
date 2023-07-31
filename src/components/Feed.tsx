"use client"

import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { For } from "million/react"
import { type PostWithAuthor } from "~/types/post"
import { PostBlock } from "~/components/Post"
import { Error, Loading } from "~/components/States"

// import Post from "~/components/Post"

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
    return (
      <For each={data}>
        {({ post, author }) => <PostBlock post={post} author={author} />}
      </For>
    )
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
