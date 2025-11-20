import Link from "next/link"
import { PandaIcon } from "@/components/panda-icon"
import { Button } from "@/components/ui/button"
import { Home, MessageSquare, User } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#e8eaf0] pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="p-6 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-0.5">
              <h1 className="text-2xl font-bold text-[#2c303c]">LING</h1>
              <Image src="/images/panda-mascot.png" alt="Panda" width={28} height={28} className="object-contain" />
              <h1 className="text-2xl font-bold text-[#2c303c]">MATE</h1>
            </div>
          </div>

          {/* Greeting */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#2c303c]">안녕하세요!</h2>
            <p className="text-sm text-[#6b7280]">오늘도 열심히 학습해볼까요.</p>
          </div>

          {/* Today's Learning Progress Card */}
          <div className="bg-[#d5d8e0] rounded-2xl p-5">
            <h3 className="text-sm font-medium text-[#2c303c] mb-4">오늘의 학습</h3>

            {/* Panda Icons Progress - centered */}
            <div className="flex justify-center items-center gap-3">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/images/panda-mascot.png" alt="Panda" width={48} height={48} className="object-contain" />
              </div>
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image src="/images/panda-mascot.png" alt="Panda" width={48} height={48} className="object-contain" />
              </div>
              <div className="w-14 h-14 bg-[#c5c8d4] rounded-full flex items-center justify-center overflow-hidden opacity-40">
                <Image src="/images/panda-mascot.png" alt="Panda" width={48} height={48} className="object-contain" />
              </div>
            </div>
            <p className="text-xs text-[#6b7280] text-center mt-3">1회 남음</p>
          </div>

          {/* AI Chat Start Card */}
          <div className="bg-[#d5d8e0] rounded-2xl p-6 text-center space-y-4">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center border-4 border-[#2c303c]">
              <PandaIcon size="medium" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#2c303c]">AI와 회화 시작하기</h3>
              <p className="text-sm text-[#6b7280]">새로운 회화를 시작해보세요.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/chat?mode=casual" className="w-full">
                <Button className="w-full h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium">
                  😊 Casual
                </Button>
              </Link>
              <Link href="/chat?mode=formal" className="w-full">
                <Button className="w-full h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium">
                  🎓 Formal
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#4a4f5e] border-t border-[#3d424f]">
          <div className="max-w-2xl mx-auto flex justify-around items-center h-16 px-4">
            <Link href="/home" className="flex flex-col items-center gap-1">
              <Home className="h-5 w-5 text-white" />
              <span className="text-xs text-white">홈</span>
            </Link>
            <Link href="/stats" className="flex flex-col items-center gap-1">
              <MessageSquare className="h-5 w-5 text-[#9ca3af]" />
              <span className="text-xs text-[#9ca3af]">통계</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center gap-1">
              <User className="h-5 w-5 text-[#9ca3af]" />
              <span className="text-xs text-[#9ca3af]">마이</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
