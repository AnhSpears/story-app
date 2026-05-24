/**
 * Audio Type Definitions
 * Defines all interfaces for audio/playback data
 */

export interface AudioPlayerState {
  isPlaying: boolean;
  isPaused: boolean;
  isLoading: boolean;
  currentTime: number; // in seconds
  duration: number; // in seconds
  speed: number; // 0.75, 1.0, 1.25, 1.5, 2.0
  error?: string;
}

export interface AudioSource {
  id: string;
  url: string;
  title: string;
  author?: string;
  duration: number;
  type: 'remote' | 'local';
}

export interface PlaybackSession {
  chapterId: string;
  storyId: string;
  chapterNumber: number;
  chapterTitle: string;
  storyTitle: string;
  audioUrl: string;
  duration: number;
  currentTime: number;
  playbackSpeed: number;
  isPlaying: boolean;
}

export interface SleepTimer {
  isActive: boolean;
  duration?: number; // in seconds, or null for "end of chapter"
  type: 'minutes' | 'endOfChapter';
  endTime?: number; // timestamp
}

export interface SkipButton {
  duration: number; // in seconds
  icon: string;
  label: string;
}

export const SKIP_DURATIONS = [10, 15, 30];
export const PLAYBACK_SPEEDS = [0.75, 1.0, 1.25, 1.5, 2.0];
export const SLEEP_TIMER_OPTIONS = [
  { value: 0, label: 'No Timer' },
  { value: 300, label: '5 minutes' },
  { value: 600, label: '10 minutes' },
  { value: 1800, label: '30 minutes' },
  { value: -1, label: 'End of chapter' },
];

export interface AudioPlayerProps {
  audioUrl: string;
  duration: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onSpeedChange: (speed: number) => void;
  onSkipBack: () => void;
  onSkipForward: () => void;
  onPreviousChapter?: () => void;
  onNextChapter?: () => void;
  currentTime?: number;
  isPlaying?: boolean;
  playbackSpeed?: number;
}

export interface ListeningProgress {
  chapterId: string;
  storyId: string;
  currentTimeSeconds: number;
  durationSeconds: number;
  lastListenedAt: string;
  isListened: boolean;
}
