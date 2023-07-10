"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Button } from "./ui/button"

export default function CreatePostWizard() {
  const [content, setContent] = useState("")

  const { mutate } = useMutation({
    mutationFn: async () => {
      return await axios.post("/api/post", { content: content })
    },
    onSuccess: () => {
      setContent("")
    },
    retry: 3,
  })

  return (
    <form className="flex items-center gap-2 rounded-md border border-slate7 bg-slate3 p-2 transition-colors hover:border-slate8 hover:bg-slate4">
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
        className="flex-1 bg-transparent p-0 outline-none placeholder:text-slate11"
        placeholder="Your message..."
      />
      <Button
        size="sm"
        onClick={(e) => {
          e.preventDefault()
          if (content !== "") mutate()
        }}
      >
        Sign
      </Button>
    </form>
  )
}
