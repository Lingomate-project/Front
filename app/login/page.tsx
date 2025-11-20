"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()

  const handleGoogleLogin = () => {
    // TODO: Implement Google OAuth
    console.log("[v0] Google login initiated")
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
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="이메일"
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />
            <Input
              type="password"
              placeholder="비밀번호"
              className="h-12 bg-white border-0 rounded-xl text-[#2c303c] placeholder:text-[#9ca3af]"
            />
          </div>

          {/* Login Button */}
          <Button
            onClick={handleGoogleLogin}
            className="w-full h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium"
          >
            로그인
          </Button>

          {/* Sign up link */}
          <div className="text-center">
            <p className="text-sm text-[#6b7280]">계정이 없으신가요?</p>
            <Link href="/signup">
              <Button
                variant="ghost"
                className="w-full h-12 bg-[#3d424f] hover:bg-[#4a5060] text-white rounded-xl font-medium mt-2"
              >
                회원가입
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
