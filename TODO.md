# Firebase v22 Migration Plan

## Information Gathered:
- Current project uses React Native Firebase v23.7.0 with deprecated namespaced API
- AuthContext.tsx is the only file using Firebase auth functionality
- Deprecated methods found:
  - `auth().signInWithEmailAndPassword()` (line 46)
  - `auth().createUserWithEmailAndPassword()` (line 57)
  - `auth().signOut()` (line 66)
  - `auth().onAuthStateChanged()` (line 28)

## Plan:
1. Update Firebase auth import to use modular SDK
2. Replace deprecated `auth()` calls with modular API
3. Update authentication state listener to use new syntax
4. Test the migrated code

## Dependent Files to be edited:
- src/Context/AuthContext.tsx

## Followup steps:
- Install/update Firebase dependencies if needed
- Test login and registration functionality
- Verify authentication flow works correctly


## Changes needed:
1. Import change: `import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, getAuth } from '@react-native-firebase/auth';`
2. Method calls update to use modular syntax
3. Auth state listener update

## Status: IN PROGRESS
- ✅ Plan created
- 🔄 Updating AuthContext.tsx with modular API
