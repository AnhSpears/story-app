/**
 * User Type Definitions
 * Defines all interfaces for user data
 */

export interface User {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  avatarUrl?: string;
  bio?: string;
  isAdmin?: boolean;
  createdAt?: string;
  updatedAt?: string;
  lastLoginAt?: string;
}

export interface UserProfile extends User {
  favoriteCount?: number;
  readingCount?: number;
  listeningCount?: number;
}

export interface ReadingSettings {
  fontSize: number; // 12-24
  fontFamily: 'system' | 'serif' | 'sans-serif' | 'monospace';
  lineHeight: number; // 1.0-2.5
  marginLeft: number; // 0-30
  marginRight: number; // 0-30
  backgroundColor: 'white' | 'sepia' | 'dark' | 'green';
  nightMode: boolean;
  eyeCareMode: boolean;
  textColor?: string;
  brightness?: number; // 0-100
  autoScroll?: boolean;
  autoScrollSpeed?: number; // words per minute
}

export interface AudioSettings {
  defaultSpeed: number; // 0.75-2.0
  defaultSkipDuration: number; // 10, 15, or 30 seconds
  autoPlayNextChapter: boolean;
  backgroundPlayback: boolean;
}

export interface UserSettings {
  reading: ReadingSettings;
  audio: AudioSettings;
  notifications?: {
    newChapter: boolean;
    favoriteUpdated: boolean;
    recommendations: boolean;
  };
}

export const DEFAULT_READING_SETTINGS: ReadingSettings = {
  fontSize: 16,
  fontFamily: 'sans-serif',
  lineHeight: 1.5,
  marginLeft: 15,
  marginRight: 15,
  backgroundColor: 'white',
  nightMode: false,
  eyeCareMode: false,
  brightness: 100,
  autoScroll: false,
};

export const DEFAULT_AUDIO_SETTINGS: AudioSettings = {
  defaultSpeed: 1.0,
  defaultSkipDuration: 15,
  autoPlayNextChapter: true,
  backgroundPlayback: true,
};
