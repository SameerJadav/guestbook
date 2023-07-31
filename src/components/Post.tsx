import type {  Author, Post } from "~/types/post";

export default function Post({ post, author }: { post: Post; author: Author }) {
  return (
    <p key={post.id}>
      <span className="text-slate11">{author.firstName}:</span> {post.content}
    </p>
  )
}
