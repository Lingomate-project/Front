import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Share2, Bookmark, Copy, MoreVertical } from "lucide-react"

export default function ChatDetailPage() {
  const messages = [
    { role: "assistant", content: "Hello how are you today?", time: "4:32 PM" },
    { role: "user", content: "Hello,i'm fine,how can I help you?", time: "4:33 PM" },
    { role: "user", content: "What is the best programming language?", time: "4:33 PM" },
    {
      role: "assistant",
      content:
        "There are many programming languages in the market that are used in designing and building websites, various applications and other tasks.",
      time: "4:33 PM",
    },
    { role: "user", content: "What is the best programming language?", time: "4:33 PM" },
    {
      role: "assistant",
      content:
        "There are many programming languages in the market that are used in designing and building websites, various applications and other tasks.",
      time: "4:33 PM",
    },
  ]

  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/history">
                <Button variant="ghost" size="icon" className="text-[#2c303c]">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </Link>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <Copy className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="p-6 space-y-6">
          {messages.map((message, index) => (
            <div key={index}>
              {index === 0 && (
                <div className="text-center mb-4">
                  <span className="text-xs text-[#6b7280]">{message.time}</span>
                </div>
              )}

              <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === "user" ? "bg-[#c5c8d4] text-[#2c303c]" : "bg-[#9ca3af] text-white"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>

              {index > 0 && (
                <div className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mt-1`}>
                  <span className="text-xs text-[#6b7280]">{message.time}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
