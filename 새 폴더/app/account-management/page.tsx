"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AccountManagementPage() {
  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center gap-3">
            <Link href="/settings">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-[#2c303c]">계정 관리</h1>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <Link href="/logout-confirm">
            <div className="bg-[#d5d8e0] rounded-2xl p-5 flex items-center justify-between hover:bg-[#c5c8d4] transition-colors">
              <span className="text-sm text-[#2c303c] font-medium">로그아웃</span>
              <ChevronRight className="h-5 w-5 text-[#6b7280]" />
            </div>
          </Link>

          <Link href="/delete-account">
            <div className="bg-[#d5d8e0] rounded-2xl p-5 flex items-center justify-between hover:bg-[#c5c8d4] transition-colors">
              <span className="text-sm text-[#2c303c] font-medium">탈퇴하기</span>
              <ChevronRight className="h-5 w-5 text-[#6b7280]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
