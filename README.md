# 📖 Story Reading & Listening App

A comprehensive mobile application for reading and listening to stories with full-featured reader, audio player, and content management system.

## 🎯 Project Vision

Build a production-grade story app that rivals popular platforms like:
- Wattpad (reading + community)
- Audible (listening experience)
- Webtoon (story discovery)

## 📊 4-Phase Development Plan

### Phase 1: Local App with Full UI ✅ (Current)
- Complete mobile interface (Home, Library, Detail, Reader, Player)
- Local data management (AsyncStorage)
- Full reading customization
- MP3 audio player
- Favorites & History tracking

### Phase 2: Backend Integration
- Supabase database & authentication
- Cloud storage for stories and audio
- User account synchronization
- Progress and favorites sync

### Phase 3: Admin Panel
- Content management (add/edit/delete stories)
- Chapter management
- Audio upload system
- Bulk import (TXT, JSON, SRT files)

### Phase 4: Monetization & Advanced Features
- Offline download capability
- Push notifications
- Rating & comments
- Premium/VIP system
- Ad integration

## 📁 Project Structure

```
story-app/
├── mobile/                          # React Native/Expo app
│   ├── app/                         # Main app directory
│   │   ├── (tabs)/                 # Tab navigation
│   │   │   ├── home.tsx            # Home screen
│   │   │   ├── library.tsx         # Library/Browse screen
│   │   │   ├── favorites.tsx       # Favorites screen
│   │   │   └── history.tsx         # History screen
│   │   ├── stories/
│   │   │   ├── [id].tsx            # Story detail screen
│   │   │   └── reader.tsx          # Full-screen reader
│   │   ├── search/
│   │   │   └── advanced.tsx        # Advanced search
│   │   └── settings/
│   │       └── reading.tsx         # Reading settings
│   ├── components/
│   │   ├── reader/                 # Reader components
│   │   │   ├── ReaderScreen.tsx
│   │   │   ├── AudioPlayer.tsx
│   │   │   └── ReaderSettings.tsx
│   │   ├── library/                # Library components
│   │   │   ├── StoryCard.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── SearchBar.tsx
│   │   └── common/                 # Shared components
│   │       ├── Header.tsx
│   │       ├── BottomPlayer.tsx
│   │       └── LoadingSpinner.tsx
│   ├── services/
│   │   ├── storageService.ts      # AsyncStorage wrapper
│   │   ├── audioService.ts        # Audio playback logic
│   │   └── dataService.ts         # Data management
│   ├── hooks/
│   │   ├── useReading.ts          # Reading progress hook
│   │   ├── useAudio.ts            # Audio playback hook
│   │   └── useStorage.ts          # Storage hook
│   ├── types/
│   │   ├── story.ts               # Story interfaces
│   │   ├── chapter.ts             # Chapter interfaces
│   │   ├── user.ts                # User interfaces
│   │   └── audio.ts               # Audio interfaces
│   ├── constants/
│   │   ├── categories.ts          # Category list
│   │   ├── genres.ts              # Genre definitions
│   │   └── config.ts              # App configuration
│   ├── data/
│   │   └── mockData.ts            # Mock stories & chapters
│   ├── utils/
│   │   ├── formatters.ts          # Text/time formatters
│   │   ├── validators.ts          # Input validation
│   │   └── helpers.ts             # Utility functions
│   ├── store/                     # State management (Redux/Zustand)
│   │   ├── slices/
│   │   │   ├── storySlice.ts
│   │   │   ├── readerSlice.ts
│   │   │   └── audioSlice.ts
│   │   └── index.ts
│   ├── app.json
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── backend/                         # Node.js/Python backend
│   ├── src/
│   │   ├── models/
│   │   │   ├── Story.ts
│   │   │   ├── Chapter.ts
│   │   │   ├── User.ts
│   │   │   ├── Category.ts
│   │   │   └── Audio.ts
│   │   ├── routes/
│   │   │   ├── stories.ts
│   │   │   ├── chapters.ts
│   │   │   ├── users.ts
│   │   │   ├── audio.ts
│   │   │   └── admin.ts
│   │   ├── controllers/
│   │   │   ├── storyController.ts
│   │   │   ├── chapterController.ts
│   │   │   ├── audioController.ts
│   │   │   └── userController.ts
│   │   ├── services/
│   │   │   ├── storyService.ts
│   │   │   ├── audioService.ts
│   │   │   └── authService.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── validation.ts
│   │   │   └── errorHandler.ts
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── supabase.ts
│   │   │   └── env.ts
│   │   └── server.ts
│   ├── migrations/
│   │   └── 001_initial_schema.sql
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── admin/                           # Admin dashboard
│   ├── pages/
│   │   ├── stories/
│   │   ├── chapters/
│   │   ├── categories/
│   │   ├── analytics/
│   │   └── settings/
│   ├── components/
│   └── package.json
│
├── docs/                            # Documentation
│   ├── FEATURES.md                 # Full feature list
│   ├── API.md                      # API documentation
│   ├── DATABASE.md                 # Database schema
│   ├── SETUP.md                    # Setup guide
│   ├── CONTRIBUTING.md             # Contribution guide
│   └── PHASES.md                   # Development phases
│
└── .github/
    ├── workflows/
    │   └── ci.yml
    └── ISSUE_TEMPLATE/
```

## 🎬 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo CLI
- Git

### Phase 1 Setup

```bash
# Clone repository
git clone https://github.com/AnhSpears/story-app.git
cd story-app

# Install mobile dependencies
cd mobile
npm install

# Start Expo dev server
npx expo start

# Run on iOS/Android simulator or Expo Go app
```

## 🗄️ Core Features - Phase 1

### Home Screen
- 🎯 Featured story banner
- 📚 Continue reading section
- 🆕 Newly updated stories
- 📊 Most listened/read stories
- 📖 Genre-based sections
- 🏆 Completed stories
- 📻 New audio stories
- ⭐ Recommended for you

### Library
- 📑 Browse all stories
- 🏷️ Filter by genre
- 📌 Filter by status (ongoing/completed)
- 🎵 Filter by audio availability
- 🔄 Sort by: A-Z, chapters, update date, views, listens, rating

### Story Detail
- 📖 Story cover & metadata
- 📊 Views/listens/rating
- 🔖 Genre tags & description
- 🎯 Read/Listen buttons
- ❤️ Favorite button
- 📥 Offline download button
- 📋 Chapter list with progress indicators
- 🔗 Related stories

### Reader Screen (Full Featured)
- 📖 Fullscreen reading mode
- 🎨 Customization:
  - Font size, line spacing, margins
  - Font families
  - Background colors (white, sepia, dark, green)
  - Night mode, eye-care mode
- ⏭️ Next/previous chapter
- 🔖 Bookmarks & notes
- 💾 Auto-save reading position
- 📍 Reading progress percentage

### MP3 Audio Player
- ▶️ Play/Pause/Stop controls
- ⏱️ Progress bar with current/total time
- ⏪ Rewind 10/15/30 seconds
- ⏩ Forward 10/15/30 seconds
- ⏭️ Next/previous chapter
- 🎚️ Playback speed (0.75x, 1x, 1.25x, 1.5x, 2x)
- ⏰ Sleep timer (5/10/30 min, end of chapter)
- 🎧 Background playback
- 🔊 Mini player at app bottom

### Additional Features
- ❤️ Favorites management
- 📜 Reading/listening history
- 🔍 Advanced search (by title, author, genre, description, chapter, tags)
- 💾 AsyncStorage for local persistence
- ⚙️ Reading preferences storage

## 📱 Technology Stack

### Frontend (Phase 1)
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Navigation**: React Navigation
- **State**: Redux Toolkit or Zustand
- **Audio**: expo-av (for MP3 playback)
- **Storage**: AsyncStorage
- **UI Components**: React Native Paper or NativeBase

### Backend (Phase 2)
- **Framework**: Express.js or FastAPI
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage or AWS S3
- **Auth**: Supabase Auth (JWT)
- **Language**: TypeScript/Node.js or Python

### Admin (Phase 3)
- **Framework**: Next.js or React
- **UI Library**: Tailwind CSS + shadcn/ui

## 📋 Database Schema - Phase 2

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  username VARCHAR UNIQUE,
  created_at TIMESTAMP
);

-- Stories
CREATE TABLE stories (
  id UUID PRIMARY KEY,
  title VARCHAR,
  description TEXT,
  author VARCHAR,
  cover_image_url VARCHAR,
  genre_id UUID,
  status ENUM ('ongoing', 'completed'),
  total_chapters INT,
  views INT,
  listens INT,
  rating DECIMAL,
  is_free BOOLEAN,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Chapters
CREATE TABLE chapters (
  id UUID PRIMARY KEY,
  story_id UUID REFERENCES stories,
  chapter_number INT,
  title VARCHAR,
  content TEXT,
  audio_url VARCHAR,
  audio_duration INT,
  audio_size INT,
  is_free BOOLEAN,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

-- Categories/Genres
CREATE TABLE categories (
  id UUID PRIMARY KEY,
  name VARCHAR UNIQUE,
  slug VARCHAR UNIQUE
);

-- Favorites
CREATE TABLE favorites (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  story_id UUID REFERENCES stories,
  created_at TIMESTAMP
);

-- Reading Progress
CREATE TABLE reading_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  story_id UUID REFERENCES stories,
  chapter_id UUID REFERENCES chapters,
  progress_percentage INT,
  last_read_at TIMESTAMP
);

-- Listening Progress
CREATE TABLE listening_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users,
  chapter_id UUID REFERENCES chapters,
  current_time INT,
  duration INT,
  last_listened_at TIMESTAMP
);
```

## 🚀 Development Roadmap

- [ ] **Week 1-2**: Project setup, navigation structure, component library
- [ ] **Week 3-4**: Home & Library screens, filtering/sorting
- [ ] **Week 5-6**: Story detail screen, chapter list
- [ ] **Week 7-8**: Reader screen with full customization
- [ ] **Week 9-10**: Audio player implementation
- [ ] **Week 11-12**: AsyncStorage integration, favorites, history
- [ ] **Week 13+**: Backend integration (Phase 2)

## 🤝 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - feel free to use this project as a reference or starting point.

## 📞 Support

For issues, questions, or suggestions, create an issue on GitHub.

---

**Built with ❤️ by the Story App Team**
