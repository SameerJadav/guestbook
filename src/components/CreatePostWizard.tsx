"use client"

import { Suspense, useState } from "react"
import { SignOutButton } from "@clerk/nextjs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { cn } from "~/lib/utils"
import { Skeleton } from "~/components/ui/skeleton"
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
    retry: 3,
  })

  return (
    <>
      <Suspense fallback={<Skeleton className="h-[46px] w-full" />}>
        <form
          className={cn(
            "flex items-center gap-2 rounded-md border border-slate7 bg-slate3 p-2 transition-colors hover:border-slate8 hover:bg-slate4",
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                if (content !== "") mutate()
              }
            }}
            disabled={status === "loading"}
            className="flex-1 bg-transparent p-0 outline-none placeholder:text-slate11"
            placeholder="Your message..."
          />
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault()
              if (content !== "") mutate()
            }}
            disabled={status === "loading"}
          >
            Sign
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
