import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Mic, Send } from 'lucide-react-native';

export default function ChatScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello how are you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('YOUR_BACKEND_API_URL/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('[v0] Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-[#f5f5f7]"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="flex-1">
        <View className="bg-white px-4 pt-12 pb-4 flex-row items-center border-b border-[#e8eaf0]">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#2c303c" />
          </TouchableOpacity>
          <Text className="flex-1 text-center text-base font-semibold">
            😊 Casual Mode
          </Text>
          <View className="w-6" />
        </View>

        <ScrollView 
          ref={scrollViewRef}
          className="flex-1 px-4 py-6"
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
        >
          <View className="items-center mb-6">
            <Image
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
              className="w-32 h-32"
              resizeMode="contain"
            />
          </View>

          {messages.map((msg, index) => (
            <View
              key={index}
              className={`mb-4 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
            >
              <View
                className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-[#2c303c]'
                    : 'bg-[#e8eaf0]'
                }`}
              >
                <Text className={msg.role === 'user' ? 'text-white' : 'text-[#2c303c]'}>
                  {msg.content}
                </Text>
              </View>
            </View>
          ))}

          {isLoading && (
            <View className="items-start mb-4">
              <View className="bg-[#e8eaf0] px-4 py-3 rounded-2xl">
                <Text className="text-[#6b7280]">typing...</Text>
              </View>
            </View>
          )}
        </ScrollView>

        <View className="px-4 py-3 bg-white border-t border-[#e8eaf0]">
          <View className="flex-row items-center gap-2">
            <View className="flex-1 flex-row items-center bg-[#e8eaf0] rounded-full px-4">
              <TextInput
                className="flex-1 py-3 text-base"
                placeholder="Hello, how are you today?"
                placeholderTextColor="#9ca3af"
                value={input}
                onChangeText={setInput}
                onSubmitEditing={sendMessage}
              />
              <TouchableOpacity>
                <Mic size={20} color="#6b7280" />
              </TouchableOpacity>
            </View>
            
            <TouchableOpacity
              className="w-12 h-12 bg-[#2c303c] rounded-full items-center justify-center"
              onPress={sendMessage}
            >
              <Send size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
