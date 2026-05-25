/**
 * Category and Genre Definitions
 */

export const CATEGORIES = [
  { id: '1', name: 'Tiên Hiệp', slug: 'tien-hiep', icon: '✨', color: '#FFD700' },
  { id: '2', name: 'Kiếm Hiệp', slug: 'kiem-hiep', icon: '⚔️', color: '#C0C0C0' },
  { id: '3', name: 'Lãng Mạn', slug: 'lang-man', icon: '💕', color: '#FF69B4' },
  { id: '4', name: 'Hành Động', slug: 'hanh-dong', icon: '🔥', color: '#FF4500' },
  { id: '5', name: 'Huyền Bí', slug: 'huyen-bi', icon: '🌙', color: '#9370DB' },
  { id: '6', name: 'Khoa Học Viễn Tưởng', slug: 'khoa-hoc', icon: '🚀', color: '#00BFFF' },
  { id: '7', name: 'Hài Hước', slug: 'hai-huoc', icon: '😄', color: '#FFB6C1' },
  { id: '8', name: 'Slice of Life', slug: 'slice-of-life', icon: '🌸', color: '#98FB98' },
];

export const GENRES = [
  'Thần Thông',
  'Trường Học',
  'Chủ Nhân Quỳ',
  'Xuyên Không',
  'Phiêu Lưu',
  'Giang Hồ',
  'Phỏng Tưởng',
  'Thần Thoại',
  'Tâm Lý',
  'Tình Cảm',
  'Hồi Hộp',
  'Tội Phạm',
  'Chính Trị',
];

export const STATUS_OPTIONS = [
  { value: 'ongoing', label: 'Đang ra' },
  { value: 'completed', label: 'Hoàn thành' },
  { value: 'coming_soon', label: 'Sắp ra' },
];

export const SORT_OPTIONS = [
  { key: 'title', label: 'A-Z', icon: '📝' },
  { key: 'views', label: 'Lượt đọc', icon: '👁️' },
  { key: 'listens', label: 'Lượt nghe', icon: '👂' },
  { key: 'rating', label: 'Đánh giá', icon: '⭐' },
  { key: 'updated', label: 'Cập nhật mới', icon: '🆕' },
  { key: 'chapters', label: 'Số chương', icon: '📚' },
];
