"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, MessageSquare, Clock } from "lucide-react"
import { useState } from "react"

export default function HistoryPage() {
  const [chatHistory, setChatHistory] = useState([
    { title: "In the public places", replies: 13, time: "5 min ago" },
    { title: "What is the reason of...", replies: 4, time: "22 min ago" },
    { title: "How are you feeling t...", replies: 20, time: "1 hr ago" },
    { title: "Hi, How can I help yo...", replies: 18, time: "2 hrs ago" },
    { title: "What is the point of li...", replies: 7, time: "2 hrs ago" },
    { title: "Go shwaty it's yout bi...", replies: 12, time: "3 hrs ago" },
  ])

  const handleClearHistory = () => {
    setChatHistory([])
  }

  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center justify-center relative">
            <Link href="/profile" className="absolute left-0">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-[#2c303c]">대화 내역</h1>
          </div>
        </div>

        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-sm text-[#6b7280]">Chats (56)</p>
          </div>

          <div className="space-y-3">
            {chatHistory.map((chat, i) => (
              <Link key={i} href={`/chat-detail/${i}`}>
                <div className="bg-white rounded-xl p-4 hover:bg-gray-50 transition-colors shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#2c303c] font-medium text-sm truncate mb-2">{chat.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-[#6b7280]">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3.5 w-3.5" />
                          <span>{chat.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{chat.time}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-[#6b7280] text-xl leading-none -mt-1">⋮</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 mb-8">
            <Button
              variant="outline"
              className="w-full h-14 bg-[#d5d8e0] border-0 text-[#2c303c] hover:bg-[#c5c8d4] rounded-2xl font-medium text-base"
              onClick={handleClearHistory}
            >
              대화 내역 비우기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
