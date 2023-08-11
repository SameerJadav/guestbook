import dynamic from "next/dynamic"
import { currentUser } from "@clerk/nextjs"
import { Skeleton } from "~/components/ui/skeleton"

const SignIn = dynamic(() => import("./SignIn"), {
  ssr: false,
  loading: () => <Skeleton className="h-[38px] w-[202.641px]" />,
})

const CreatePostWizard = dynamic(() => import("./CreatePostWizard"), {
  ssr: false,
  loading: () => (
    <>
      <Skeleton className="h-[46px] w-full" />
      <Skeleton className="mt-2 h-5 w-[55.172px]" />
    </>
  ),
})

export default async function Header() {
  const user = await currentUser()

  return (
    <div>
      <h1 className="w-full pt-6 text-start text-3xl font-bold">
        Sign my guestbook
      </h1>
      <div className="border-gray6 mt-4 w-full border-b pb-4">
        {user ? <CreatePostWizard /> : <SignIn />}
      </div>
    </div>
  )
}
