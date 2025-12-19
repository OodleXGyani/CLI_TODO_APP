# CLI TODO App - Manual Testing Guide

Quick guide to test the CLI TODO mobile app. Built with React Native - has auth, task management, calendar, and profile stuff.

## What You Need
- Android device or simulator
- Latest app build
- Internet connection for login/register

## Main Testing Areas

### 1. Authentication Flow

#### Welcome Screen
1. **App Launch** - Launch app, check welcome screen shows with logo and buttons
2. **Login Button** - Tap login, should go to login screen
3. **Register Button** - Tap "Create Account", should go to register screen  
4. **Back Navigation** - Back button should work from auth screens

#### Registration
1. **Valid Registration** - Fill form with valid data, tap "Sign Up" → should work
2. **Bad Email** - Use "bad-email" format → should show validation error
3. **Weak Password** - Use <6 chars → should show password error  
4. **Password Mismatch** - Different passwords → should show mismatch error
5. **Empty Fields** - Leave fields blank → should show required field errors
6. **Show/Hide Password** - Tap eye icon → password visibility should toggle

#### Login
1. **Valid Login** - Use correct email/password → should login and go to main app
2. **Bad Credentials** - Wrong email/password → should show error
3. **Empty Fields** - Leave fields blank → should show required errors
4. **Password Toggle** - Tap eye icon → password should show/hide
5. **Social Login** - Google/Apple buttons → should show "Not implemented" alert

### 2. Navigation
1. **Tab Navigation** - Bottom tabs should switch between Home, Tasks, Profile
2. **Screen Transitions** - Navigation should be smooth between screens
3. **Back Button** - Hardware back should work (Android)

### 3. Home Screen
1. **Layout** - Should show calendar at top, current tasks below
2. **Calendar** - Calendar component displays current month/date
3. **Tasks Display** - Current tasks show properly with titles and dates

### 4. Task Management
1. **Add Task** - Tap + button, enter title, tap "Add Task" → task should appear
2. **Empty Task** - Try to add empty task → should prevent or show error
3. **Task Categories** - Tasks should appear in Current/Upcoming/Completed sections
4. **Swipe Actions** - Swipe tasks → should perform actions (complete/delete)
5. **Task Completion** - Complete tasks → should move to completed section
6. **Empty State** - No tasks → should show helpful empty state message

### 5. Profile Screen
1. **Profile Display** - Should show user info properly
2. **Navigation** - Should work smoothly with other screens


## Quick Test Checklist

### Setup
- [ ] Install app on device/simulator
- [ ] Have internet connection
- [ ] Note device specs

### Core Features
- [ ] Register new account
- [ ] Login with valid credentials
- [ ] Create some tasks
- [ ] Navigate between screens
- [ ] Complete a task
- [ ] Check profile screen

### User Experience
- [ ] Buttons respond properly
- [ ] Navigation feels smooth
- [ ] Error messages are clear
- [ ] App doesn't crash

## Test Data

**Valid Account**: testing@gmail.com / Oodles@123  
**Invalid Account**: oodles@gmail.com / Oodles@123 


