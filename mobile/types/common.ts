/**
 * Common Type Definitions
 * Shared types used across the app
 */

export type AsyncStorageKey = 
  | 'stories'
  | 'chapters'
  | 'favorites'
  | 'readingProgress'
  | 'listeningProgress'
  | 'userSettings'
  | 'searchHistory'
  | 'readingHistory'
  | 'listeningHistory'
  | 'downloads';

export interface AsyncStorageData {
  stories: any[];
  chapters: any[];
  favorites: string[]; // story IDs
  readingProgress: Record<string, ReadingProgress>;
  listeningProgress: Record<string, ListeningProgress>;
  userSettings: UserSettings;
  searchHistory: SearchHistoryItem[];
  readingHistory: HistoryItem[];
  listeningHistory: HistoryItem[];
  downloads: DownloadItem[];
}

export interface ReadingProgress {
  storyId: string;
  currentChapterId: string;
  currentChapterNumber: number;
  progressPercentage: number;
  lastReadAt: string;
}

export interface ListeningProgress {
  chapterId: string;
  storyId: string;
  currentTimeSeconds: number;
  durationSeconds: number;
  lastListenedAt: string;
}

export interface HistoryItem {
  storyId: string;
  storyTitle: string;
  storyAuthor: string;
  storyImage: string;
  chapterId?: string;
  chapterNumber?: number;
  chapterTitle?: string;
  lastAccessedAt: string;
  accessedType: 'read' | 'listen';
}

export interface SearchHistoryItem {
  query: string;
  timestamp: string;
  resultCount: number;
}

export interface DownloadItem {
  id: string;
  storyId: string;
  storyTitle: string;
  chapterId?: string;
  chapterNumber?: number;
  type: 'story' | 'chapter';
  size: number; // in bytes
  downloadedAt: string;
  progress: number; // 0-100
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ApiError {
  code: string;
  message: string;
  status: number;
}

export type Toast = {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
};

export interface UserSettings {
  theme: 'light' | 'dark';
  language: 'vi' | 'en';
  notifications: boolean;
}
