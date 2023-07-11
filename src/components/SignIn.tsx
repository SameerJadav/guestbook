"use client"

import { useSignIn } from "@clerk/nextjs"
import { Icons } from "./Icons"
import { Button } from "./ui/button"

export default function SignIn() {
  const { signIn, isLoaded } = useSignIn()

  if (!isLoaded) return null

  const signInWithGoogle = () =>
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/",
      redirectUrlComplete: "/",
    })

  return (
    <Button
      variant="secondary"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={signInWithGoogle}
      className="flex gap-2 items-center"
    >
      <Icons.google className="w-4 h-4" />
      <span>Sign in with Google</span>
    </Button>
  )
}
