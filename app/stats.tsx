"use client"

import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native"
import { useRouter } from "expo-router"
import { ArrowLeft, TrendingUp } from "lucide-react-native"

export default function StatsScreen() {
  const router = useRouter()

  const StatCard = ({ value, label }: { value: string; label: string }) => (
    <View className="bg-[#d5d8e0] rounded-xl p-4 items-center w-[48%] mb-4">
      <Text className="text-2xl font-bold text-[#2c303c] mb-1">{value}</Text>
      <Text className="text-xs text-[#6b7280]">{label}</Text>
    </View>
  )

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="pt-12 pb-6 px-6">
        <View className="flex-row items-center mb-8">
          <TouchableOpacity onPress={() => router.back()} className="absolute left-0 z-10">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center gap-2 mb-8">
          <Text className="text-xl font-bold text-[#2c303c]">학습 통계</Text>
          <TrendingUp size={24} color="#000" />
        </View>

        <View className="flex-row flex-wrap justify-between mb-8">
          <StatCard value="127" label="총 대화 횟수" />
          <StatCard value="21h" label="총 학습 시간" />
          <StatCard value="83" label="평균 점수" />
          <StatCard value="97" label="최고 점수" />
          <StatCard value="15" label="연속 학습일" />
          <StatCard value="53" label="학습한 단어 및 문장" />
        </View>

        <Text className="text-base font-bold text-[#2c303c] mb-4">진행도</Text>

        <View className="flex-row flex-wrap gap-3 mb-2">
          {[1, 2, 3].map((i) => (
            <View key={i} className="w-[30%] aspect-square bg-[#d5d8e0] rounded-xl items-center justify-center">
              <Image source={{ uri: "/images/image.png" }} className="w-12 h-12" resizeMode="contain" />
            </View>
          ))}
          {[4, 5, 6, 7, 8, 9].map((i) => (
            <View key={i} className="w-[30%] aspect-square bg-[#d5d8e0] rounded-xl" />
          ))}
        </View>

        <Text className="text-xs text-[#6b7280] text-right mt-2">하루 3회 이상 대화시 10포인트</Text>
      </View>
    </ScrollView>
  )
}
