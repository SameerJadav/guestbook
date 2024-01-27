"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { cn } from "~/utils/cn";
import type { EventFor } from "~/utils/react";

interface CreatePostWizardProps {
  authorName: string | null | undefined;
}

export default function CreatePostWizard({
  authorName,
}: CreatePostWizardProps) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: () =>
      fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authorName,
          message: message.trim(),
        }),
      }),
    onSuccess: () => {
      router.refresh();
      setMessage("");
    },
  });

  // eslint-disable-next-line no-console
  if (error) console.error(error);

  function addMessage(e: EventFor<"button", "onClick">) {
    e.preventDefault();
    if (message.trim() !== "") {
      mutate();
    }
  }

  function addMessageOnEnter(e: EventFor<"input", "onKeyDown">) {
    if (e.ctrlKey && e.key === "Enter" && message.trim() !== "") {
      e.preventDefault();
      mutate();
    }
  }

  return (
    <div className="space-y-1">
      <form className="flex w-full gap-2 rounded-md bg-gray-3 p-2">
        <input
          className="flex-1 bg-transparent placeholder-gray-11 outline-none"
          disabled={isPending}
          id="message-input"
          name="message-input"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={addMessageOnEnter}
          placeholder="Your message..."
          type="text"
          value={message}
        />
        <button
          className="rounded-md bg-gray-12 px-3 py-0.5 font-medium text-gray-1 transition-colors hover:bg-white disabled:bg-gray-11"
          disabled={isPending || message.trim() === ""}
          onClick={addMessage}
        >
          Post
        </button>
      </form>
      <div
        className={cn(
          "flex w-full items-center justify-end",
          error && "justify-between",
          isPending && "justify-between",
        )}
      >
        <p className={cn(error ? "inline text-sm text-red-9" : "hidden")}>
          Something went wrong. Try again later.
        </p>
        <p
          className={cn(isPending ? "inline text-sm text-yellow-9" : "hidden")}
        >
          Posting your message...
        </p>
        <button
          className="mr-2 text-sm text-gray-11 transition-colors hover:text-gray-12"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
