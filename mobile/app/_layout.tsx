import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack } from 'expo-router';

/**
 * Root Layout
 * Defines the overall navigation structure of the app
 */
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      {/* Main app with tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Story detail modal */}
      <Stack.Screen
        name="stories/[id]"
        options={{
          presentation: 'card',
          animationEnabled: true,
        }}
      />

      {/* Reader screen */}
      <Stack.Screen
        name="reader"
        options={{
          presentation: 'fullScreen',
          animationEnabled: false,
        }}
      />

      {/* Advanced search screen */}
      <Stack.Screen
        name="search/advanced"
        options={{
          presentation: 'modal',
          animationEnabled: true,
        }}
      />

      {/* Reading settings screen */}
      <Stack.Screen
        name="settings/reading"
        options={{
          presentation: 'modal',
          animationEnabled: true,
        }}
      />
    </Stack>
  );
}
