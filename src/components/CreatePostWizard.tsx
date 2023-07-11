"use client"

import { useState } from "react"
import { SignOutButton } from "@clerk/nextjs"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { cn } from "~/lib/utils"
import { Button } from "./ui/button"

export default function CreatePostWizard() {
  const [content, setContent] = useState("")

  const queryClient = useQueryClient()

  const { mutate, isLoading, isError } = useMutation({
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
      <form
        className={cn(
          "flex items-center gap-2 rounded-md border border-slate7 bg-slate3 p-2 transition-colors hover:border-slate8 hover:bg-slate4",
          isLoading && "border-amber7 hover:border-amber8",
          isError && "border-red7 hover:border-red8",
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
          disabled={isLoading}
          className="flex-1 bg-transparent p-0 outline-none placeholder:text-slate11"
          placeholder="Your message..."
        />
        <Button
          size="sm"
          onClick={(e) => {
            e.preventDefault()
            if (content !== "") mutate()
          }}
          disabled={isLoading}
        >
          Sign
        </Button>
      </form>

      <div className="mt-2 flex justify-between items-center">
        <SignOutButton>
          <Button size="noPad" variant="link">
            Sign out
          </Button>
        </SignOutButton>
        {isLoading && <p className="text-amber11 text-sm">Signing...</p>}
        {isError && (
          <p className="text-red11 text-sm">Ink Exhausted. Try again later.</p>
        )}
      </div>
    </>
  )
}
