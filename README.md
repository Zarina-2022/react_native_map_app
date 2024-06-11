**Project Description:**

This project is a React Native application designed to manage notes, locations, and user profiles. It utilizes Firebase authentication for user management and integrates various screens and components to provide a comprehensive and user-friendly experience. 

### Screens and Components:

1. **Authentication Screens:**
   - **Launch:** Initial screen shown before authentication.
   - **SignIn:** Allows users to sign in using Firebase authentication.
   - **SignUp:** Allows new users to register using Firebase authentication.

2. **Main Application Screens:**
   - **TabNavigator:** Contains the bottom tab navigation with the following tabs:
     - **Map:** Displays a map interface for location-based features.
     - **Favorites:** Shows the user's favorite notes or locations.
     - **Notes:** Main interface for viewing and managing notes.
     - **Profile:** User profile management and updates.
   - **AddNote:** Interface for adding a new note.
   - **EditNote:** Interface for editing an existing note.
   - **Detail:** Displays details of a selected note.
   - **CoordinateSelect:** Interface for selecting coordinates on the map.
   - **AddLocation:** Allows users to add new locations.
   - **ProfileUpdate:** Interface for updating user profile information.

### Dependencies:

- **React:** Core library for building the user interface.
- **React Native:** Framework for building native mobile applications using React.
- **@react-navigation/native-stack:** Provides stack navigator for navigation between screens.
- **@react-native-firebase/auth:** Firebase authentication module for managing user sign-in and sign-up processes.

### Database:

- **Firebase:** Used for authentication and potentially for storing user data, notes, and locations.

### Navigation Structure:

The application uses a stack navigator (`createNativeStackNavigator`) to manage the navigation flow. Based on the authentication state, it either shows the authentication screens (Launch, SignIn, SignUp) or the main application screens (TabNavigator and others). The `TabNavigator` contains a bottom tab navigation system for quick access to the Map, Favorites, Notes, and Profile screens.

### Usage:

1. **Authentication:** Users start at the Launch screen and can sign in or sign up.
2. **Post-Authentication:** Authenticated users can navigate through the main tabs to manage notes, view maps, update profiles, and handle their favorite items.
3. **Notes Management:** Users can add, edit, and view details of notes.
4. **Location Management:** Users can select coordinates on a map and add new locations.
5. **Profile Management:** Users can update their profile information.

This project combines effective user management with intuitive navigation and rich feature sets for handling notes and locations, providing a seamless user experience on mobile platforms.

### Screen gif:

<img src="map.gif" width="300" height="600">
