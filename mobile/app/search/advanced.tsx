import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Advanced Search Screen - Placeholder
 * This will contain:
 * - Multi-criteria search
 * - Search history
 * - Autocomplete suggestions
 * - Search results
 */

export default function AdvancedSearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tìm Kiếm Nâng Cao</Text>
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
