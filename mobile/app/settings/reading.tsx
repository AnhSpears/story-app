import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Reading Settings Screen - Placeholder
 * This will contain:
 * - Font size adjustment
 * - Font family selection
 * - Line height adjustment
 * - Margin adjustment
 * - Background color selection
 * - Night mode toggle
 */

export default function ReadingSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cài Đặt Đọc</Text>
      <Text style={styles.subtitle}>Đang phát triển...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
