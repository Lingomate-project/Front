import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { PandaIcon } from "@/components/panda-icon"

export default function StatsPage() {
  const stats = [
    { label: "총 대화 횟수", value: "127" },
    { label: "총 학습 시간", value: "21h" },
    { label: "평균 점수", value: "83" },
    { label: "최고 점수", value: "97" },
    { label: "연속 학습일", value: "15" },
    { label: "학습한 단어 및 문장", value: "53" },
  ]

  const badges = Array(3).fill(null)
  const emptyBadges = Array(6).fill(null)

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
            <h1 className="text-lg font-bold text-[#2c303c]">학습 통계 📈</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#d5d8e0] rounded-2xl p-5 text-center space-y-2">
                <p className="text-3xl font-bold text-[#2c303c]">{stat.value}</p>
                <p className="text-xs text-[#6b7280]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Badges Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#2c303c]">진행도</h3>

            <div className="grid grid-cols-3 gap-3">
              {badges.map((_, i) => (
                <div key={i} className="bg-[#d5d8e0] rounded-2xl p-4 aspect-square flex items-center justify-center">
                  <PandaIcon size="small" />
                </div>
              ))}
              {emptyBadges.map((_, i) => (
                <div
                  key={i + 3}
                  className="bg-[#d5d8e0] rounded-2xl p-4 aspect-square flex items-center justify-center opacity-30"
                />
              ))}
            </div>

            <p className="text-xs text-center text-[#6b7280]">학습 3회 이상 완료시 10포인트</p>
          </div>
        </div>
      </div>
    </div>
  )
}
