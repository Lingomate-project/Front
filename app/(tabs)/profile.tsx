"use client"

import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { Calendar, Database, TrendingUp, Book, User } from "lucide-react-native"

export default function ProfileScreen() {
  const router = useRouter()

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="pt-12 pb-6 px-6">
        <View className="flex-row items-center justify-center gap-0.5 mb-8 relative">
          <TouchableOpacity className="absolute left-0" onPress={() => router.back()}>
            {/* Back button if needed, or hidden in tabs */}
          </TouchableOpacity>
          <Text className="text-2xl font-bold text-[#2c303c]">LING</Text>
          <Image source={{ uri: "/images/image.png" }} className="w-6 h-6" resizeMode="contain" />
          <Text className="text-2xl font-bold text-[#2c303c]">MATE</Text>
          <Text className="absolute bottom-[-20px] text-xs text-gray-500">마이페이지</Text>
        </View>

        <View className="bg-[#d5d8e0] rounded-2xl p-5 mb-5 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <View className="w-12 h-12 bg-white rounded-full items-center justify-center border-2 border-black">
              <User size={24} color="#000" />
            </View>
            <View>
              <Text className="text-sm font-medium text-gray-500 mb-1">프로필</Text>
              <Text className="text-lg font-bold text-[#2c303c]">김말문</Text>
              <Text className="text-xs text-gray-500 underline">kmm@gmail.com</Text>
              <View className="flex-row items-center mt-1">
                <View className="w-2 h-2 rounded-full border border-black mr-1" />
                <Text className="text-xs text-[#2c303c]">베이직</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => router.push("/settings")}>
            <Text className="text-xs text-gray-500">설정</Text>
          </TouchableOpacity>
        </View>

        <View className="space-y-5">
          <View className="bg-[#d5d8e0] rounded-2xl p-5 flex-row items-center justify-between mb-5">
            <View className="flex-row items-center gap-3">
              <Calendar size={24} color="#000" />
              <Text className="text-base font-semibold text-[#2c303c]">연속 학습일</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-600">15</Text>
          </View>

          <View className="bg-[#d5d8e0] rounded-2xl p-5 flex-row items-center justify-between mb-5">
            <View className="flex-row items-center gap-3">
              <Database size={24} color="#000" />
              <Text className="text-base font-semibold text-[#2c303c]">획득 포인트</Text>
            </View>
            <Text className="text-3xl font-bold text-gray-600">1250</Text>
          </View>

          <TouchableOpacity
            className="bg-[#d5d8e0] rounded-2xl p-5 flex-row items-center gap-3 mb-5"
            onPress={() => router.push("/stats")}
          >
            <TrendingUp size={24} color="#000" />
            <Text className="text-base font-semibold text-[#2c303c]">학습 통계</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#d5d8e0] rounded-2xl p-5 flex-row items-center gap-3 mb-5"
            onPress={() => router.push("/history")}
          >
            <Book size={24} color="#000" />
            <Text className="text-base font-semibold text-[#2c303c]">회화 스크립트</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mt-8 mb-4">
          <Image source={{ uri: "/images/image.png" }} className="w-16 h-16" resizeMode="contain" />
        </View>
      </View>
    </ScrollView>
  )
}
