/**
 * Mock Data for Story App
 * Vietnamese stories, chapters, and test data
 * Used for Phase 1 local development
 */

import { Story, Chapter, StoryCard } from '../types';

// ============================================
// CATEGORIES/GENRES
// ============================================

export const CATEGORIES = [
  { id: '1', name: 'Tiên Hiệp', slug: 'tien-hiep', color: '#FFD700' },
  { id: '2', name: 'Kiếm Hiệp', slug: 'kiem-hiep', color: '#C0C0C0' },
  { id: '3', name: 'Lãng Mạn', slug: 'lang-man', color: '#FF69B4' },
  { id: '4', name: 'Hành Động', slug: 'hanh-dong', color: '#FF4500' },
  { id: '5', name: 'Huyền Bí', slug: 'huyen-bi', color: '#9370DB' },
  { id: '6', name: 'Khoa Học Viễn Tưởng', slug: 'khoa-hoc', color: '#00BFFF' },
  { id: '7', name: 'Hài Hước', slug: 'hai-huoc', color: '#FFB6C1' },
  { id: '8', name: 'Slice of Life', slug: 'slice-of-life', color: '#98FB98' },
];

// ============================================
// SAMPLE STORIES
// ============================================

export const MOCK_STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'Trường Sinh Tu Tiên',
    slug: 'truong-sinh-tu-tien',
    description: 'Một chàng trai bình thường nhập học vào một trường tu tiên huyền bí. Từ những bước đi đầu tiên, anh nhận ra rằng con đường tu luyện sẽ khó khăn hơn tưởng tượng. Với quyết tâm không gì lay chuyển, anh sẽ vượt qua mọi thử thách để trở thành đại hiệp.',
    author: 'Tiêu Diêu',
    coverImageUrl: 'https://via.placeholder.com/300x400/FFD700/000000?text=Truong+Sinh+Tu+Tien',
    categoryId: '1',
    status: 'ongoing',
    totalChapters: 250,
    views: 125000,
    listens: 85000,
    rating: 4.8,
    ratingCount: 1250,
    isFree: true,
    tags: ['Tiên Hiệp', 'Thần Thông', 'Trường Học', 'Chủ Nhân Quỳ'],
  },
  {
    id: 'story-2',
    title: 'Tôi Xuyên Không Thành Cá',
    slug: 'toi-xuyen-khong-thanh-ca',
    description: 'Một cuộc tai nạn làm cô gái trẻ thực hiện giấc mơ lạ lùng: cô bị biến thành một con cá. Trong thế giới dưới nước tràn đầy nguy hiểm và kỳ diệu, cô phải học cách sống sót với thân xác mới và tìm cách trở về con người.',
    author: 'Sương Tuyết',
    coverImageUrl: 'https://via.placeholder.com/300x400/00BFFF/FFFFFF?text=Toi+Xuyen+Khong',
    categoryId: '6',
    status: 'completed',
    totalChapters: 150,
    views: 98000,
    listens: 65000,
    rating: 4.6,
    ratingCount: 950,
    isFree: true,
    tags: ['Xuyên Không', 'Huyền Bí', 'Phiêu Lưu'],
  },
  {
    id: 'story-3',
    title: 'Kiếm Khách Giang Hồ',
    slug: 'kiem-khach-giang-ho',
    description: 'Một thanh kiếm huyền bí, một hiệp sĩ bí ẩn, và một thế giang hồ đầy rẫy âm mưu tối tăm. Câu chuyện về danh dự, tình yêu, và chiến đấu trong thế giang hồ phong tình.',
    author: 'Hạ Vũ',
    coverImageUrl: 'https://via.placeholder.com/300x400/C0C0C0/000000?text=Kiem+Khach',
    categoryId: '2',
    status: 'ongoing',
    totalChapters: 320,
    views: 156000,
    listens: 120000,
    rating: 4.7,
    ratingCount: 1680,
    isFree: true,
    tags: ['Kiếm Hiệp', 'Giang Hồ', 'Hành Động', 'Phiêu Lưu'],
  },
  {
    id: 'story-4',
    title: 'Tình Yêu Vô Tận',
    slug: 'tinh-yeu-vo-tan',
    description: 'Hai trái tim trong thế giới khác nhau, một tình yêu vượt qua mọi ranh giới. Câu chuyện lãng mạn đầy khúc mắc giữa người thế thượng và con quỷ.',
    author: 'Tâm Ngôn',
    coverImageUrl: 'https://via.placeholder.com/300x400/FF69B4/FFFFFF?text=Tinh+Yeu',
    categoryId: '3',
    status: 'ongoing',
    totalChapters: 280,
    views: 145000,
    listens: 110000,
    rating: 4.9,
    ratingCount: 2100,
    isFree: true,
    tags: ['Lãng Mạn', 'Huyền Bí', 'Phỏng Tưởng'],
  },
  {
    id: 'story-5',
    title: 'Đại Chiến Thần Thoại',
    slug: 'dai-chien-than-thoai',
    description: 'Khi các vị thần từ thần thoại cổ đại thức dậy trong thế giới hiện đại, một thanh niên bình thường trở thành chìa khóa để tham gia cuộc chiến vĩ đại.',
    author: 'Vũ Khôi',
    coverImageUrl: 'https://via.placeholder.com/300x400/FF4500/FFFFFF?text=Dai+Chien',
    categoryId: '4',
    status: 'ongoing',
    totalChapters: 200,
    views: 180000,
    listens: 140000,
    rating: 4.8,
    ratingCount: 1950,
    isFree: true,
    tags: ['Hành Động', 'Thần Thoại', 'Khoa Học Viễn Tưởng'],
  },
  {
    id: 'story-6',
    title: 'Bí Mật Của Toà Lâu Đen',
    slug: 'bi-mat-toa-lau-den',
    description: 'Một toà lâu cổ, một gia tộc bí ẩn, và những bí mật đã bị chôn vùi trong suốt hàng trăm năm. Một cô gái trẻ phát hiện ra mình liên quan đến tất cả những điều này.',
    author: 'Yến Hương',
    coverImageUrl: 'https://via.placeholder.com/300x400/9370DB/FFFFFF?text=Bi+Mat',
    categoryId: '5',
    status: 'ongoing',
    totalChapters: 180,
    views: 95000,
    listens: 72000,
    rating: 4.5,
    ratingCount: 890,
    isFree: true,
    tags: ['Huyền Bí', 'Hồi Hộp', 'Tâm Lý'],
  },
  {
    id: 'story-7',
    title: 'Hành Tinh Bóng Đêm',
    slug: 'hanh-tinh-bong-dem',
    description: 'Năm 2245, nhân loại khám phá ra một hành tinh bí ẩn ngoài hệ Mặt Trời. Một đoàn thám hiểm được cử đi khám phá, nhưng điều họ tìm thấy vượt quá tưởng tượng.',
    author: 'Tinh Hà',
    coverImageUrl: 'https://via.placeholder.com/300x400/1C1C1C/00FF00?text=Hanh+Tinh',
    categoryId: '6',
    status: 'ongoing',
    totalChapters: 220,
    views: 165000,
    listens: 125000,
    rating: 4.7,
    ratingCount: 1450,
    isFree: true,
    tags: ['Khoa Học Viễn Tưởng', 'Phiêu Lưu', 'Thần Bí'],
  },
  {
    id: 'story-8',
    title: 'Hỷ Nộn Ngày Ngày',
    slug: 'hy-non-ngay-ngay',
    description: 'Một anh chàng vô tư và một cô gái chân thực gặp gỡ trong một cửa hàng cà phê nhỏ. Từ đó, cuộc sống hàng ngày trở nên vui vẻ và đầy tiếng cười.',
    author: 'Mộng Mơ',
    coverImageUrl: 'https://via.placeholder.com/300x400/FFB6C1/000000?text=Hy+Non',
    categoryId: '7',
    status: 'completed',
    totalChapters: 120,
    views: 78000,
    listens: 55000,
    rating: 4.6,
    ratingCount: 820,
    isFree: true,
    tags: ['Hài Hước', 'Lãng Mạn', 'Slice of Life'],
  },
  {
    id: 'story-9',
    title: 'Cuộc Sống Lại Sau Cái Chết',
    slug: 'cuoc-song-lai-sau-cai-chet',
    description: 'Anh bị chết vì tai nạn xe, nhưng thay vì lên thiên đường hay xuống địa ngục, anh tỉnh dậy trong thân xác của một người khác 100 năm trong tương lai.',
    author: 'Quốc Trọng',
    coverImageUrl: 'https://via.placeholder.com/300x400/A9A9A9/FFFFFF?text=Cuoc+Song',
    categoryId: '8',
    status: 'ongoing',
    totalChapters: 165,
    views: 102000,
    listens: 78000,
    rating: 4.5,
    ratingCount: 950,
    isFree: true,
    tags: ['Xuyên Không', 'Slice of Life', 'Phiêu Lưu'],
  },
  {
    id: 'story-10',
    title: 'Thiên Đế Bị Lưu Đày',
    slug: 'thien-de-bi-luu-day',
    description: 'Một vị thiên đế vô số năm tuổi bị lưu đày xuống trần gian như một con người bình thường. Anh phải học lại cách sống như loài người và tìm lại sức mạnh của mình.',
    author: 'Bách Lạc',
    coverImageUrl: 'https://via.placeholder.com/300x400/FFD700/000000?text=Thien+De',
    categoryId: '1',
    status: 'ongoing',
    totalChapters: 290,
    views: 187000,
    listens: 145000,
    rating: 4.9,
    ratingCount: 2300,
    isFree: true,
    tags: ['Tiên Hiệp', 'Hài Hước', 'Hành Động'],
  },
];

// ============================================
// SAMPLE CHAPTERS (For Story 1: Trường Sinh Tu Tiên)
// ============================================

export const MOCK_CHAPTERS: Chapter[] = [
  {
    id: 'chapter-1-1',
    storyId: 'story-1',
    chapterNumber: 1,
    title: 'Vào Trường Tu Tiên',
    content: `Sáng hôm đó, Lâm Thiên đứng trước cổng Thiên Tân Tông với một túi áo quần. Anh nhìn lên những ngôi nhà trên núi cao, với những cây xanh um tùm phủ khắp sườn dốc.

"Đây là nơi anh sẽ bắt đầu hành trình tu luyện của mình," anh tự nhủ.

Từ bé, Lâm Thiên đã nghe những câu chuyện về các hiệp sĩ và tu sĩ từ những quyển sách cũ. Anh mơ ước có thể trở thành một trong họ, sở hữu những kỹ năng kỳ diệu và tinh thần bền bỉ.

Không lâu, một nam thầy phó xuất hiện. Anh ta có vẻ khô khan nhưng mắt sáng.

"Tên là gì?" anh hỏi.

"Lâm Thiên, thầy." Anh trả lời, cúi đầu.

"Tốt. Từ bây giờ, cậu sẽ học tập theo những quy tắc của trường. Sức mạnh đạt được từ sự kiên nhẫn và rèn luyện. Hiểu chưa?"

"Vâng, thầy."

Vậy là cuộc hành trình tu luyện của Lâm Thiên bắt đầu...`,
    excerpt: 'Lâm Thiên nhập học vào Thiên Tân Tông với những khát vọng lớn lao.',
    audioDuration: 450,
    audioSize: 5240000,
    isFree: true,
    wordCount: 2850,
    views: 2500,
    listens: 1800,
    createdAt: '2024-01-01',
  },
  {
    id: 'chapter-1-2',
    storyId: 'story-1',
    chapterNumber: 2,
    title: 'Bài Tập Đầu Tiên',
    content: `"Hôm nay, các cậu sẽ được dạy bài tập cơ bản nhất của trường: vận chuyển nội lực."

Thầy Vân Trân, một tu sĩ cấp cao, đứng giữa hall lớn với khoảng 30 học sinh mới mắm.

Lâm Thiên chăm chú lắng nghe. Anh nhận thấy rằng vận chuyển nội lực là chìa khóa để mở ra tất cả những kỹ năng khác.

Cách tiếp cận của thầy rất cơ bản nhưng hiệu quả. Anh chỉ dạy cách điều khiển hơi thở, cách tập trung tinh thần, và làm thế nào để cảm nhận dòng nội lực trong cơ thể.

"Tập từ từ, đừng vội vàng. Một sai lầm có thể gây tổn thương tới kinh mạch của cậu."

Lâm Thiên thực hành suốt cả ngày. Đến tối, anh cảm thấy được một chút dòng nội lực đỏ nhuyễn chuyển động trong kỳ huyệt dưới bụng anh.

Anh nở nụ cười. Đây chỉ là bước đầu tiên, nhưng anh đã cảm nhận được sức mạnh.

"Lâm Thiên, cậu đi theo anh đây."

Một bạn cùng lớp bước tới. Cô gái này tên là Hoa Yên, và cô cũng tập luyện suốt cả ngày.

"Chỗ quán xôi gần đây rất ngon. Chúng ta đi ăn cơm?"

Lâm Thiên gật đầu. Anh nhận ra rằng, ngoài tu luyện, cuộc sống cũng là một phần quan trọng.`,
    excerpt: 'Lâm Thiên bắt đầu học bài tập cơ bản và cảm nhận được nội lực lần đầu tiên.',
    audioDuration: 520,
    audioSize: 6100000,
    isFree: true,
    wordCount: 3200,
    views: 2200,
    listens: 1600,
    createdAt: '2024-01-02',
  },
  {
    id: 'chapter-1-3',
    storyId: 'story-1',
    chapterNumber: 3,
    title: 'Đối Thủ Xuất Hiện',
    content: `Sau hai tuần tu luyện, Lâm Thiên đã có thể điều khiển nội lực một cách ổn định. Anh có thể giơ bàn tay lên và tập trung nội lực vào lòng bàn, tạo ra một ánh sáng xanh nhỏ.

Trong lớp, có một thanh niên tên là Tần Hưng, con trai của một vị kiếm thủ nổi tiếng. Tần Hưng xem thường tất cả những học sinh khác vì anh ta đã bắt đầu tu luyện từ khi còn nhỏ.

"Các cậu chỉ là đám tân binh vô dụng," Tần Hưng nói một cách kiêu ngạo. "Anh chỉ cần một nửa tháng để đánh bại tất cả các cậu."

Lâm Thiên không phản ứng. Anh biết rằng không nên tranh cãi với những người kiêu ngạo - hành động mới là câu trả lời tốt nhất.

Nhưng Tần Hưng không chịu bỏ qua. Anh bước tới gần Lâm Thiên.

"Cậu là Lâm Thiên, đúng không? Thầy Vân Trân nói cậu là học sinh nhanh nhất năm nay. Nhưng anh chắc chắn cậu sẽ thua anh đấy."

Lâm Thiên nhìn lên, mắt sáng lên.

"Nếu cậu muốn chứng minh điều đó, chúng ta có thể đấu."

Tần Hưng nở nụ cười tự tin.

"Được. Ngày mai, trên sân thực hành. Anh sẽ cho cậu thấy sự chênh lệch."

Khi Tần Hưng rời đi, Hoa Yên bước tới cạnh Lâm Thiên.

"Cậu điên rồi sao? Tần Hưng đã tu luyện lâu hơn chúng ta rất nhiều."

"Biết rồi. Nhưng anh sẽ học được nhiều điều từ cuộc đấu này." Lâm Thiên trả lời một cách bình tĩnh.

Đêm hôm đó, Lâm Thiên tập luyện kỹ càng hơn bao giờ hết. Anh biết rằng ngày mai sẽ là một thử thách thực sự.`,
    excerpt: 'Lâm Thiên chấp nhận thách đấu với Tần Hưng, một học sinh tu luyện lâu năm.',
    audioDuration: 610,
    audioSize: 7120000,
    isFree: true,
    wordCount: 3750,
    views: 1950,
    listens: 1420,
    createdAt: '2024-01-03',
  },
  {
    id: 'chapter-1-4',
    storyId: 'story-1',
    chapterNumber: 4,
    title: 'Cuộc Đấu Đầu Tiên',
    content: `Sáng hôm sau, rất nhiều học sinh tập trung xung quanh sân thực hành. Tin tức về cuộc đấu giữa Lâm Thiên và Tần Hưng đã lan truyền khắp trường.

Tần Hưng đã sẵn sàng, tay cầm một thanh kiếm dài. Lâm Thiên không có vũ khí - anh chỉ sở hữu những kỹ năng tay không mà thầy Vân Trân dạy.

Thầy Vân Trân nhìn từ phía xa, gật đầu để hai thanh niên bắt đầu.

"Xem nào cậu sẽ làm gì khi đối mặt với kiếm của anh!" Tần Hưng hét lên.

Anh ta chạy tới, kiếm vểnh lên như một con rắn. Lâm Thiên không chống lại, thay vào đó anh lướt sang một bên một cách nhẹ nhàng.

Tần Hưng thất bại lần đầu tiên. Anh quay lại, tuyên bố rằng đó chỉ là một cú tấn công thử.

Cuộc đấu kéo dài 10 phút. Tần Hưng tấn công liên tục, nhưng Lâm Thiên tránh tất cả những cú tấn công với sự tính toán từng chi tiết.

Cuối cùng, Lâm Thiên tìm thấy khoảng trống. Anh chuyển nội lực vào bàn tay và tung một cú đấm về phía Tần Hưng.

Tần Hưng không thể tránh. Cú đấm trúng trực tiếp vào ngực anh ta, làm anh ta ngã ra phía sau.

Tân binh đã chiến thắng.

Đám đông vỗ tay. Hoa Yên mỉm cười, và những học sinh khác bắt đầu nhìn Lâm Thiên với những ánh mắt mới - ánh mắt của sự tôn trọng.

Tần Hưng vừa dậy lên, mặt mũi tái nhợt. Anh không nói gì, chỉ vân vê kiếm của mình và đi mất.

"Tốt," Thầy Vân Trân tuyên bố. "Lâm Thiên, cậu đã hiểu điểm yếu của đối thủ và khai thác nó một cách khôn ngoan. Đó là bước tiến lớn."

Lâm Thiên cúi đầu để cảm ơn. Nhưng anh biết rằng cuộc hành trình còn dài lắm.`,
    excerpt: 'Lâm Thiên chiến thắng cuộc đấu đầu tiên của mình dù không có vũ khí.',
    audioDuration: 680,
    audioSize: 7920000,
    isFree: true,
    wordCount: 4100,
    views: 1800,
    listens: 1300,
    createdAt: '2024-01-04',
  },
  // ... more chapters would follow the same pattern
];

// ============================================
// RELATED STORIES (For recommendations)
// ============================================

export const getRelatedStories = (currentStoryId: string): Story[] => {
  const currentStory = MOCK_STORIES.find(s => s.id === currentStoryId);
  if (!currentStory) return [];

  return MOCK_STORIES.filter(
    s => s.id !== currentStoryId && s.categoryId === currentStory.categoryId
  ).slice(0, 5);
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export const getStoryById = (id: string): Story | undefined => {
  return MOCK_STORIES.find(story => story.id === id);
};

export const getChaptersByStoryId = (storyId: string): Chapter[] => {
  return MOCK_CHAPTERS.filter(chapter => chapter.storyId === storyId);
};

export const getChapterById = (id: string): Chapter | undefined => {
  return MOCK_CHAPTERS.find(chapter => chapter.id === id);
};

export const getStoriesByCategory = (categoryId: string): Story[] => {
  return MOCK_STORIES.filter(story => story.categoryId === categoryId);
};

export const getStoriesByStatus = (status: 'ongoing' | 'completed' | 'coming_soon'): Story[] => {
  return MOCK_STORIES.filter(story => story.status === status);
};

export const getStoriesByAuthor = (author: string): Story[] => {
  return MOCK_STORIES.filter(story => story.author.toLowerCase().includes(author.toLowerCase()));
};

export const searchStories = (query: string): Story[] => {
  const lowerQuery = query.toLowerCase().replace(/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/g, (char) => {
    const map: Record<string, string> = {
      'à': 'a', 'á': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
      'ă': 'a', 'ằ': 'a', 'ắ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
      'â': 'a', 'ầ': 'a', 'ấ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',
      'è': 'e', 'é': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
      'ê': 'e', 'ề': 'e', 'ế': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e',
      'ì': 'i', 'í': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',
      'ò': 'o', 'ó': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
      'ô': 'o', 'ồ': 'o', 'ố': 'o', 'ổ': 'o', '�': 'o', 'ộ': 'o',
      'ơ': 'o', 'ờ': 'o', 'ớ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o',
      'ù': 'u', 'ú': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
      'ư': 'u', 'ừ': 'u', 'ứ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',
      'ỳ': 'y', 'ý': 'y', 'ỷ': 'y', 'ỹ': 'y', 'ỵ': 'y',
      'đ': 'd',
    };
    return map[char] || char;
  });

  return MOCK_STORIES.filter(story => {
    const titleMatch = story.title.toLowerCase().includes(query.toLowerCase());
    const authorMatch = story.author.toLowerCase().includes(query.toLowerCase());
    const descMatch = story.description.toLowerCase().includes(query.toLowerCase());
    const tagsMatch = story.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()));

    return titleMatch || authorMatch || descMatch || tagsMatch;
  });
};

export const getTrendingStories = (): Story[] => {
  return [...MOCK_STORIES].sort((a, b) => (b.views + b.listens) - (a.views + a.listens)).slice(0, 10);
};

export const getNewlyUpdatedStories = (): Story[] => {
  return [...MOCK_STORIES].sort((a, b) => {
    const dateA = new Date(a.updatedAt || a.createdAt || 0).getTime();
    const dateB = new Date(b.updatedAt || b.createdAt || 0).getTime();
    return dateB - dateA;
  }).slice(0, 10);
};
