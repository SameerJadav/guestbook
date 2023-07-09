import { currentUser } from "@clerk/nextjs"
import { fetchPosts } from "~/server/post"
import CreatePostWizard from "~/components/CreatePostWizard"
import Footer from "~/components/Footer"
import SignIn from "~/components/SignIn"

export default async function Home() {
  const entries = await fetchPosts()
  const user = await currentUser()
  return (
    <>
      <div className="sticky top-0 bg-slate1/90 backdrop-blur">
        <h1 className="text-3xl font-bold pt-6">Sign my guestbook</h1>
        <div className="mt-6 border-b border-slate6 pb-6">
          {user ? <CreatePostWizard /> : <SignIn />}
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {entries.map((entry) => (
          <p key={entry.post.id}>
            <span className="text-slate11">{entry.author.firstName}:</span>{" "}
            {entry.post.content}
          </p>
        ))}
      </div>
      <Footer />
    </>
  )
}
