"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function SubscriptionPage() {
  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [isPremium, setIsPremium] = useState(false)

  const handlePremiumSubscribe = () => {
    setIsPremium(true)
    setShowPremiumModal(false)
  }

  const handleCancelSubscription = () => {
    setIsPremium(false)
    setShowCancelModal(false)
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
            <h1 className="text-lg font-bold text-[#2c303c]">구독 관리</h1>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Current Plan - Free */}
          <div className="bg-[#d5d8e0] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭕</span>
                <span className="text-lg font-bold text-[#2c303c]">베이직</span>
              </div>
              <span className="text-2xl font-bold text-[#2c303c]">Free</span>
            </div>
            <div className="space-y-1 text-sm text-[#6b7280]">
              <p>회화 시간: 10분</p>
              <p>회화 횟수: 3회</p>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-[#8a38f5]/20 to-[#d5a835]/20 rounded-2xl p-6 border-2 border-[#8a38f5]/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👑</span>
                <span className="text-lg font-bold text-[#2c303c]">프리미엄</span>
              </div>
              <span className="text-2xl font-bold text-[#2c303c]">월 12,900₩</span>
            </div>
            <div className="space-y-1 text-sm text-[#6b7280]">
              <p>회화 시간: ∞</p>
              <p>회화 횟수: ∞</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            {!isPremium ? (
              <button onClick={() => setShowPremiumModal(true)} className="text-sm text-[#6b7280] underline">
                프리미엄 구독
              </button>
            ) : (
              <button onClick={() => setShowCancelModal(true)} className="text-sm text-[#6b7280] underline">
                프리미엄 구독 취소
              </button>
            )}
          </div>
        </div>
      </div>

      {showPremiumModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#d5d8e0] rounded-2xl p-8 max-w-sm w-full space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold text-[#2c303c]">프리미엄</h2>
              <p className="text-sm text-[#2c303c] leading-relaxed">
                프리미엄의 첫달 구독 시 하루 시간 및
                <br />
                회화 횟수 제한이 사라집니다.
              </p>
              <p className="text-sm text-[#2c303c]">구독하시겠습니까?</p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowPremiumModal(false)}
                variant="outline"
                className="flex-1 h-12 bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#c5c8d4] rounded-xl font-medium"
              >
                취소
              </Button>
              <Button
                onClick={handlePremiumSubscribe}
                className="flex-1 h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      )}

      {showCancelModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#d5d8e0] rounded-2xl p-8 max-w-sm w-full space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold text-[#2c303c]">프리미엄 구독 취소</h2>
              <p className="text-sm text-[#2c303c] leading-relaxed">
                프리미엄의 최대 구독 취소 시 하루 시간 10분,
                <br />한 달에 횟수 3회만으로 제한됩니다.
              </p>
              <p className="text-sm text-[#2c303c]">구독을 취소하시겠습니까?</p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowCancelModal(false)}
                variant="outline"
                className="flex-1 h-12 bg-transparent border-[#2c303c] text-[#2c303c] hover:bg-[#c5c8d4] rounded-xl font-medium"
              >
                취소
              </Button>
              <Button
                onClick={handleCancelSubscription}
                className="flex-1 h-12 bg-[#2c303c] hover:bg-[#3d424f] text-white rounded-xl font-medium"
              >
                확인
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
