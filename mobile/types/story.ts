/**
 * Story Type Definitions
 * Defines all interfaces for story data
 */

export interface Story {
  id: string;
  title: string;
  slug?: string;
  description: string;
  author: string;
  coverImageUrl: string;
  categoryId: string;
  categoryName?: string;
  status: 'ongoing' | 'completed' | 'coming_soon';
  totalChapters: number;
  views: number;
  listens: number;
  rating: number; // 0-5
  ratingCount?: number;
  isFree: boolean;
  isPublished?: boolean;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface StoryDetail extends Story {
  genres: string[];
  relatedStories?: Story[];
  favorite?: boolean;
  favoriteId?: string;
  downloaded?: boolean;
}

export interface StoryCard {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  categoryName: string;
  status: 'ongoing' | 'completed';
  rating: number;
  views: number;
  listens: number;
  hasAudio: boolean;
  isFavorite: boolean;
}

export interface StoryFilter {
  categories?: string[];
  status?: ('ongoing' | 'completed')[];
  hasAudio?: boolean;
  searchQuery?: string;
  minRating?: number;
}

export interface StorySortOption {
  key: 'title' | 'views' | 'listens' | 'rating' | 'updated' | 'chapters';
  order: 'asc' | 'desc';
  label: string;
}

export interface StoryListResponse {
  data: Story[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
