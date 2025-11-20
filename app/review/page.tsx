"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

const reviewPhrases = [
  { english: "Way to go.", korean: "잘했어" },
  { english: "I'm sold.", korean: "설득됐어" },
  { english: "Give her my best.", korean: "안부 전해줘" },
  { english: "Good for you.", korean: "잘됐다/좋겠다" },
  { english: "Time flies", korean: "시간 빠르다" },
  { english: "It's up to you.", korean: "너가 결정해" },
  { english: "I mean it.", korean: "진심이야" },
]

export default function ReviewPage() {
  const [activeTab, setActiveTab] = useState<"script" | "review">("review")

  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center gap-3">
            <Link href="/home">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-[#2c303c]">복습하기 📖</h1>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant={activeTab === "script" ? "default" : "outline"}
              onClick={() => setActiveTab("script")}
              className={`h-12 rounded-xl font-medium ${
                activeTab === "script"
                  ? "bg-[#2c303c] text-white hover:bg-[#3d424f]"
                  : "bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#d5d8e0]"
              }`}
            >
              스크립트
            </Button>
            <Button
              variant={activeTab === "review" ? "default" : "outline"}
              onClick={() => setActiveTab("review")}
              className={`h-12 rounded-xl font-medium ${
                activeTab === "review"
                  ? "bg-[#2c303c] text-white hover:bg-[#3d424f]"
                  : "bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#d5d8e0]"
              }`}
            >
              출근문
            </Button>
          </div>

          {activeTab === "review" ? (
            <div className="space-y-3">
              {reviewPhrases.map((phrase, index) => (
                <div key={index} className="bg-[#d5d8e0] rounded-2xl p-5 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[#2c303c] font-medium">{phrase.english}</p>
                    <p className="text-[#6b7280] text-sm">{phrase.korean}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#d5d8e0] rounded-2xl p-6 text-center">
              <p className="text-[#6b7280]">대화 내역을 저장하면 여기에 스크립트가 표시됩니다.</p>
              <Link href="/chat?mode=casual">
                <Button className="mt-4 bg-[#2c303c] hover:bg-[#3d424f] text-white">대화 시작하기</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
