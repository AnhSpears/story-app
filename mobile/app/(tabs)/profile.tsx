import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

/**
 * Profile Screen - Placeholder
 * This will contain:
 * - User profile information
 * - Reading settings
 * - Audio settings
 * - App settings
 * - About
 */

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hồ Sơ</Text>
        <Text style={styles.subtitle}>Đang phát triển...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
  },
});
