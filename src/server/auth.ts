import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions: NextAuthConfig = {
  providers: [
    GitHubProvider({
      // GitHub returns an `iss` parameter on the OAuth callback, which
      // @auth/core validates against the provider's `issuer`. The version
      // pinned here (0.21.0) has no issuer in its GitHub defaults, so it
      // compares against the fallback "https://authjs.dev" and every sign-in
      // fails with CallbackRouteError. Upstream added this exact value to the
      // provider defaults; drop this once next-auth is upgraded.
      issuer: "https://github.com/login/oauth",
    }),
  ],
};

export const { handlers, auth } = NextAuth(authOptions);
