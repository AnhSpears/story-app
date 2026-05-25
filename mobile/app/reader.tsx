import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Reader Screen - Full Screen Reading
 * This will contain:
 * - Full screen text display
 * - Customizable text settings
 * - Chapter navigation
 * - Progress tracking
 * - Audio player integration
 */

export default function ReaderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Màn Đọc</Text>
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
