"use client"

import { Suspense, useState } from "react"
import { useSignIn } from "@clerk/nextjs"
import { type OAuthStrategy } from "@clerk/nextjs/dist/types/server"
import { Button } from "~/components/ui/button"
import { Skeleton } from "~/components/ui/skeleton"
import { Icons } from "~/components/Icons"

export default function SignIn() {
  const { signIn, isLoaded } = useSignIn()
  const [isLoading, setIsLoading] = useState(false)

  if (!isLoaded) return null

  const signInWith = async (strategy: OAuthStrategy) => {
    setIsLoading(true)
    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/",
      })
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  return (
    <Suspense fallback={<Skeleton className="h-[38px] w-[202.641px]" />}>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => signInWith("oauth_google")}
        variant="secondary"
        className="gap-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Icons.loader className="h-4 w-4 animate-spin" />
            <span>Signing in...</span>
          </>
        ) : (
          <>
            <Icons.google className="h-4 w-4" />
            <span>Continue with Google</span>
          </>
        )}
      </Button>
    </Suspense>
  )
}
