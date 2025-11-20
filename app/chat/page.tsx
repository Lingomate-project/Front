"use client"

import type React from "react"

import { useState, useRef, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, Send, Mic } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

function ChatContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const mode = searchParams.get("mode") || "casual"
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isListening, setIsListening] = useState(false)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello how are you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          mode,
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let assistantMessage = ""

      const assistantMessageId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: "",
        },
      ])

      while (reader) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (line.startsWith("0:")) {
            try {
              const jsonStr = line.slice(2)
              const parsed = JSON.parse(jsonStr)
              if (parsed) {
                assistantMessage += parsed
                setMessages((prev) =>
                  prev.map((m) => (m.id === assistantMessageId ? { ...m, content: assistantMessage } : m)),
                )
              }
            } catch (e) {
              console.error("Parse error:", e)
            }
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-[#e8eaf0]">
      {/* Header */}
      <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/home">
            <Button variant="ghost" size="icon" className="text-[#2c303c]">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <h1 className="font-semibold text-[#2c303c]">{mode === "casual" ? "😊 Casual Mode" : "🎩 Formal Mode"}</h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push(`/chat?mode=${mode === "casual" ? "formal" : "casual"}`)}
            className="text-xs text-[#2c303c] hover:bg-[#c5c8d4] underline"
          >
            모드 변경
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          <div className="flex justify-center py-4">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-[#2c303c] shadow-md overflow-hidden">
              <Image
                src="/images/panda-mascot.png"
                alt="Panda Avatar"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          {messages.map((message) => (
            <div key={message.id} className="flex flex-col gap-1">
              <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-[#b8bcc9] text-[#2c303c] rounded-br-sm"
                      : "bg-[#d5d8e0] text-[#2c303c] rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#d5d8e0] rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#6b7280] rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-[#6b7280] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 bg-[#6b7280] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="bg-[#d5d8e0] border-t border-[#c5c8d4] p-4">
        <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Hello, how are you today?"
              className="rounded-full bg-white border-0 text-[#2c303c] placeholder:text-[#9ca3af] pr-11 h-11 text-sm"
            />
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-[#9ca3af] hover:text-[#2c303c] h-8 w-8"
              onClick={() => setIsListening(!isListening)}
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
          <Button
            type="submit"
            disabled={!input.trim() || isLoading}
            size="icon"
            className="rounded-full bg-[#2c303c] hover:bg-[#3d424f] text-white flex-shrink-0 h-11 w-11 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">로딩 중...</div>}>
      <ChatContent />
    </Suspense>
  )
}
