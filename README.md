# Task Manager App

A mobile application for managing tasks, built using React Native, TypeScript, and @react-native-material/core. The app provides a clean and intuitive interface for creating, viewing, and managing tasks effectively.



## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Design Choices](#design-choices)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)

## Demo

<img width="632" alt="Screenshot 2024-12-13 at 05 02 36" src="https://github.com/user-attachments/assets/15cae16d-29f2-4620-a87a-3e90f0a447a2" />

## Features
- Displays a list of tasks with details.
- Allows marking tasks as complete with a single button click.
- Supports resetting all tasks to incomplete state.
- Handles errors gracefully with an option to reload data.
- Clean and modern UI with support for shadows and gradients.

## Technologies
- **React Native** - Framework for building mobile apps using React.
- **TypeScript** - Type safety and improved developer experience
- **React Query** - Data fetching and caching
- **@react-native-material/core** - Material Design components for React Native.

## Design Choices
1. **User Interface**: 
   - **Material Design Components**: Used @react-native-material/core for a polished, production-ready UI.
   
2. **State Management**:
   - **React Query**: React Query was used for data fetching, caching, and synchronization with the GitHub API. This choice simplifies state management and improves data handling performance.

3. **Data Visualization**:
   - **Victory**: Victory was chosen for the pie chart visualization of issue breakdowns, providing a clean and simple way to represent data.

4. **Code Structure**:
   - Modularized components like TaskCard, Header, and TaskListScreen for better reusability and maintainability.
  
5. **Error Handling**:
   - Custom error view to display user-friendly messages and retry options.

## Getting Started
### Prerequisites
- Node.js (v16.x or above)
- npm (v8.x or above)
- Android Studio or Xcode for running the application

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Charl070/react-native-task-list.git
   cd react-native-task-list

2. Install the dependencies:
   ```bash
   npm install

## Usage
1. Start the development server:
```bash
npm start
The application will launch on the selected device or emulator.
   
