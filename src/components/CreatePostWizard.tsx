"use client"

import { Suspense, useCallback, useState } from "react"
import { SignOutButton } from "@clerk/nextjs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { cn } from "~/lib/utils"
import Skeleton from "~/components/ui/skeleton"
import { Icons } from "~/components/Icons"
import { Button } from "./ui/button"

export default function CreatePostWizard() {
  const [content, setContent] = useState("")

  const queryClient = useQueryClient()

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      return await axios.post("/api/post", { content: content })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["post"] })
      setContent("")
    },
  })

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault()
        if (content !== "") mutate()
      }
    },
    [content, mutate],
  )

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (content !== "") mutate()
    },
    [content, mutate],
  )

  return (
    <>
      <Suspense fallback={<Skeleton className="h-[46px] w-full" />}>
        <form
          className={cn(
            "flex items-center gap-2 rounded-md border border-gray7 bg-gray3 p-2 transition-colors hover:border-gray8 hover:bg-gray4",
            status === "loading" && "border-amber7 hover:border-amber8",
            status === "error" && "border-red7 hover:border-red8",
          )}
        >
          <input
            type="text"
            name="message"
            id="message"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={status === "loading"}
            className="flex-1 bg-transparent p-0 outline-none placeholder:text-gray11"
            placeholder="Your message..."
          />
          <Button
            size="sm"
            onClick={handleClick}
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <Icons.loader className="h-4 w-4 animate-spin" />
            ) : (
              "Sign"
            )}
          </Button>
        </form>
      </Suspense>

      <div className="mt-2 flex items-center justify-between">
        <Suspense fallback={<Skeleton className="h-5 w-[55.172px]" />}>
          <SignOutButton>
            <Button size="noPad" variant="link">
              Sign out
            </Button>
          </SignOutButton>
        </Suspense>
        {status === "loading" && (
          <p className="text-sm text-amber11">Signing...</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red11">Ink Exhausted. Try again later.</p>
        )}
      </div>
    </>
  )
}
