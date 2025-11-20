"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function LogoutConfirmPage() {
  const router = useRouter()

  const handleLogout = () => {
    console.log("[v0] User logged out")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center gap-3">
            <Link href="/account-management">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-[#2c303c]">로그아웃</h1>
          </div>
        </div>

        <div className="p-6 h-[calc(100vh-80px)] flex items-center justify-center">
          <div className="w-full max-w-sm space-y-6">
            {/* Logo and Message */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold text-[#2c303c]">LING🐼MATE</h2>

              <div className="bg-[#d5d8e0] rounded-2xl p-8 space-y-4">
                <h3 className="text-lg font-bold text-[#2c303c]">회원 탈퇴</h3>
                <p className="text-sm text-[#6b7280]">
                  회원 정보 및 계정을 모두 삭제하시겠습니까?
                  <br />
                  삭제된 회원정보는 복구할 수 없습니다.
                </p>
                <p className="text-sm text-[#6b7280]">탈퇴하시겠습니까?</p>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Link href="/account-management" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full h-12 bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#c5c8d4] rounded-xl font-medium"
                    >
                      취소
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    className="flex-1 h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium"
                  >
                    확인
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
