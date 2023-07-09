import { currentUser } from "@clerk/nextjs"
import CreatePostWizard from "~/components/CreatePostWizard"
import Feed from "~/components/Feed"
import Footer from "~/components/Footer"
import SignIn from "~/components/SignIn"

export default async function Home() {
  const user = await currentUser()
  return (
    <>
      <div className="sticky top-0 bg-slate1/90 backdrop-blur">
        <h1 className="text-3xl font-bold pt-6">Sign my guestbook</h1>
        <div className="mt-6 border-b border-slate6 pb-6">
          {user ? <CreatePostWizard /> : <SignIn />}
        </div>
      </div>
      <Feed />
      <Footer />
    </>
  )
}
