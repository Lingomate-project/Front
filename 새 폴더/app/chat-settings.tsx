"use client"

import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { useState } from "react"
import { ChevronLeft } from "lucide-react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function ChatSettingsScreen() {
  const router = useRouter()
  const [country, setCountry] = useState("United States")
  const [style, setStyle] = useState("Casual English")
  const [gender, setGender] = useState("Female Tone")

  const saveSettings = async () => {
    await AsyncStorage.setItem("chat-settings", JSON.stringify({ country, style, gender }))
    router.back()
  }

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="px-6 pt-12 pb-6">
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#2c303c" />
          </TouchableOpacity>
        </View>

        <Text className="text-2xl font-bold text-center mb-8">회화 설정</Text>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-[#6b7280] mb-3">Country</Text>
          {["United Kingdom", "United States", "Australia"].map((item) => (
            <TouchableOpacity
              key={item}
              className={`bg-[#2c303c] rounded-xl py-4 mb-3 ${country === item ? "opacity-100" : "opacity-70"}`}
              onPress={() => setCountry(item)}
            >
              <Text className="text-white text-center font-semibold">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-[#6b7280] mb-3">Style</Text>
          {["Formal English", "Casual English"].map((item) => (
            <TouchableOpacity
              key={item}
              className={`bg-[#2c303c] rounded-xl py-4 mb-3 ${style === item ? "opacity-100" : "opacity-70"}`}
              onPress={() => setStyle(item)}
            >
              <Text className="text-white text-center font-semibold">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="mb-6">
          <Text className="text-sm font-semibold text-[#6b7280] mb-3">Gender</Text>
          {["Female Tone", "Male Tone"].map((item) => (
            <TouchableOpacity
              key={item}
              className={`bg-[#2c303c] rounded-xl py-4 mb-3 ${gender === item ? "opacity-100" : "opacity-70"}`}
              onPress={() => setGender(item)}
            >
              <Text className="text-white text-center font-semibold">{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity className="bg-[#e8eaf0] rounded-xl py-4" onPress={saveSettings}>
          <Text className="text-[#2c303c] text-center font-semibold">변경 내용 저장</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
