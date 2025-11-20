"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Signup:", formData)
    router.push("/home")
  }

  return (
    <div className="min-h-screen bg-[#e8eaf0] flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Card Container */}
        <div className="bg-[#d5d8e0] rounded-3xl p-8 space-y-6">
          {/* Logo and Title */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-0.5">
              <span className="text-2xl font-bold text-[#2c303c]">LING</span>
              <Image src="/images/panda-mascot.png" alt="Panda" width={32} height={32} className="inline-block" />
              <span className="text-2xl font-bold text-[#2c303c]">MATE</span>
            </div>
            <p className="text-sm text-[#6b7280]">AI와 함께하는 외국어 회화</p>
          </div>

          {/* Input Fields */}
          <form onSubmit={handleSignup} className="space-y-3">
            <Input
              type="text"
              placeholder="이름"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />
            <Input
              type="email"
              placeholder="이메일"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />

            {/* Signup Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium"
            >
              회원가입
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
