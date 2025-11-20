"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"

export default function ChangePasswordPage() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Password change:", passwords)
  }

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
            <h1 className="text-lg font-bold text-[#2c303c]">비밀번호 변경</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Logo */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-[#2c303c]">LING🐼MATE</h2>
            <p className="text-sm text-[#6b7280]">비밀번호 변경</p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="현재 비밀번호"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />

            <Input
              type="password"
              placeholder="새 비밀번호"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />

            <Input
              type="password"
              placeholder="새 비밀번호 확인"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />

            <Button
              type="submit"
              className="w-full h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium"
            >
              비밀번호 변경
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
