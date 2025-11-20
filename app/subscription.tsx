"use client"

import { View, Text, TouchableOpacity, ScrollView, Modal } from "react-native"
import { useRouter } from "expo-router"
import { ArrowLeft, ChevronRight } from "lucide-react-native"
import { useState } from "react"

export default function SubscriptionScreen() {
  const router = useRouter()
  const [showSubscribeModal, setShowSubscribeModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="pt-12 pb-6 px-6">
        <View className="flex-row items-center mb-8">
          <TouchableOpacity onPress={() => router.back()} className="absolute left-0 z-10">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View className="items-center mb-8">
          <View className="flex-row items-center gap-1">
            <Text className="text-2xl font-bold text-[#2c303c]">LING</Text>
            <Text className="text-2xl">🐼</Text>
            <Text className="text-2xl font-bold text-[#2c303c]">MATE</Text>
          </View>
          <Text className="text-sm text-gray-500 mt-2">구독 관리</Text>
        </View>

        <View className="bg-[#d5d8e0] rounded-xl p-5 mb-4">
          <View className="flex-row items-center gap-2 mb-2">
            <View className="w-4 h-4 rounded-full border border-black" />
            <Text className="text-lg font-bold text-[#2c303c]">베이직</Text>
          </View>
          <Text className="text-sm text-gray-600 mb-1">회화 시간: 10분</Text>
          <Text className="text-sm text-gray-600 mb-2">회화 횟수: 3번</Text>
          <Text className="text-lg font-bold text-[#2c303c] absolute right-5 top-5">Free</Text>
        </View>

        <View className="bg-[#d5d8e0] rounded-xl p-5 mb-8">
          <View className="flex-row items-center gap-2 mb-2">
            <Text className="text-lg">👑</Text>
            <Text className="text-lg font-bold text-[#2c303c]">프리미엄</Text>
          </View>
          <Text className="text-sm text-gray-600 mb-1">회화 시간: ∞</Text>
          <Text className="text-sm text-gray-600 mb-2">회화 횟수: ∞</Text>
          <Text className="text-lg font-bold text-[#2c303c] absolute right-5 top-5">월 12,900₩</Text>
        </View>

        <View className="space-y-3">
          <TouchableOpacity
            className="bg-[#f5f5f7] p-4 flex-row items-center justify-between"
            onPress={() => setShowSubscribeModal(true)}
          >
            <Text className="text-base font-medium text-[#2c303c]">프리미엄 구독</Text>
            <ChevronRight size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#f5f5f7] p-4 flex-row items-center justify-between"
            onPress={() => setShowCancelModal(true)}
          >
            <Text className="text-base font-medium text-[#2c303c]">프리미엄 구독 취소</Text>
            <ChevronRight size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Subscribe Modal */}
        <Modal visible={showSubscribeModal} transparent animationType="fade">
          <View className="flex-1 bg-black/50 justify-center items-center px-6">
            <View className="bg-[#e8eaf0] w-full rounded-xl overflow-hidden">
              <View className="p-8 items-center">
                <Text className="text-lg font-bold mb-4">프리미엄</Text>
                <Text className="text-center text-sm text-gray-600 mb-6 leading-5">
                  프리미엄 회원 구독 시 회화 시간 및{"\n"}회화 횟수 제한이 사라집니다.{"\n\n"}구독하시겠습니까?
                </Text>
              </View>
              <View className="flex-row border-t border-gray-200">
                <TouchableOpacity
                  className="flex-1 py-4 items-center border-r border-gray-200 bg-white"
                  onPress={() => setShowSubscribeModal(false)}
                >
                  <Text className="text-[#2c303c]">취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 py-4 items-center bg-white"
                  onPress={() => setShowSubscribeModal(false)}
                >
                  <Text className="text-[#2c303c]">확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Cancel Modal */}
        <Modal visible={showCancelModal} transparent animationType="fade">
          <View className="flex-1 bg-black/50 justify-center items-center px-6">
            <View className="bg-[#e8eaf0] w-full rounded-xl overflow-hidden">
              <View className="p-8 items-center">
                <Text className="text-lg font-bold mb-4">프리미엄 구독 취소</Text>
                <Text className="text-center text-sm text-gray-600 mb-6 leading-5">
                  프리미엄 회원 구독 취소 시 회화 시간 10분,{"\n"}일 회화 횟수 3번으로 제한됩니다.{"\n\n"}구독을
                  취소하시겠습니까?
                </Text>
              </View>
              <View className="flex-row border-t border-gray-200">
                <TouchableOpacity
                  className="flex-1 py-4 items-center border-r border-gray-200 bg-white"
                  onPress={() => setShowCancelModal(false)}
                >
                  <Text className="text-[#2c303c]">취소</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-1 py-4 items-center bg-white"
                  onPress={() => setShowCancelModal(false)}
                >
                  <Text className="text-[#2c303c]">확인</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  )
}
