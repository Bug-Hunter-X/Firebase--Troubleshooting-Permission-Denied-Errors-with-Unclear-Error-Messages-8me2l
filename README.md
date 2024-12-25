# Firebase Permission Denied Error Debugging

This repository demonstrates a common, yet subtle, issue when working with Firebase Realtime Database security rules.  The problem arises when overly restrictive rules lead to permission denied errors without clear explanations.

The `firebaseBug.js` file contains code that attempts to access database data without proper authentication, triggering the permission denied error.  `firebaseBugSolution.js` presents the solution, showing how to properly authenticate and handle potential errors.