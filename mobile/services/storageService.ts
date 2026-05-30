/**
 * AsyncStorage Service
 * Handles all local data persistence for Phase 1
 * Manages: favorites, reading progress, listening progress, settings, history, search history
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Story,
  Chapter,
  ReadingProgress,
  ListeningProgress,
  UserSettings,
  DEFAULT_READING_SETTINGS,
  DEFAULT_AUDIO_SETTINGS,
  HistoryItem,
  SearchHistoryItem,
  DownloadItem,
} from '../types';

const STORAGE_KEYS = {
  FAVORITES: '@truyen_plus_favorites',
  READING_PROGRESS: '@truyen_plus_reading_progress',
  LISTENING_PROGRESS: '@truyen_plus_listening_progress',
  USER_SETTINGS: '@truyen_plus_user_settings',
  READING_HISTORY: '@truyen_plus_reading_history',
  LISTENING_HISTORY: '@truyen_plus_listening_history',
  SEARCH_HISTORY: '@truyen_plus_search_history',
  DOWNLOADED_STORIES: '@truyen_plus_downloaded_stories',
} as const;

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize storage with default values if empty
 */
export const initializeStorage = async (): Promise<void> => {
  try {
    // Check if already initialized
    const existingSettings = await AsyncStorage.getItem(STORAGE_KEYS.USER_SETTINGS);
    if (existingSettings) return; // Already initialized

    // Initialize all storage keys with default values
    const defaultData = {
      [STORAGE_KEYS.FAVORITES]: JSON.stringify([]),
      [STORAGE_KEYS.READING_PROGRESS]: JSON.stringify({}),
      [STORAGE_KEYS.LISTENING_PROGRESS]: JSON.stringify({}),
      [STORAGE_KEYS.USER_SETTINGS]: JSON.stringify({
        reading: DEFAULT_READING_SETTINGS,
        audio: DEFAULT_AUDIO_SETTINGS,
      }),
      [STORAGE_KEYS.READING_HISTORY]: JSON.stringify([]),
      [STORAGE_KEYS.LISTENING_HISTORY]: JSON.stringify([]),
      [STORAGE_KEYS.SEARCH_HISTORY]: JSON.stringify([]),
      [STORAGE_KEYS.DOWNLOADED_STORIES]: JSON.stringify([]),
    };

    await AsyncStorage.multiSet(Object.entries(defaultData));
    console.log('✅ Storage initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing storage:', error);
  }
};

// ============================================
// FAVORITES MANAGEMENT
// ============================================

/**
 * Get all favorite story IDs
 */
export const getFavorites = async (): Promise<string[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Error getting favorites:', error);
    return [];
  }
};

/**
 * Check if a story is favorited
 */
export const isFavorited = async (storyId: string): Promise<boolean> => {
  try {
    const favorites = await getFavorites();
    return favorites.includes(storyId);
  } catch (error) {
    console.error('❌ Error checking if favorited:', error);
    return false;
  }
};

/**
 * Add story to favorites
 */
export const addFavorite = async (storyId: string): Promise<void> => {
  try {
    const favorites = await getFavorites();
    if (!favorites.includes(storyId)) {
      favorites.push(storyId);
      await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    }
  } catch (error) {
    console.error('❌ Error adding favorite:', error);
  }
};

/**
 * Remove story from favorites
 */
export const removeFavorite = async (storyId: string): Promise<void> => {
  try {
    const favorites = await getFavorites();
    const filtered = favorites.filter(id => id !== storyId);
    await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(filtered));
  } catch (error) {
    console.error('❌ Error removing favorite:', error);
  }
};

/**
 * Toggle favorite status
 */
export const toggleFavorite = async (storyId: string): Promise<boolean> => {
  try {
    const isFav = await isFavorited(storyId);
    if (isFav) {
      await removeFavorite(storyId);
      return false;
    } else {
      await addFavorite(storyId);
      return true;
    }
  } catch (error) {
    console.error('❌ Error toggling favorite:', error);
    return false;
  }
};

/**
 * Clear all favorites
 */
export const clearFavorites = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify([]));
  } catch (error) {
    console.error('❌ Error clearing favorites:', error);
  }
};

// ============================================
// READING PROGRESS MANAGEMENT
// ============================================

/**
 * Get reading progress for a story
 */
export const getReadingProgress = async (storyId: string): Promise<ReadingProgress | null> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.READING_PROGRESS);
    const progress = data ? JSON.parse(data) : {};
    return progress[storyId] || null;
  } catch (error) {
    console.error('❌ Error getting reading progress:', error);
    return null;
  }
};

/**
 * Get all reading progress
 */
export const getAllReadingProgress = async (): Promise<Record<string, ReadingProgress>> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.READING_PROGRESS);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('❌ Error getting all reading progress:', error);
    return {};
  }
};

/**
 * Save reading progress for a story
 */
export const saveReadingProgress = async (
  storyId: string,
  chapterId: string,
  chapterNumber: number,
  progressPercentage: number
): Promise<void> => {
  try {
    const allProgress = await getAllReadingProgress();
    allProgress[storyId] = {
      storyId,
      currentChapterId: chapterId,
      currentChapterNumber: chapterNumber,
      progressPercentage,
      lastReadAt: new Date().toISOString(),
    };
    await AsyncStorage.setItem(STORAGE_KEYS.READING_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('❌ Error saving reading progress:', error);
  }
};

/**
 * Clear reading progress for a story
 */
export const clearReadingProgress = async (storyId: string): Promise<void> => {
  try {
    const allProgress = await getAllReadingProgress();
    delete allProgress[storyId];
    await AsyncStorage.setItem(STORAGE_KEYS.READING_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('❌ Error clearing reading progress:', error);
  }
};

// ============================================
// LISTENING PROGRESS MANAGEMENT
// ============================================

/**
 * Get listening progress for a chapter
 */
export const getListeningProgress = async (chapterId: string): Promise<ListeningProgress | null> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.LISTENING_PROGRESS);
    const progress = data ? JSON.parse(data) : {};
    return progress[chapterId] || null;
  } catch (error) {
    console.error('❌ Error getting listening progress:', error);
    return null;
  }
};

/**
 * Get all listening progress
 */
export const getAllListeningProgress = async (): Promise<Record<string, ListeningProgress>> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.LISTENING_PROGRESS);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('❌ Error getting all listening progress:', error);
    return {};
  }
};

/**
 * Save listening progress for a chapter
 */
export const saveListeningProgress = async (
  chapterId: string,
  storyId: string,
  currentTimeSeconds: number,
  durationSeconds: number
): Promise<void> => {
  try {
    const allProgress = await getAllListeningProgress();
    allProgress[chapterId] = {
      chapterId,
      storyId,
      currentTimeSeconds,
      durationSeconds,
      lastListenedAt: new Date().toISOString(),
    };
    await AsyncStorage.setItem(STORAGE_KEYS.LISTENING_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('❌ Error saving listening progress:', error);
  }
};

/**
 * Mark chapter as listened
 */
export const markChapterAsListened = async (
  chapterId: string,
  storyId: string,
  durationSeconds: number
): Promise<void> => {
  try {
    const allProgress = await getAllListeningProgress();
    allProgress[chapterId] = {
      chapterId,
      storyId,
      currentTimeSeconds: durationSeconds,
      durationSeconds,
      lastListenedAt: new Date().toISOString(),
    };
    await AsyncStorage.setItem(STORAGE_KEYS.LISTENING_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('❌ Error marking chapter as listened:', error);
  }
};

/**
 * Clear listening progress for a chapter
 */
export const clearListeningProgress = async (chapterId: string): Promise<void> => {
  try {
    const allProgress = await getAllListeningProgress();
    delete allProgress[chapterId];
    await AsyncStorage.setItem(STORAGE_KEYS.LISTENING_PROGRESS, JSON.stringify(allProgress));
  } catch (error) {
    console.error('❌ Error clearing listening progress:', error);
  }
};

// ============================================
// USER SETTINGS MANAGEMENT
// ============================================

/**
 * Get user settings
 */
export const getUserSettings = async (): Promise<UserSettings> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.USER_SETTINGS);
    return data
      ? JSON.parse(data)
      : {
          reading: DEFAULT_READING_SETTINGS,
          audio: DEFAULT_AUDIO_SETTINGS,
        };
  } catch (error) {
    console.error('❌ Error getting user settings:', error);
    return {
      reading: DEFAULT_READING_SETTINGS,
      audio: DEFAULT_AUDIO_SETTINGS,
    };
  }
};

/**
 * Update reading settings
 */
export const updateReadingSettings = async (settings: Partial<typeof DEFAULT_READING_SETTINGS>): Promise<void> => {
  try {
    const currentSettings = await getUserSettings();
    const updated = {
      ...currentSettings,
      reading: { ...currentSettings.reading, ...settings },
    };
    await AsyncStorage.setItem(STORAGE_KEYS.USER_SETTINGS, JSON.stringify(updated));
  } catch (error) {
    console.error('❌ Error updating reading settings:', error);
  }
};

/**
 * Update audio settings
 */
export const updateAudioSettings = async (settings: Partial<typeof DEFAULT_AUDIO_SETTINGS>): Promise<void> => {
  try {
    const currentSettings = await getUserSettings();
    const updated = {
      ...currentSettings,
      audio: { ...currentSettings.audio, ...settings },
    };
    await AsyncStorage.setItem(STORAGE_KEYS.USER_SETTINGS, JSON.stringify(updated));
  } catch (error) {
    console.error('❌ Error updating audio settings:', error);
  }
};

/**
 * Reset settings to defaults
 */
export const resetSettings = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEYS.USER_SETTINGS,
      JSON.stringify({
        reading: DEFAULT_READING_SETTINGS,
        audio: DEFAULT_AUDIO_SETTINGS,
      })
    );
  } catch (error) {
    console.error('❌ Error resetting settings:', error);
  }
};

// ============================================
// READING HISTORY MANAGEMENT
// ============================================

/**
 * Get reading history
 */
export const getReadingHistory = async (): Promise<HistoryItem[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.READING_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Error getting reading history:', error);
    return [];
  }
};

/**
 * Add to reading history
 */
export const addToReadingHistory = async (item: HistoryItem): Promise<void> => {
  try {
    const history = await getReadingHistory();
    // Remove duplicate if exists
    const filtered = history.filter(h => h.storyId !== item.storyId);
    // Add to beginning
    filtered.unshift(item);
    // Keep only last 50 items
    const limited = filtered.slice(0, 50);
    await AsyncStorage.setItem(STORAGE_KEYS.READING_HISTORY, JSON.stringify(limited));
  } catch (error) {
    console.error('❌ Error adding to reading history:', error);
  }
};

/**
 * Clear reading history
 */
export const clearReadingHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.READING_HISTORY, JSON.stringify([]));
  } catch (error) {
    console.error('❌ Error clearing reading history:', error);
  }
};

// ============================================
// LISTENING HISTORY MANAGEMENT
// ============================================

/**
 * Get listening history
 */
export const getListeningHistory = async (): Promise<HistoryItem[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.LISTENING_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Error getting listening history:', error);
    return [];
  }
};

/**
 * Add to listening history
 */
export const addToListeningHistory = async (item: HistoryItem): Promise<void> => {
  try {
    const history = await getListeningHistory();
    // Remove duplicate if exists
    const filtered = history.filter(h => h.storyId !== item.storyId);
    // Add to beginning
    filtered.unshift(item);
    // Keep only last 50 items
    const limited = filtered.slice(0, 50);
    await AsyncStorage.setItem(STORAGE_KEYS.LISTENING_HISTORY, JSON.stringify(limited));
  } catch (error) {
    console.error('❌ Error adding to listening history:', error);
  }
};

/**
 * Clear listening history
 */
export const clearListeningHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.LISTENING_HISTORY, JSON.stringify([]));
  } catch (error) {
    console.error('❌ Error clearing listening history:', error);
  }
};

// ============================================
// SEARCH HISTORY MANAGEMENT
// ============================================

/**
 * Get search history
 */
export const getSearchHistory = async (): Promise<SearchHistoryItem[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.SEARCH_HISTORY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Error getting search history:', error);
    return [];
  }
};

/**
 * Add to search history
 */
export const addToSearchHistory = async (query: string, resultCount: number): Promise<void> => {
  try {
    const history = await getSearchHistory();
    // Remove duplicate if exists
    const filtered = history.filter(h => h.query.toLowerCase() !== query.toLowerCase());
    // Add to beginning
    filtered.unshift({
      query,
      timestamp: new Date().toISOString(),
      resultCount,
    });
    // Keep only last 20 items
    const limited = filtered.slice(0, 20);
    await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(limited));
  } catch (error) {
    console.error('❌ Error adding to search history:', error);
  }
};

/**
 * Remove from search history
 */
export const removeFromSearchHistory = async (query: string): Promise<void> => {
  try {
    const history = await getSearchHistory();
    const filtered = history.filter(h => h.query.toLowerCase() !== query.toLowerCase());
    await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify(filtered));
  } catch (error) {
    console.error('❌ Error removing from search history:', error);
  }
};

/**
 * Clear search history
 */
export const clearSearchHistory = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.SEARCH_HISTORY, JSON.stringify([]));
  } catch (error) {
    console.error('❌ Error clearing search history:', error);
  }
};

// ============================================
// DOWNLOADED STORIES MANAGEMENT (Phase 1 basic)
// ============================================

/**
 * Get downloaded stories
 */
export const getDownloadedStories = async (): Promise<DownloadItem[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEYS.DOWNLOADED_STORIES);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('❌ Error getting downloaded stories:', error);
    return [];
  }
};

/**
 * Add to downloaded stories
 */
export const addDownloadedStory = async (item: DownloadItem): Promise<void> => {
  try {
    const downloads = await getDownloadedStories();
    // Check if already exists
    const exists = downloads.some(d => d.id === item.id);
    if (!exists) {
      downloads.push(item);
      await AsyncStorage.setItem(STORAGE_KEYS.DOWNLOADED_STORIES, JSON.stringify(downloads));
    }
  } catch (error) {
    console.error('❌ Error adding downloaded story:', error);
  }
};

/**
 * Remove from downloaded stories
 */
export const removeDownloadedStory = async (id: string): Promise<void> => {
  try {
    const downloads = await getDownloadedStories();
    const filtered = downloads.filter(d => d.id !== id);
    await AsyncStorage.setItem(STORAGE_KEYS.DOWNLOADED_STORIES, JSON.stringify(filtered));
  } catch (error) {
    console.error('❌ Error removing downloaded story:', error);
  }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get continue reading story (most recent)
 */
export const getContinueReading = async (): Promise<HistoryItem | null> => {
  try {
    const history = await getReadingHistory();
    return history.length > 0 ? history[0] : null;
  } catch (error) {
    console.error('❌ Error getting continue reading:', error);
    return null;
  }
};

/**
 * Get continue listening story (most recent)
 */
export const getContinueListening = async (): Promise<HistoryItem | null> => {
  try {
    const history = await getListeningHistory();
    return history.length > 0 ? history[0] : null;
  } catch (error) {
    console.error('❌ Error getting continue listening:', error);
    return null;
  }
};

/**
 * Clear all storage data
 */
export const clearAllStorage = async (): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(Object.values(STORAGE_KEYS));
    console.log('✅ All storage cleared');
    // Re-initialize with defaults
    await initializeStorage();
  } catch (error) {
    console.error('❌ Error clearing all storage:', error);
  }
};

/**
 * Get storage size (approximate)
 */
export const getStorageSize = async (): Promise<string> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    let totalSize = 0;

    for (const key of keys) {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        totalSize += value.length;
      }
    }

    const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
    return `${sizeInMB} MB`;
  } catch (error) {
    console.error('❌ Error getting storage size:', error);
    return '0 MB';
  }
};
