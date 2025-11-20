import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Settings as SettingsIcon } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-[#f5f5f7]">
      <View className="px-6 pt-12 pb-6">
        <View className="flex-row items-center justify-center gap-0.5 mb-8">
          <Text className="text-2xl font-bold text-[#2c303c]">LING</Text>
          <Image
            source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
            className="w-6 h-6"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-[#2c303c]">MATE</Text>
        </View>

        <View className="mb-4">
          <Text className="text-xl font-bold text-[#2c303c] text-center mb-1">
            안녕하세요!
          </Text>
          <Text className="text-sm text-[#6b7280] text-center">
            오늘도 영어와 함께해보세요.
          </Text>
        </View>

        <View className="bg-[#e8eaf0] rounded-2xl p-4 mb-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-base font-semibold text-[#2c303c]">오늘의 학습</Text>
            <Text className="text-xs text-[#6b7280]">경과</Text>
          </View>
          
          <View className="flex-row justify-center gap-4 mb-2">
            {[1, 2, 3].map((_, index) => (
              <Image
                key={index}
                source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
                className="w-14 h-14"
                resizeMode="contain"
              />
            ))}
          </View>
          
          <Text className="text-center text-xs text-[#6b7280]">1회 남음</Text>
        </View>

        <View className="bg-[#e8eaf0] rounded-2xl p-6 relative">
          <TouchableOpacity
            className="absolute top-4 right-4 z-10"
            onPress={() => router.push('/chat-settings')}
          >
            <SettingsIcon size={20} color="#6b7280" />
          </TouchableOpacity>

          <View className="items-center mb-4">
            <View className="w-24 h-24 bg-white rounded-full items-center justify-center mb-4">
              <Image
                source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
                className="w-20 h-20"
                resizeMode="contain"
              />
            </View>
            
            <Text className="text-lg font-bold text-[#2c303c] mb-1">
              AI와 회화 시작하기
            </Text>
            <Text className="text-sm text-[#6b7280] text-center">
              새로운 회화를 시작해보세요.
            </Text>
          </View>

          <TouchableOpacity
            className="bg-[#2c303c] rounded-xl py-3 items-center"
            onPress={() => router.push('/chat')}
          >
            <Text className="text-white font-semibold">대화 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
