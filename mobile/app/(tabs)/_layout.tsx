import React from 'react';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

/**
 * Tab Navigation Layout
 * Main navigation structure with 5 tabs
 */

interface TabBarIconProps {
  name: string;
  color: string;
  size?: number;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, color }) => {
  const icons: Record<string, string> = {
    home: '🏠',
    library: '📚',
    favorites: '❤️',
    history: '🕐',
    profile: '👤',
  };

  return (
    <Text style={{ fontSize: 24 }}>
      {icons[name] || '📖'}
    </Text>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#95959A',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#E1E8ED',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: '#fff',
          borderBottomColor: '#E1E8ED',
          borderBottomWidth: 1,
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '600',
          color: '#2C3E50',
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Trang Chủ',
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      {/* Library Tab */}
      <Tabs.Screen
        name="library"
        options={{
          title: 'Thư Viện',
          tabBarLabel: 'Thư Viện',
          tabBarIcon: ({ color }) => <TabBarIcon name="library" color={color} />,
        }}
      />

      {/* Favorites Tab */}
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Yêu Thích',
          tabBarLabel: 'Yêu Thích',
          tabBarIcon: ({ color }) => <TabBarIcon name="favorites" color={color} />,
        }}
      />

      {/* History Tab */}
      <Tabs.Screen
        name="history"
        options={{
          title: 'Lịch Sử',
          tabBarLabel: 'Lịch Sử',
          tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
        }}
      />

      {/* Profile/Settings Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Hồ Sơ',
          tabBarLabel: 'Hồ Sơ',
          tabBarIcon: ({ color }) => <TabBarIcon name="profile" color={color} />,
        }}
      />
    </Tabs>
  );
}
