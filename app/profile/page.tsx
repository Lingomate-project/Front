import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Database, TrendingUp, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#e8eaf0] pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center gap-3">
            <Link href="/home">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <div className="flex items-center gap-0.5">
              <h1 className="text-lg font-bold text-[#2c303c]">LING</h1>
              <Image
                src="/images/panda-mascot.png"
                alt="Panda"
                width={18}
                height={18}
                className="object-contain mx-0.5"
              />
              <h1 className="text-lg font-bold text-[#2c303c]">MATE</h1>
            </div>
          </div>
          <p className="text-xs text-[#6b7280] ml-12">마이페이지</p>
        </div>

        <div className="p-6 space-y-4">
          {/* Profile Card */}
          <div className="bg-[#d5d8e0] rounded-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex items-center gap-1 text-[#2c303c]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="text-sm font-medium">프로필</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border-2 border-[#2c303c] overflow-hidden">
                <Image src="/images/panda-mascot.png" alt="Profile" width={32} height={32} className="object-contain" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-[#2c303c]">김말본</h2>
                <p className="text-xs text-[#6b7280]">kmm@gmail.com</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6b7280]"></div>
                  <span className="text-xs text-[#6b7280]">베이직</span>
                </div>
              </div>
              <Link href="/settings">
                <Button variant="ghost" size="sm" className="text-[#2c303c] text-sm">
                  설정
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-[#2c303c]" />
            <span className="text-sm text-[#2c303c]">연속 학습일</span>
            <span className="ml-auto text-3xl font-bold text-[#2c303c]">15</span>
          </div>

          <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3">
            <Database className="h-6 w-6 text-[#2c303c]" />
            <span className="text-sm text-[#2c303c]">획득 포인트</span>
            <span className="ml-auto text-3xl font-bold text-[#2c303c]">1250</span>
          </div>

          {/* Menu Items */}
          <Link href="/stats">
            <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3 hover:bg-[#c5c8d4] transition-colors">
              <TrendingUp className="h-6 w-6 text-[#2c303c]" />
              <span className="text-sm text-[#2c303c] font-medium">학습 통계</span>
            </div>
          </Link>

          <Link href="/history">
            <div className="bg-[#d5d8e0] rounded-2xl p-4 flex items-center gap-3 hover:bg-[#c5c8d4] transition-colors">
              <MessageSquare className="h-6 w-6 text-[#2c303c]" />
              <span className="text-sm text-[#2c303c] font-medium">회화 스크립트</span>
            </div>
          </Link>

          {/* Panda at bottom */}
          <div className="flex justify-center pt-6">
            <Image src="/images/panda-mascot.png" alt="Panda" width={80} height={80} className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
