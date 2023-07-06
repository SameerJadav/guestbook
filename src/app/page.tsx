import { fetchPosts } from "~/server/posts"
import Heading from "~/components/Heading"
import Nav from "~/components/Nav"
import PostWizard from "~/components/PostWizard"

export default async function Home() {
  const data = await fetchPosts()
  return (
    <>
      <Heading />
      <PostWizard />
      <div className="mt-6 space-y-2">
        {data.map((data) => (
          <p key={data.post.id}>
            <span className="text-slate11">
              {data.author?.firstName} {data.author?.lastName}:
            </span>{" "}
            {data.post.content}
          </p>
        ))}
      </div>
      <Nav />
    </>
  )
}
