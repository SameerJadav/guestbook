"use client";

import Icons from "~/components/Icons";

export default function SigninButton() {
  return (
    <button className="flex max-w-max items-center gap-2 rounded-md border border-gray-7 bg-gray-2 px-3 py-1 font-medium transition-colors hover:border-gray-8">
      <Icons.Github className="size-5" />
      <span>Signin with GitHub</span>
    </button>
  );
}
