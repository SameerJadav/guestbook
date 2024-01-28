import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions: NextAuthConfig = {
  providers: [GitHubProvider],
};

export const { handlers, auth } = NextAuth(authOptions);
