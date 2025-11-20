import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function SignupScreen() {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('[v0] Signup initiated');
    router.replace('/(tabs)/home');
  };

  return (
    <View className="flex-1 bg-[#f5f5f7] items-center justify-center px-6">
      <View className="w-full max-w-md bg-[#e8eaf0] rounded-3xl p-6">
        <View className="items-center mb-6">
          <View className="flex-row items-center gap-0.5 mb-1">
            <Text className="text-2xl font-bold text-[#2c303c]">LING</Text>
            <Image
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-B0N5vik1voFc85HIKTQXWsYjNa9Csl.png' }}
              className="w-6 h-6"
              resizeMode="contain"
            />
            <Text className="text-2xl font-bold text-[#2c303c]">MATE</Text>
          </View>
          <Text className="text-sm text-[#6b7280]">AI와 함께하는 외국어 회화</Text>
        </View>

        <View className="gap-3">
          <TextInput
            className="bg-white rounded-xl px-4 py-3 text-base"
            placeholder="이메일"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            className="bg-white rounded-xl px-4 py-3 text-base"
            placeholder="닉네임"
            placeholderTextColor="#9ca3af"
            value={nickname}
            onChangeText={setNickname}
          />
          
          <TextInput
            className="bg-white rounded-xl px-4 py-3 text-base"
            placeholder="비밀번호"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TextInput
            className="bg-white rounded-xl px-4 py-3 text-base"
            placeholder="비밀번호 확인"
            placeholderTextColor="#9ca3af"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <TouchableOpacity
            className="bg-[#2c303c] rounded-xl py-3.5 items-center"
            onPress={handleSignup}
          >
            <Text className="text-white font-semibold text-base">회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
