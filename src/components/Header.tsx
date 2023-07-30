import dynamic from "next/dynamic"
import { currentUser } from "@clerk/nextjs"

const SignIn = dynamic(() => import("./SignIn"), { ssr: false })
const CreatePostWizard = dynamic(() => import("./CreatePostWizard"), {
  ssr: false,
})

export default async function Header() {
  const user = await currentUser()

  return (
    <div className="mt-4 w-full border-b border-slate6 pb-4">
      {user ? <CreatePostWizard /> : <SignIn />}
    </div>
  )
}
