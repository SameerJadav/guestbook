import { currentUser } from "@clerk/nextjs"
import CreatePostWizard from "~/components/CreatePostWizard"
import Feed from "~/components/Feed"
import Footer from "~/components/Footer"
import SignIn from "~/components/SignIn"

export default async function Home() {
  const user = await currentUser()
  return (
    <>
      <h1 className="text-3xl font-bold pt-6">Sign my guestbook</h1>
      <div className="mt-4 border-b border-slate6 pb-4">
        {user ? <CreatePostWizard /> : <SignIn />}
      </div>
      <Feed />
      <Footer />
    </>
  )
}
