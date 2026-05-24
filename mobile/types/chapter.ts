/**
 * Chapter Type Definitions
 * Defines all interfaces for chapter data
 */

export interface Chapter {
  id: string;
  storyId: string;
  chapterNumber: number;
  title: string;
  content: string;
  excerpt?: string;
  audioUrl?: string;
  audioDuration?: number; // in seconds
  audioSize?: number; // in bytes
  isFree: boolean;
  wordCount?: number;
  views: number;
  listens: number;
  isPublished?: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChapterListItem {
  id: string;
  chapterNumber: number;
  title: string;
  isRead: boolean;
  isListened: boolean;
  hasAudio: boolean;
  audioDuration?: number;
  views: number;
  listens: number;
}

export interface ChapterWithProgress extends Chapter {
  readProgress?: number; // 0-100
  listenProgress?: number; // 0-100
  isRead: boolean;
  isListened: boolean;
}

export interface ChapterContent {
  id: string;
  storyId: string;
  chapterNumber: number;
  title: string;
  content: string;
  storyTitle: string;
  storyAuthor: string;
  previousChapterNumber?: number;
  nextChapterNumber?: number;
}

export interface ChapterAudio {
  id: string;
  chapterNumber: number;
  chapterTitle: string;
  storyTitle: string;
  audioUrl: string;
  duration: number;
  size: number;
}

export interface ChapterListResponse {
  data: Chapter[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface ChapterFilter {
  search?: string;
  isRead?: boolean;
  isListened?: boolean;
  hasAudio?: boolean;
}

export interface ChapterSort {
  key: 'number' | 'title' | 'updated' | 'created';
  order: 'asc' | 'desc';
}
