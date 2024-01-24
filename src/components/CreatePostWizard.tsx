"use client";

import { signOut } from "next-auth/react";

export default function CreatePostWizard() {
  return (
    <div className="flex flex-col items-end gap-1">
      <form className="flex w-full gap-2 rounded-md bg-gray-3 p-2">
        <input
          className="flex-1 bg-transparent placeholder-gray-11 outline-none"
          id="message-input"
          name="message-input"
          placeholder="Your message..."
          type="text"
        />
        <button className="rounded-md bg-gray-12 px-3 py-0.5 font-medium text-gray-1 hover:bg-white disabled:bg-gray-11">
          Post
        </button>
      </form>
      <button
        className="mr-2 text-sm text-gray-11 hover:text-gray-12"
        onClick={() => void signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
