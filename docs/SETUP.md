# 🚀 Setup Guide

## Phase 1: Local Development Setup

### Prerequisites

```bash
# Required
- Node.js 18 or higher
- npm or yarn
- Git
- Expo CLI

# Optional (for testing)
- iOS Simulator (Mac only)
- Android Emulator
- Expo Go app on physical device
```

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/AnhSpears/story-app.git
cd story-app
```

#### 2. Setup Mobile App

```bash
cd mobile
npm install
```

#### 3. Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit .env with your settings if needed
# For Phase 1, most settings can remain default
```

#### 4. Start Development Server

```bash
# Start Expo development server
npx expo start

# Options:
# Press 'i' for iOS simulator
# Press 'a' for Android emulator  
# Press 'w' for web browser
# Scan QR code with Expo Go app for physical device
```

### Project Structure Setup

The following directories should be created during initial setup:

```bash
# If not already created by scaffold
mkdir -p mobile/app/{\(tabs\),stories,search,settings}
mkdir -p mobile/{components/{reader,library,common},services,hooks,types,constants,data,utils,store/slices}
mkdir -p docs
```

## Phase 2: Backend Setup

### Backend Installation

```bash
cd backend
npm install
```

### Database Setup (Supabase)

1. Create Supabase project at https://supabase.com
2. Get API keys and database URL
3. Create `.env` file in backend folder
4. Run migrations:

```bash
npm run migrate
```

### Start Backend Server

```bash
npm run dev
```

## Phase 3: Admin Dashboard Setup

```bash
cd admin
npm install
npm run dev
```

## Development Workflow

### Running All Services

```bash
# Terminal 1: Mobile app
cd mobile
npx expo start

# Terminal 2: Backend API
cd backend
npm run dev

# Terminal 3: Admin dashboard
cd admin  
npm run dev
```

### Hot Reload

- Mobile: Changes automatically reload in Expo
- Backend: Uses nodemon for auto-reload
- Admin: Uses Next.js hot reload

## Testing

### Unit Tests

```bash
# Mobile
cd mobile
npm test

# Backend
cd backend
npm test
```

### Integration Tests

```bash
cd mobile
npm run test:integration
```

## Debugging

### Mobile Debugging

- Use React DevTools with Expo
- Enable remote debugging in Expo menu
- Check console output in terminal

### Backend Debugging

- Use VS Code debugger
- Check server logs in terminal
- Use curl or Postman for API testing

## Build for Production

### Mobile Build

```bash
cd mobile

# iOS
eas build --platform ios

# Android  
eas build --platform android

# Web
npm run export
```

### Backend Build

```bash
cd backend
npm run build
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port
lsof -i :8081  # iOS dev server
lsof -i :3000  # Backend
lsof -i :3001  # Admin

# Kill process
kill -9 <PID>
```

### Dependencies Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# For Expo
npx expo prebuild --clean
```

### AsyncStorage Errors

```bash
# Clear AsyncStorage
# In console:
// AsyncStorage.clear().then(() => console.log('Cleared'));
```

## Environment Variables

Create `.env` files in each directory:

### mobile/.env

```
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_APP_NAME=Story App
```

### backend/.env

```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/story_app
JWT_SECRET=your_jwt_secret_here
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```

### admin/.env.local

```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## Next Steps

1. Start with Phase 1 setup
2. Complete mobile app development
3. Move to Phase 2 backend integration
4. Add Phase 3 admin functionality
5. Implement Phase 4 features

See [PHASES.md](./PHASES.md) for detailed phase breakdown.
