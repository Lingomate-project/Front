import { Tabs } from 'expo-router';
import { User, Home, Settings } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2c303c',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: '#5f6368',
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: '프로필',
          tabBarIcon: ({ color, size }) => <User size={size} color="#ffffff" />,
          tabBarLabel: () => <Text className="text-white text-xs">프로필</Text>,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: '홈',
          tabBarIcon: ({ color, size }) => <Home size={size} color="#ffffff" />,
          tabBarLabel: () => <Text className="text-white text-xs">홈</Text>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '설정',
          tabBarIcon: ({ color, size }) => <Settings size={size} color="#ffffff" />,
          tabBarLabel: () => <Text className="text-white text-xs">설정</Text>,
        }}
      />
    </Tabs>
  );
}
