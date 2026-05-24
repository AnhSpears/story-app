/**
 * App Configuration
 */

export const APP_CONFIG = {
  // App Info
  APP_NAME: 'Truyện Plus',
  APP_VERSION: '1.0.0',
  BUILD_VERSION: '1',

  // API
  API_BASE_URL: process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000',
  API_TIMEOUT: 30000,

  // Storage
  STORAGE_VERSION: 1,

  // Pagination
  ITEMS_PER_PAGE: 20,
  CHAPTERS_PER_PAGE: 50,

  // Audio
  DEFAULT_PLAYBACK_SPEED: 1.0,
  DEFAULT_SKIP_DURATION: 15,
  MIN_PLAYBACK_SPEED: 0.75,
  MAX_PLAYBACK_SPEED: 2.0,
  PLAYBACK_SPEEDS: [0.75, 1.0, 1.25, 1.5, 2.0],

  // Reading
  MIN_FONT_SIZE: 12,
  MAX_FONT_SIZE: 24,
  DEFAULT_FONT_SIZE: 16,
  MIN_LINE_HEIGHT: 1.0,
  MAX_LINE_HEIGHT: 2.5,
  DEFAULT_LINE_HEIGHT: 1.5,
  FONT_FAMILIES: ['system', 'serif', 'sans-serif', 'monospace'],

  // Sleep Timer
  SLEEP_TIMER_OPTIONS: [5, 10, 30], // minutes
  SLEEP_TIMER_END_OF_CHAPTER: -1,

  // History
  MAX_HISTORY_ITEMS: 50,
  MAX_SEARCH_HISTORY: 20,

  // Notifications
  NOTIFICATION_TYPES: {
    NEW_CHAPTER: 'new_chapter',
    FAVORITE_UPDATED: 'favorite_updated',
    RECOMMENDATION: 'recommendation',
    SYSTEM: 'system',
  },

  // Themes
  THEMES: {
    LIGHT: 'light',
    DARK: 'dark',
  },

  // Languages
  DEFAULT_LANGUAGE: 'vi',
  SUPPORTED_LANGUAGES: ['vi', 'en'],

  // Feature Flags
  ENABLE_OFFLINE_MODE: true,
  ENABLE_AUDIO_PLAYER: true,
  ENABLE_COMMENTS: false, // Phase 2+
  ENABLE_RATINGS: false, // Phase 2+
  ENABLE_PREMIUM: false, // Phase 4
  ENABLE_ADS: false, // Phase 4

  // Timeouts
  AUTO_SAVE_INTERVAL: 30000, // 30 seconds
  SYNC_INTERVAL: 60000, // 1 minute
  CACHE_EXPIRY: 3600000, // 1 hour
};

export const COLORS = {
  PRIMARY: '#FF6B6B',
  SECONDARY: '#4ECDC4',
  ACCENT: '#FFE66D',
  BACKGROUND: '#FFFFFF',
  TEXT: '#2C3E50',
  TEXT_LIGHT: '#7F8C8D',
  BORDER: '#E1E8ED',
  SUCCESS: '#27AE60',
  WARNING: '#F39C12',
  ERROR: '#E74C3C',
  SEPIA: '#FBF5E6',
  DARK: '#1A1A1A',
  GREEN: '#E8F5E9',
};

export const FONTS = {
  REGULAR: 'System',
  SERIF: 'Merriweather',
  SANS_SERIF: 'OpenSans',
  MONOSPACE: 'Courier New',
};
