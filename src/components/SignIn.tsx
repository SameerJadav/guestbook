"use client"

import { useSignIn } from "@clerk/nextjs"
import { type OAuthStrategy } from "@clerk/nextjs/dist/types/server"
import { Button } from "~/components/ui/button"
import { Icons } from "~/components/Icons"

export default function SignIn() {
  const { signIn, isLoaded } = useSignIn()

  if (!isLoaded) return null

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    })
  }

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => signInWith("oauth_google")}
      variant="secondary"
      className="gap-2"
    >
      <Icons.google className="h-4 w-4" />
      <span>Continue with Google</span>
    </Button>
  )
}
