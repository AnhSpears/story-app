import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

/**
 * Story Detail Screen - Placeholder
 * This will contain:
 * - Story cover image
 * - Story metadata
 * - Description
 * - Chapter list
 * - Action buttons (Read/Listen/Favorite)
 * - Related stories
 */

export default function StoryDetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi Tiết Truyện</Text>
      <Text style={styles.subtitle}>Story ID: {id}</Text>
      <Text style={styles.text}>Đang phát triển...</Text>
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
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#7F8C8D',
  },
});
