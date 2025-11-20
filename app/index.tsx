import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const router = useRouter();
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    const dotInterval = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % 3);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <View className="flex-1 bg-[#e8eaf0] items-center justify-center px-6">
      <View className="items-center mb-32">
        <Image
          source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
          className="w-40 h-40 mb-8"
          resizeMode="contain"
        />
        
        <View className="flex-row items-center gap-1 mb-2">
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentDot === index ? 'bg-[#2c303c]' : 'bg-[#d5d8e0]'
              }`}
            />
          ))}
        </View>
      </View>

      <View className="absolute bottom-16 flex-row items-center gap-0.5">
        <Text className="text-2xl font-bold text-[#2c303c]">LING</Text>
        <Image
          source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
          className="w-7 h-7"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-[#2c303c]">MATE</Text>
      </View>
      
      <Text className="absolute bottom-8 text-sm text-[#6b7280]">
        English × 한국어
      </Text>
    </View>
  );
}
