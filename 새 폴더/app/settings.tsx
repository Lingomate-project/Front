"use client"

import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native"
import { useRouter } from "expo-router"
import { ArrowLeft, User, Lock, Bell, Mail, ChevronRight } from "lucide-react-native"
import { useState } from "react"

export default function SettingsScreen() {
  const router = useRouter()
  const [pushEnabled, setPushEnabled] = useState(false)

  const MenuItem = ({ icon: Icon, label, onPress, showToggle, toggleValue, onToggle }: any) => (
    <TouchableOpacity
      className="bg-[#d5d8e0] p-4 rounded-xl flex-row items-center justify-between mb-3"
      onPress={onPress}
      disabled={showToggle}
    >
      <View className="flex-row items-center gap-3">
        <Icon size={20} color="#000" />
        <Text className="text-base font-medium text-[#2c303c]">{label}</Text>
      </View>
      {showToggle ? (
        <Switch value={toggleValue} onValueChange={onToggle} trackColor={{ false: "#767577", true: "#2563eb" }} />
      ) : (
        <ChevronRight size={20} color="#6b7280" />
      )}
    </TouchableOpacity>
  )

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="pt-12 pb-6 px-6">
        <View className="flex-row items-center mb-8">
          <TouchableOpacity onPress={() => router.back()} className="absolute left-0 z-10">
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-bold text-center text-[#2c303c] mb-8">설정</Text>

        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-white rounded-full items-center justify-center border-4 border-black mb-3">
            <User size={48} color="#000" />
          </View>
          <Text className="text-sm text-gray-500 mb-6">사진 변경</Text>

          <View className="w-full flex-row justify-between items-center border-b border-gray-300 pb-2 mb-8">
            <Text className="text-base text-[#2c303c]">이름</Text>
            <TouchableOpacity>
              <Text className="text-sm text-gray-500">변경하기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="space-y-3">
          <MenuItem icon={Lock} label="비밀번호 변경" onPress={() => {}} />
          <MenuItem icon={Bell} label="푸시 알림" showToggle toggleValue={pushEnabled} onToggle={setPushEnabled} />
          <MenuItem icon={Mail} label="구독" onPress={() => router.push("/subscription")} />
          <MenuItem icon={User} label="계정 관리" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  )
}
