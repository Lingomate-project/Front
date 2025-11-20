"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function SubscriptionDetailsPage() {
  return (
    <div className="min-h-screen bg-[#e8eaf0]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-[#d5d8e0] border-b border-[#c5c8d4] p-4">
          <div className="flex items-center gap-3">
            <Link href="/subscription">
              <Button variant="ghost" size="icon" className="text-[#2c303c]">
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-lg font-bold text-[#2c303c]">구독 관리</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Premium Plan Details */}
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-[#2c303c]">프리미엄</h2>
              <p className="text-sm text-[#6b7280]">
                프리미엄의 최대 구독 시 하루 시간 10분,
                <br />한 달에 총 3회만으로 시작됩니다.
              </p>
              <p className="text-sm text-[#6b7280]">구독하시겠습니까?</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link href="/subscription" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full h-12 bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#d5d8e0] rounded-xl font-medium"
                >
                  취소
                </Button>
              </Link>
              <Button className="flex-1 h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium">
                확인
              </Button>
            </div>
          </div>

          {/* Cancel Subscription Section */}
          <div className="pt-8 space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-bold text-[#2c303c]">프리미엄 구독 취소</h3>
              <p className="text-sm text-[#6b7280]">
                프리미엄의 최대 구독을 취소 시 하루 시간 10분,
                <br />한 달에 총 3회만으로 일정됩니다.
              </p>
              <p className="text-sm text-[#6b7280]">취소하시겠습니까?</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link href="/subscription" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full h-12 bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#d5d8e0] rounded-xl font-medium"
                >
                  취소
                </Button>
              </Link>
              <Button className="flex-1 h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium">
                확인
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
