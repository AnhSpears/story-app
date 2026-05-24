# 🗄️ Database Schema

## Phase 2 & 3: Supabase Database Schema

### Core Tables

#### users

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  avatar_url VARCHAR(500),
  bio TEXT,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP
);
```

#### categories

```sql
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  icon_url VARCHAR(500),
  color VARCHAR(7),
  display_order INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### stories

```sql
CREATE TABLE stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  author VARCHAR(255),
  cover_image_url VARCHAR(500),
  category_id UUID REFERENCES categories(id),
  status ENUM('ongoing', 'completed', 'coming_soon') DEFAULT 'ongoing',
  total_chapters INT DEFAULT 0,
  views INT DEFAULT 0,
  listens INT DEFAULT 0,
  rating DECIMAL(3, 2) DEFAULT 0.0,
  rating_count INT DEFAULT 0,
  is_free BOOLEAN DEFAULT TRUE,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP
);
```

#### chapters

```sql
CREATE TABLE chapters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  story_id UUID NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
  chapter_number INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  audio_url VARCHAR(500),
  audio_duration INT, -- in seconds
  audio_size INT, -- in bytes
  audio_transcription TEXT,
  is_free BOOLEAN DEFAULT TRUE,
  word_count INT,
  views INT DEFAULT 0,
  listens INT DEFAULT 0,
  is_published BOOLEAN DEFAULT TRUE,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(story_id, chapter_number)
);
```

#### tags

```sql
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### story_tags

```sql
CREATE TABLE story_tags (
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (story_id, tag_id)
);
```

#### favorites

```sql
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, story_id)
);
```

#### reading_progress

```sql
CREATE TABLE reading_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
  current_chapter_id UUID REFERENCES chapters(id),
  progress_percentage INT DEFAULT 0,
  last_read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, story_id)
);
```

#### listening_progress

```sql
CREATE TABLE listening_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  chapter_id UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  current_time_seconds INT DEFAULT 0,
  duration_seconds INT,
  last_listened_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, chapter_id)
);
```

#### comments

```sql
CREATE TABLE comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  likes_count INT DEFAULT 0,
  is_approved BOOLEAN DEFAULT TRUE,
  parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### ratings

```sql
CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, story_id)
);
```

#### downloads

```sql
CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE CASCADE,
  download_type ENUM('story', 'chapter'),
  file_size INT,
  downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### user_bookmarks

```sql
CREATE TABLE user_bookmarks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  chapter_id UUID NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  paragraph_index INT,
  note TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### user_notes

```sql
CREATE TABLE user_notes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  story_id UUID NOT NULL REFERENCES stories(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### notifications

```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type ENUM('new_chapter', 'favorite_updated', 'recommendation', 'system'),
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE CASCADE,
  title VARCHAR(255),
  message TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### reports

```sql
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reporter_id UUID NOT NULL REFERENCES users(id),
  report_type ENUM('story_error', 'audio_error', 'inappropriate_content', 'copyright', 'other'),
  story_id UUID REFERENCES stories(id) ON DELETE CASCADE,
  chapter_id UUID REFERENCES chapters(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  status ENUM('open', 'in_progress', 'resolved', 'closed') DEFAULT 'open',
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  resolved_at TIMESTAMP
);
```

### Indexes for Performance

```sql
-- Stories
CREATE INDEX idx_stories_category_id ON stories(category_id);
CREATE INDEX idx_stories_status ON stories(status);
CREATE INDEX idx_stories_is_published ON stories(is_published);
CREATE INDEX idx_stories_created_at ON stories(created_at DESC);
CREATE INDEX idx_stories_views ON stories(views DESC);
CREATE INDEX idx_stories_listens ON stories(listens DESC);
CREATE INDEX idx_stories_rating ON stories(rating DESC);

-- Chapters
CREATE INDEX idx_chapters_story_id ON chapters(story_id);
CREATE INDEX idx_chapters_story_chapter ON chapters(story_id, chapter_number);
CREATE INDEX idx_chapters_is_published ON chapters(is_published);
CREATE INDEX idx_chapters_created_at ON chapters(created_at DESC);

-- User interactions
CREATE INDEX idx_favorites_user_id ON favorites(user_id);
CREATE INDEX idx_favorites_story_id ON favorites(story_id);
CREATE INDEX idx_reading_progress_user_id ON reading_progress(user_id);
CREATE INDEX idx_listening_progress_user_id ON listening_progress(user_id);
CREATE INDEX idx_comments_story_id ON comments(story_id);
CREATE INDEX idx_comments_user_id ON comments(user_id);
CREATE INDEX idx_ratings_story_id ON ratings(story_id);
CREATE INDEX idx_ratings_user_id ON ratings(user_id);
```

### Views for Common Queries

```sql
-- Story with full metadata
CREATE VIEW story_details AS
SELECT 
  s.*,
  c.name as category_name,
  COUNT(DISTINCT f.id) as favorite_count,
  COUNT(DISTINCT r.id) as review_count,
  COALESCE(AVG(r.rating), 0) as avg_rating
FROM stories s
LEFT JOIN categories c ON s.category_id = c.id
LEFT JOIN favorites f ON s.id = f.story_id
LEFT JOIN ratings r ON s.id = r.story_id
GROUP BY s.id, c.id;

-- User reading/listening activity
CREATE VIEW user_activity AS
SELECT 
  u.id,
  u.username,
  COUNT(DISTINCT rp.story_id) as stories_reading,
  COUNT(DISTINCT lp.chapter_id) as chapters_listening,
  MAX(rp.last_read_at) as last_read_at,
  MAX(lp.last_listened_at) as last_listened_at
FROM users u
LEFT JOIN reading_progress rp ON u.id = rp.user_id
LEFT JOIN listening_progress lp ON u.id = lp.user_id
GROUP BY u.id;
```

## Data Migration (Phase 1 to Phase 2)

When migrating from AsyncStorage to Supabase:

1. Export data from AsyncStorage
2. Transform to SQL format
3. Import to Supabase
4. Verify data integrity
5. Update app to use Supabase instead of AsyncStorage

See backend migrations for detailed scripts.
