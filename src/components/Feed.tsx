"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type PostWithAuthor } from "~/types/post";
import Post from "~/components/Post";
import { Error, Loading } from "~/components/States";

async function fetchPosts() {
  const res = await axios.get("/api/post");
  if (!res.data) return [];
  return res.data as PostWithAuthor[];
}

export default function Feed() {
  const [ref] = useAutoAnimate();

  const { data, status } = useQuery({
    queryKey: ["post"],
    queryFn: fetchPosts,
  });

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error />;
  }

  return (
    <div className="scrollbar | mt-4 w-full flex-1 overflow-y-scroll scroll-smooth">
      <ul ref={ref} className="space-y-2">
        {data.map((entry) => (
          <Post key={entry.post.id} {...entry} />
        ))}
      </ul>
    </div>
  );
}
