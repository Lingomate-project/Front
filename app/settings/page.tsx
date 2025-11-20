"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, Lock, Bell, Mail, UserIcon } from "lucide-react"

export default function SettingsPage() {
  const [pushNotifications, setPushNotifications] = useState(true)

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
            <h1 className="text-lg font-bold text-[#2c303c]">설정</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-2 border-[#2c303c]">
              <UserIcon className="h-12 w-12 text-[#2c303c]" />
            </div>
            <Link href="/profile-edit">
              <button className="text-sm text-[#6b7280]">사진 변경</button>
            </Link>
          </div>

          <div className="flex items-center justify-between border-b border-[#c5c8d4] pb-3">
            <span className="text-sm text-[#2c303c]">이름</span>
            <Link href="/profile-edit">
              <button className="text-sm text-[#2c303c]">변경하기</button>
            </Link>
          </div>

          {/* Settings List */}
          <div className="space-y-3 pt-2">
            <Link href="/change-password">
              <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3 hover:bg-[#c5c8d4] transition-colors">
                <Lock className="h-5 w-5 text-[#2c303c]" />
                <span className="text-sm text-[#2c303c] font-medium">비밀번호 변경</span>
              </div>
            </Link>

            <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-[#2c303c]" />
                <span className="text-sm text-[#2c303c] font-medium">푸시 알림</span>
              </div>
              <Switch
                checked={pushNotifications}
                onCheckedChange={setPushNotifications}
                className="data-[state=checked]:bg-[#2c303c]"
              />
            </div>

            <Link href="/subscription">
              <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3 hover:bg-[#c5c8d4] transition-colors">
                <Mail className="h-5 w-5 text-[#2c303c]" />
                <span className="text-sm text-[#2c303c] font-medium">구독</span>
              </div>
            </Link>

            <Link href="/account-management">
              <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3 hover:bg-[#c5c8d4] transition-colors">
                <UserIcon className="h-5 w-5 text-[#2c303c]" />
                <span className="text-sm text-[#2c303c] font-medium">계정 관리</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
