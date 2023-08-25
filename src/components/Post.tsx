import type { Author, Post } from "~/types/post"

type PostProps = {
  post: Post
  author: Author
}

export default function Post({post, author}: PostProps) {
  return (
    <p key={post.id}>
      <span className="text-gray11">{author.firstName}:</span> {post.content}
    </p>
  )
}