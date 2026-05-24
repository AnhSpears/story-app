# 📚 Complete Feature Set

## Phase 1: Local App with Full UI

### 1. Home Screen (Content Discovery Hub)

- **Banner Section**
  - Rotating featured story banner with background image
  - Story title, brief description
  - Quick action buttons (Read/Listen)
  - Auto-rotate every 5 seconds

- **Continue Reading Section**
  - Display last 3 stories being read
  - Show chapter and progress percentage
  - Quick resume button
  - "View More" to see all continue reading

- **Newly Updated Stories**
  - Stories updated in last 7 days
  - Horizontal scrollable list
  - Show update indicator (new chapter badge)

- **Most Listened Stories**
  - Top 10 stories by listen count
  - Show listen count
  - Display duration indicator

- **Most Read Stories**
  - Top 10 stories by view count
  - Show view count
  - Genre tag

- **Genre Sections** (4-6 main genres)
  - Drama, Fantasy, Romance, Sci-Fi, etc.
  - Show 5 stories per genre
  - "See More" for each genre

- **Completed Stories Section**
  - Stories with finished/completed status
  - Show total chapters
  - Rating

- **Upcoming Stories**
  - Stories with "coming soon" status
  - Expected update date
  - Subscribe to notification button

- **New Audio Stories**
  - Recently added audio chapters
  - Duration indicator
  - Audio quality badge if applicable

- **Recommended For You**
  - Based on recently read stories
  - Based on favorited genres

### 2. Library (Browse & Filter)

- **Display Options**
  - Grid view (2 columns with cover images)
  - List view (showing more details)
  - Toggle between views

- **Search Bar**
  - Quick search by title
  - Shows recent searches as suggestions
  - Clear search history option

- **Filter Panel**
  - Genre multi-select filter
  - Status filter (Ongoing / Completed)
  - Audio availability (Has Audio / Text Only)
  - Update frequency filter (Recently Updated)

- **Sort Options**
  - Alphabetical (A-Z, Z-A)
  - Most viewed
  - Most listened
  - Highest rated
  - Most recently updated
  - Most chapters

- **Story Card Display**
  - Cover image
  - Story title
  - Author name
  - Genre tags
  - Rating (stars)
  - View count / Listen count
  - Status badge (Ongoing/Completed)
  - Audio indicator (🎵 icon if has audio)
  - Favorite heart (filled/empty)

- **Pagination/Infinite Scroll**
  - Load more stories as user scrolls
  - Show loading indicator
  - Show "No more stories" message

### 3. Advanced Search

- **Search By Multiple Criteria**
  - Story title (primary)
  - Author name
  - Genre
  - Description/keywords
  - Chapter titles
  - Tags
  - Status (Ongoing/Completed)

- **Search Features**
  - Real-time suggestions as user types
  - Autocomplete for authors, genres, tags
  - Recent searches list (last 10)
  - Clear all recent searches
  - Fuzzy matching (typo tolerance)
  - Vietnamese diacritical mark handling
    - "truong sinh" matches "Trường Sinh Tu Tiên"
    - No accent search support

- **Search Results**
  - Show result count
  - Sort results by relevance
  - Filter results by category
  - Show search keywords highlighted

- **Search History**
  - Persist to AsyncStorage
  - Show timestamp
  - One-click re-search
  - Delete individual items
  - Clear all history

### 4. Story Detail Page

- **Story Header**
  - Cover image (large)
  - Story title
  - Author name
  - Genre tags (clickable)
  - Status badge (Ongoing/Completed)

- **Story Metrics**
  - Total views with icon
  - Total listens with icon
  - Rating (stars and count)
  - Total chapters
  - Total audio duration

- **Story Description**
  - Full description text
  - Expandable (Show More/Less)
  - Tags/Keywords

- **Action Buttons**
  - "Read Now" - Go to first unread chapter
  - "Listen Now" - Play first unheard audio
  - "Continue Reading" - Resume from last position
  - "Continue Listening" - Resume from last audio position
  - "Add to Favorites" - Heart icon toggle
  - "Download Offline" - Download indicator

- **Chapter List Section**
  - Chapter number and title
  - Read/Unread indicator
  - Listened/Unlistened indicator
  - Has audio indicator (🎵)
  - Audio duration if available
  - Chapter action buttons (Read/Listen/Download)

- **Chapter List Features**
  - Quick search/filter chapters
  - Sort options (Newest/Oldest)
  - Pagination (show 20 per page)
  - Jump to specific chapter number
  - Show reading progress by chapter

- **Related Stories**
  - Show 3-5 similar stories
  - Same genre
  - Horizontal scrollable

### 5. Chapter List Display

- **Chapter Item Layout**
  ```
  [Audio Icon] Chapter 150: Phát Triển Quy Hoạch Lần
  [Read Icon] [Listen Icon] [Download Icon]
  Duration: 12:45 · Status: Read · Has Audio
  ```

- **Status Indicators**
  - Read/Unread status
  - Listened/Unlistened status
  - Audio available/unavailable
  - Downloaded/not downloaded

- **Chapter Actions**
  - Tap chapter to read
  - Play button to listen
  - Download button to save offline
  - Long press for more options

- **Chapter Organization**
  - Group by volume if applicable
  - Reverse chronological display (newest first option)
  - Bookmark chapters

### 6. Reader Screen (Full Featured)

- **Layout Structure**
  ```
  ┌──────────────────────────────────┐
  │ ← Title          Aa    ☰ (Menu)   │ (Header - hide on tap)
  │ Chapter 150                      │
  ├──────────────────────────────────┤
  │                                  │
  │ Story content text               │
  │ Full screen reading mode         │
  │ Auto-scroll option               │
  │                                  │
  ├──────────────────────────────────┤
  │ [Audio Player Bar if active]     │ (Hide on tap)
  └──────────────────────────────────┘
  ```

- **Header Controls** (Hide-able)
  - Back button (←)
  - Story/Chapter title
  - "Aa" text settings button
  - Menu button (☰)

- **Text Customization Panel**
  - Font size slider (12-24pt)
  - Line height slider (1.0-2.5)
  - Margin left/right slider
  - Font family selector:
    - System font
    - Serif (Merriweather)
    - Sans-serif (Open Sans)
    - Monospace

- **Background/Theme Options**
  - White background
  - Sepia/Yellow background (eye-friendly)
  - Dark/Black background
  - Green background (minimal eye strain)
  - Night mode toggle
  - Eye-care mode toggle

- **Reading Controls**
  - Previous chapter button
  - Next chapter button
  - Chapter list quick access
  - Progress percentage display
  - Go to specific chapter number

- **Page Navigation**
  - Tap left side to go to previous page
  - Tap right side to go to next page
  - Swipe left/right for page turning
  - Page number indicator

- **Text Interaction**
  - Highlight/select text
  - Copy selected text (if permitted)
  - Bookmark specific paragraph
  - Add personal notes
  - Search word in chapter

- **Reading Features**
  - Auto-save reading position every 30 seconds
  - Resume from last position
  - Full screen mode (hide status bar)
  - Lock screen rotation if needed
  - Brightness adjustment slider

- **Audio Player Integration** (When listening)
  - Compact audio player bar
  - Play/pause button
  - Current time / Duration
  - Sync text with audio (highlight current word if timestamp available)
  - Expandable to full player

### 7. MP3 Audio Player

- **Mini Player** (Bottom of app)
  - Current story/chapter title
  - Play/Pause button
  - Progress bar (tap to seek)
  - Duration time
  - Expand button to full screen
  - Close button

- **Full Screen Audio Player**
  - Album art / Story cover image
  - Chapter title and story title
  - Current chapter number / Total chapters

- **Playback Controls**
  - Play/Pause toggle (large button)
  - Stop button (optional)
  - Previous chapter button (⏮)
  - Next chapter button (⏭)

- **Timeline Controls**
  - Progress bar with current/total time
  - Tap bar to seek to position
  - Current time display (00:12:45)
  - Total duration display (02:30:15)

- **Skip Controls**
  - Rewind 10 seconds
  - Rewind 15 seconds (custom)
  - Rewind 30 seconds
  - Forward 10 seconds
  - Forward 15 seconds (custom)
  - Forward 30 seconds

- **Speed Control**
  - Playback speed selector:
    - 0.75x (slower)
    - 1.0x (normal)
    - 1.25x
    - 1.5x
    - 2.0x (faster)
  - Show current speed on button

- **Sleep Timer**
  - No timer
  - 5 minutes
  - 10 minutes
  - 30 minutes
  - End of chapter
  - End of story
  - Custom minutes option
  - Show countdown when active

- **Advanced Audio Features**
  - Background playback (continue when app is closed)
  - Lock screen playback controls
  - Headphone/earbud controls
  - Volume control (system volume)
  - Auto-play next chapter when current finishes
  - Save playback position per chapter
  - Mark chapter as listened

- **Audio Player States**
  - Playing state
  - Paused state
  - Loading state (buffering)
  - Error state (audio not available)
  - Finished state

### 8. Read & Listen Synchronization

- **Progress Tracking**
  - Separate reading progress per story
  - Separate listening progress per story
  - Store both independently

- **Status Display**
  - "Đã đọc" (Read) indicator
  - "Đã nghe" (Listened) indicator
  - Show which chapter you're on for reading
  - Show which chapter you're on for listening

- **Cross-Navigation**
  - Open reader → same chapter in listening
  - Open audio player → same chapter in reader
  - Switch seamlessly between read/listen

- **Sync Features**
  - Save last read position when closing reader
  - Save last listen position when pausing audio
  - Resume from exact position
  - Show progress in chapter list

- **Advanced Sync** (Future)
  - Highlight current sentence while listening (needs timestamps)
  - Auto-scroll text with audio playback
  - Caption/subtitle support

### 9. Favorites Management

- **Add/Remove Favorites**
  - Heart icon in story detail page
  - Heart icon in story cards (library/home)
  - Quick favorite toggle
  - Show confirmation message

- **Favorites Screen**
  - List of all favorited stories
  - Show cover, title, author
  - Sort options:
    - Recently added (default)
    - Alphabetical (A-Z)
    - By genre
    - By last read/listen

- **Filter Favorites**
  - By genre
  - By status (Ongoing/Completed)
  - By audio availability

- **Favorite Actions**
  - Tap to view story detail
  - Long press for more options
  - Remove from favorites
  - Move to collection (future)

- **Collections** (Future feature)
  - Create custom collections
  - Add stories to collections
  - Name collections
  - Share collections

### 10. Reading & Listening History

- **History Screen Sections**
  - Stories read recently (last 20)
  - Stories listened recently (last 20)
  - Chapters read recently
  - Chapters listened recently

- **History Item Display**
  - Story/Chapter title
  - Thumbnail image
  - Last accessed time ("2 hours ago")
  - Progress/position indicator
  - Resume button

- **History Organization**
  - Chronological order (newest first)
  - Show date separators (Today, Yesterday, This Week, etc.)
  - Infinite scroll
  - Search in history

- **History Management**
  - Delete single item
  - Delete multiple items
  - Clear all history
  - Auto-clear old history option (after 30/60/90 days)

- **Continue Reading/Listening**
  - Show on home screen
  - Show on library
  - Quick resume buttons
  - Show chapter number and progress

### 11. Continue Reading/Listening (Home Screen)

- **Continue Reading Section**
  ```
  Đọc Tiếp
  Trường Sinh Tu Tiên
  Chương 150 · Đã đọc 42%
  [Tiếp tục đọc]
  ```

- **Continue Listening Section**
  ```
  Nghe Tiếp
  Ta Xuyên Không Thành Cá
  Chương 3 · 08:15 / 20:40
  [Tiếp tục nghe]
  ```

- **Continue Features**
  - Show last read story
  - Show last listened story
  - Tap "Continue" to resume immediately
  - Show progress bar for reading
  - Show audio progress (current/total) for listening
  - Update when user reads/listens

### 12. Offline Download

- **Download Options** (Phase 1 basic)
  - Download entire story (all chapters)
  - Download individual chapter
  - Download confirmation dialog
  - Show estimated size
  - Show download progress

- **Download Management**
  - View downloaded stories
  - View downloaded chapters
  - Show storage used per story
  - Delete downloads individually
  - Delete all downloads
  - Show available storage space

- **Offline Features**
  - Read downloaded chapters without internet
  - Listen to downloaded audio without internet
  - Download indicator in UI
  - Settings for download quality (future)
  - Wi-Fi only download option (future)

- **Download Indicator**
  - Show "Downloaded" badge on stories
  - Show "Downloading..." during download
  - Show percentage progress
  - Show error state if failed

### 13. Reading Settings/Preferences

- **Persistent Settings**
  - Font size preference
  - Font family preference
  - Background color preference
  - Line height preference
  - Margin preference
  - Auto-scroll speed
  - Night mode on/off
  - Screen lock option

- **Audio Settings** (if applicable)
  - Default playback speed
  - Default skip duration
  - Auto-play next chapter on/off
  - Background playback on/off

- **Storage**
  - Save to AsyncStorage
  - Apply globally to all reading
  - Allow per-story overrides (future)

- **Settings Screen**
  - Font settings panel
  - Display settings panel
  - Audio settings panel
  - About app
  - Version number
  - Terms of service link
  - Privacy policy link

### 14. Navigation Structure

- **Bottom Tab Navigation**
  - Home (🏠)
  - Library (📚)
  - Favorites (❤️)
  - History (🕐)
  - Profile/Settings (⚙️)

- **Story Detail Navigation**
  - Detail page
  - Reader screen (from detail)
  - Audio player (from detail)
  - Related stories (from detail)

- **Deep Linking** (future)
  - Link to specific story
  - Link to specific chapter
  - Share story links

### 15. MockData & Testing

- **Sample Stories** (at least 20)
  - Various genres
  - Different chapter counts
  - Mix of with/without audio
  - Various status (ongoing/completed)

- **Sample Chapters** (100+ total)
  - Realistic chapter titles
  - Vietnamese story content
  - Audio duration data
  - Mix of read/unread states

- **Sample Categories**
  - Drama, Fantasy, Romance, Sci-Fi, Mystery, Horror
  - Action, Comedy, Slice of Life

## Phase 2: Backend Integration

(Detailed in PHASES.md)

## Phase 3: Admin Panel

(Detailed in PHASES.md)

## Phase 4: Monetization & Advanced Features

(Detailed in PHASES.md)
