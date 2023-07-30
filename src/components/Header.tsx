import dynamic from "next/dynamic"
import { currentUser } from "@clerk/nextjs"
import { Skeleton } from "~/components/ui/skeleton"

const SignIn = dynamic(() => import("./SignIn"), {
  ssr: false,
  loading: () => <Skeleton className="h-8 w-52" />,
})
const CreatePostWizard = dynamic(() => import("./CreatePostWizard"), {
  ssr: false,
  loading: () => <Skeleton className="h-20 w-full" />,
})

export default async function Header() {
  const user = await currentUser()

  return (
    <div className="mt-4 w-full border-b border-slate6 pb-4">
      {user ? <CreatePostWizard /> : <SignIn />}
    </div>
  )
}
