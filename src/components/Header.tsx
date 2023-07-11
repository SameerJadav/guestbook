"use client"

import { useUser } from "@clerk/nextjs"
import CreatePostWizard from "./CreatePostWizard"
import SignIn from "./SignIn"

export default function Header() {
  const { user } = useUser()

  if (user) {
    return (
      <div className="mt-4 border-b border-slate6 pb-4">
        <CreatePostWizard />
      </div>
    )
  }

  return (
    <div className="mt-4 border-b border-slate6 pb-4">
      <SignIn />
    </div>
  )
}
