import { block } from "million/react"
import type { Author, Post } from "~/types/post"

type PostProps = {
  post: Post
  author: Author
}

const RenderPost = ({ post, author }: PostProps) => {
  return (
    <p key={post.id}>
      <span className="text-slate11">{author.firstName}:</span> {post.content}
    </p>
  )
}
export const PostBlock = block(RenderPost)
