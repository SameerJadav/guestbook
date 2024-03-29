"use client";

import { signIn } from "next-auth/react";
import Icons from "~/components/Icons";

export default function SigninButton() {
  return (
    <button
      className="flex max-w-max items-center gap-2 rounded-md border border-gray-7 bg-gray-2 px-3 py-1 font-medium transition-colors ease-in hover:border-gray-8"
      onClick={() => void signIn("github")}
    >
      <Icons.Github className="size-5" />
      <span>Signin with GitHub</span>
    </button>
  );
}
