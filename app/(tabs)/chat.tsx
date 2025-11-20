"use client"

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { ArrowLeft, Mic, Send } from "lucide-react-native"

export default function ChatScreen() {
  const router = useRouter()
  const [mode, setMode] = useState<"Casual" | "Formal">("Casual")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello how are you today?", isUser: true },
    { id: 2, text: "Hello, i'm fine,how can i help you?", isUser: false },
    { id: 3, text: "What is the best programming language?", isUser: true },
    {
      id: 4,
      text: "There are many programming languages in the market that are used in designing and building websites, various applications and other tasks.",
      isUser: false,
    },
  ])

  const sendMessage = () => {
    if (!message.trim()) return
    setMessages([...messages, { id: Date.now(), text: message, isUser: true }])
    setMessage("")
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "This is a simulated response from the AI.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} className="flex-1 bg-[#f5f5f7]">
      <View className="px-4 py-3 flex-row items-center justify-between bg-[#f5f5f7] pt-12">
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <View className="flex-row items-center gap-2">
          <Text className="text-lg font-semibold">{mode === "Casual" ? "😊 Casual Mode" : "👔 Formal Mode"}</Text>
        </View>
        <TouchableOpacity
          className="bg-white px-3 py-1.5 rounded-full"
          onPress={() => setMode(mode === "Casual" ? "Formal" : "Casual")}
        >
          <Text className="text-xs font-medium text-gray-600">모드 변경</Text>
        </TouchableOpacity>
      </View>

      <View className="items-center py-6">
        <Image source={{ uri: "/images/image.png" }} className="w-24 h-24" resizeMode="contain" />
      </View>

      <ScrollView className="flex-1 px-4">
        {messages.map((msg) => (
          <View key={msg.id} className={`mb-4 max-w-[80%] ${msg.isUser ? "self-end" : "self-start"}`}>
            <View
              className={`p-4 rounded-2xl ${
                msg.isUser ? "bg-[#d5d8e0] rounded-tr-none" : "bg-[#a5aab4] rounded-tl-none"
              }`}
            >
              <Text className="text-[#2c303c] leading-5">{msg.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className="p-4 pb-8">
        <View className="flex-row items-center gap-3">
          <View className="flex-1 bg-white rounded-full h-12 flex-row items-center px-4 shadow-sm">
            <TextInput
              className="flex-1 text-base text-[#2c303c]"
              placeholder="Hello, how are you today?"
              value={message}
              onChangeText={setMessage}
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity>
              <Mic size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={sendMessage}
            className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm"
          >
            <Send size={20} color="#9ca3af" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
