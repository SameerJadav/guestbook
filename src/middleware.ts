import { NextResponse } from "next/server";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth) {
    if (auth.isPublicRoute) NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
