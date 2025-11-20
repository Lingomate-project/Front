"use client"

import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { ArrowLeft, MessageSquare, Clock, MoreVertical } from "lucide-react-native"
import { useState } from "react"

export default function HistoryScreen() {
  const router = useRouter()
  const [history, setHistory] = useState([
    { id: 1, title: "In the public places", count: 13, time: "5 min ago" },
    { id: 2, title: "What is the reason of...", count: 4, time: "22 min ago" },
    { id: 3, title: "How are you feeling t...", count: 20, time: "1 hr ago" },
    { id: 4, title: "Hi, How can I help yo...", count: 18, time: "2 hrs ago" },
    { id: 5, title: "What is the point of li...", count: 7, time: "2 hrs ago" },
    { id: 6, title: "Go shwaty It's yout bi...", count: 12, time: "3 hrs ago" },
  ])

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="pt-12 pb-6 px-6">
        <View className="flex-row items-center mb-6">
          <TouchableOpacity onPress={() => router.back()} className="absolute left-0 z-10">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold text-center text-[#2c303c] mb-2">대화 내역</Text>
        <Text className="text-center text-[#6b7280] mb-8">Chats ({history.length})</Text>

        <View className="space-y-4 mb-8">
          {history.map((item) => (
            <View key={item.id} className="bg-white p-4 rounded-xl flex-row items-center justify-between shadow-sm">
              <Text className="font-semibold text-[#2c303c] flex-1 mr-2" numberOfLines={1}>
                {item.title}
              </Text>
              <View className="flex-row items-center gap-4">
                <View className="flex-row items-center gap-1">
                  <MessageSquare size={14} color="#6b7280" />
                  <Text className="text-xs text-[#6b7280]">{item.count}</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Clock size={14} color="#6b7280" />
                  <Text className="text-xs text-[#6b7280]">{item.time}</Text>
                </View>
                <MoreVertical size={16} color="#6b7280" />
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity className="w-full bg-[#d5d8e0] py-4 rounded-xl items-center" onPress={() => setHistory([])}>
          <Text className="text-[#2c303c] font-bold text-base">대화 내역 비우기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
