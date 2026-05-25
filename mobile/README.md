# Truyện Plus Mobile App

## Local Development

### Setup

```bash
cd mobile
npm install
```

### Start Development Server

```bash
npm start

# Or with specific platform
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
```

### Available Scripts

- `npm start` - Start Expo dev server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

### Project Structure

```
.
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout
│   ├── (tabs)/            # Tab navigation
│   ├── stories/           # Story detail screens
│   ├── reader.tsx         # Full-screen reader
│   ├── search/            # Search screens
│   └── settings/          # Settings screens
├── components/            # Reusable components
├── hooks/                 # Custom React hooks
├── services/              # Business logic services
├── types/                 # TypeScript definitions
├── constants/             # App constants
├── data/                  # Mock data
├── utils/                 # Utility functions
├── app.json              # Expo configuration
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
```

## Navigation Structure

### Tab Navigation (5 tabs)
1. **Home** (🏠) - Featured stories, recommendations
2. **Library** (📚) - Browse all stories with filters
3. **Favorites** (❤️) - Saved favorite stories
4. **History** (🕐) - Reading/listening history
5. **Profile** (👤) - User settings

### Stack Navigation
- Story Detail `stories/[id]`
- Reader `reader` (full screen)
- Advanced Search `search/advanced`
- Reading Settings `settings/reading`

## Next Steps

1. Run `npm install` to install dependencies
2. Run `npm start` to start the dev server
3. Scan QR code with Expo Go app or use simulator
4. Start implementing components!

## Dependencies

- **expo**: Managed React Native framework
- **expo-router**: File-based routing
- **expo-av**: Audio/Video playback
- **react-native**: Core UI framework
- **TypeScript**: Type safety

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
