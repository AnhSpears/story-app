/**
 * useStorage Hook
 * Custom React hook for managing AsyncStorage data
 * Provides reactive access to stored data with automatic updates
 */

import { useState, useEffect, useCallback } from 'react';
import {
  getFavorites,
  isFavorited,
  addFavorite,
  removeFavorite,
  toggleFavorite,
  getReadingProgress,
  getAllReadingProgress,
  saveReadingProgress,
  getListeningProgress,
  getAllListeningProgress,
  saveListeningProgress,
  getUserSettings,
  updateReadingSettings,
  updateAudioSettings,
  getReadingHistory,
  addToReadingHistory,
  getListeningHistory,
  addToListeningHistory,
  getSearchHistory,
  addToSearchHistory,
  getContinueReading,
  getContinueListening,
} from '../services/storageService';
import type {
  ReadingProgress,
  ListeningProgress,
  UserSettings,
  HistoryItem,
  SearchHistoryItem,
  ReadingSettings,
  AudioSettings,
} from '../types';

// ============================================
// FAVORITES HOOK
// ============================================

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = useCallback(async () => {
    try {
      const data = await getFavorites();
      setFavorites(data);
    } catch (error) {
      console.error('Error loading favorites:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const toggle = useCallback(
    async (storyId: string) => {
      const isFav = favorites.includes(storyId);
      if (isFav) {
        setFavorites(favorites.filter(id => id !== storyId));
        await removeFavorite(storyId);
      } else {
        setFavorites([...favorites, storyId]);
        await addFavorite(storyId);
      }
    },
    [favorites]
  );

  const check = useCallback(
    async (storyId: string) => {
      return await isFavorited(storyId);
    },
    []
  );

  return { favorites, loading, toggle, check, refresh: loadFavorites };
};

// ============================================
// READING PROGRESS HOOK
// ============================================

export const useReadingProgress = () => {
  const [progress, setProgress] = useState<Record<string, ReadingProgress>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = useCallback(async () => {
    try {
      const data = await getAllReadingProgress();
      setProgress(data);
    } catch (error) {
      console.error('Error loading reading progress:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const save = useCallback(
    async (storyId: string, chapterId: string, chapterNumber: number, percent: number) => {
      await saveReadingProgress(storyId, chapterId, chapterNumber, percent);
      setProgress(prev => ({
        ...prev,
        [storyId]: {
          storyId,
          currentChapterId: chapterId,
          currentChapterNumber: chapterNumber,
          progressPercentage: percent,
          lastReadAt: new Date().toISOString(),
        },
      }));
    },
    []
  );

  const get = useCallback((storyId: string) => {
    return progress[storyId] || null;
  }, [progress]);

  return { progress, loading, save, get, refresh: loadProgress };
};

// ============================================
// LISTENING PROGRESS HOOK
// ============================================

export const useListeningProgress = () => {
  const [progress, setProgress] = useState<Record<string, ListeningProgress>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = useCallback(async () => {
    try {
      const data = await getAllListeningProgress();
      setProgress(data);
    } catch (error) {
      console.error('Error loading listening progress:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const save = useCallback(
    async (chapterId: string, storyId: string, currentTime: number, duration: number) => {
      await saveListeningProgress(chapterId, storyId, currentTime, duration);
      setProgress(prev => ({
        ...prev,
        [chapterId]: {
          chapterId,
          storyId,
          currentTimeSeconds: currentTime,
          durationSeconds: duration,
          lastListenedAt: new Date().toISOString(),
        },
      }));
    },
    []
  );

  const get = useCallback((chapterId: string) => {
    return progress[chapterId] || null;
  }, [progress]);

  return { progress, loading, save, get, refresh: loadProgress };
};

// ============================================
// USER SETTINGS HOOK
// ============================================

export const useUserSettings = () => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = useCallback(async () => {
    try {
      const data = await getUserSettings();
      setSettings(data);
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateReading = useCallback(
    async (newSettings: Partial<ReadingSettings>) => {
      await updateReadingSettings(newSettings);
      setSettings(prev =>
        prev ? { ...prev, reading: { ...prev.reading, ...newSettings } } : null
      );
    },
    []
  );

  const updateAudio = useCallback(
    async (newSettings: Partial<AudioSettings>) => {
      await updateAudioSettings(newSettings);
      setSettings(prev =>
        prev ? { ...prev, audio: { ...prev.audio, ...newSettings } } : null
      );
    },
    []
  );

  return { settings, loading, updateReading, updateAudio, refresh: loadSettings };
};

// ============================================
// READING HISTORY HOOK
// ============================================

export const useReadingHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = useCallback(async () => {
    try {
      const data = await getReadingHistory();
      setHistory(data);
    } catch (error) {
      console.error('Error loading reading history:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const add = useCallback(async (item: HistoryItem) => {
    await addToReadingHistory(item);
    setHistory(prev => [item, ...prev.filter(h => h.storyId !== item.storyId)].slice(0, 50));
  }, []);

  return { history, loading, add, refresh: loadHistory };
};

// ============================================
// LISTENING HISTORY HOOK
// ============================================

export const useListeningHistory = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = useCallback(async () => {
    try {
      const data = await getListeningHistory();
      setHistory(data);
    } catch (error) {
      console.error('Error loading listening history:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const add = useCallback(async (item: HistoryItem) => {
    await addToListeningHistory(item);
    setHistory(prev => [item, ...prev.filter(h => h.storyId !== item.storyId)].slice(0, 50));
  }, []);

  return { history, loading, add, refresh: loadHistory };
};

// ============================================
// SEARCH HISTORY HOOK
// ============================================

export const useSearchHistory = () => {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = useCallback(async () => {
    try {
      const data = await getSearchHistory();
      setHistory(data);
    } catch (error) {
      console.error('Error loading search history:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const add = useCallback(async (query: string, resultCount: number) => {
    await addToSearchHistory(query, resultCount);
    setHistory(prev => [
      { query, timestamp: new Date().toISOString(), resultCount },
      ...prev.filter(h => h.query.toLowerCase() !== query.toLowerCase()),
    ].slice(0, 20));
  }, []);

  return { history, loading, add, refresh: loadHistory };
};

// ============================================
// CONTINUE READING/LISTENING HOOK
// ============================================

export const useContinue = () => {
  const [reading, setReading] = useState<HistoryItem | null>(null);
  const [listening, setListening] = useState<HistoryItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContinue();
  }, []);

  const loadContinue = useCallback(async () => {
    try {
      const [readData, listenData] = await Promise.all([
        getContinueReading(),
        getContinueListening(),
      ]);
      setReading(readData);
      setListening(listenData);
    } catch (error) {
      console.error('Error loading continue data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { reading, listening, loading, refresh: loadContinue };
};
