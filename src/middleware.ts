import { NextResponse } from "next/server"
import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  // routes that don't require authentication
  publicRoutes: ["/", "/signin(.*)"],

  afterAuth(auth) {
    if (auth.isPublicRoute) {
      //  For public routes, we don't need to do anything
      return NextResponse.next()
    }
  },
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
