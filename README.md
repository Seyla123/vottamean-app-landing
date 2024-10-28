# Landing Site Project

## Convention Guide: [Capstones Convention Guide](https://outgoing-oval-b13.notion.site/Capstones-Convention-Guide-f8214576f0da41758941a1678c8a6e07?pvs=4)

## Table of Contents
1. [Project Overview](#project-overview)
2. [Dependencies](#dependencies)
3. [Project Structure](#project-structure)
4. [Component Standards](#component-standards)
5. [State Management](#state-management)
6. [Styling Guide](#styling-guide)
7. [Routing Standards](#routing-standards)
8. [Testing and Linting](#testing-and-linting)
9. [Version Control](#version-control)
10. [Naming, Git & Deployment Conventions](#naming-git-deployment-conventions)

## 1. Project Overview
This project is a landing page application built using **React** and **Vite**. It utilizes **Tailwind CSS** for styling, **Redux Toolkit** for state management, and various libraries for animations, carousels, and form handling.

## 2. Dependencies
The following are the key dependencies used in this project:
- **@emailjs/browser**: Provides email sending functionality.
- **@reduxjs/toolkit**: State management with Redux.
- **@studio-freight/react-lenis**: Smooth scrolling library.
- **framer-motion**: For animations.
- **react-slick** and **slick-carousel**: For carousel components.
- **styled-components**: For styled components.
- **tailwindcss**: For utility-based styling.
- **clsx** and **tailwind-merge**: For handling Tailwind CSS classes conditionally and merging them.

### Dev Dependencies
- **eslint**: Linter for React and JavaScript.
- **@vitejs/plugin-react**: Integrates React with Vite.
- **postcss** and **autoprefixer**: For processing and optimizing CSS.

For a complete list of dependencies, see `package.json`.

## 3. Project Structure

### 3.1 Root Directory
- **index.html**: Main HTML file.
- **src**: Contains all source code.
  - **/assets**: Images, fonts, and static assets.
  - **/components**: Reusable React components.
  - **/pages**: Main pages of the application.
  - **/redux**: Redux setup for state management.
  - **/styles**: Tailwind CSS configuration and custom styles.
  - **/utils**: Utility functions.
  - **/routes**: Routing setup.

## 4. Component Standards
- Components are stored in the `/components` directory.
- Component names should follow **PascalCase** (e.g., `Navbar.js`).
- Use functional components with hooks.
- Keep components modular and reusable.

## 5. State Management
- **Redux Toolkit** is used for state management.
- Store Redux slices in the `/redux/slices` directory (e.g., `layoutSlice.js`).
- Manage global UI states in Redux as needed.

## 6. Styling Guide
- **Tailwind CSS** is used as the primary styling framework.
- Use **tailwind-merge** to manage conditional Tailwind classes.
- Custom themes and global styles are defined in the `/styles` directory.

## 7. Routing Standards
- Define all routes in a centralized routing file using **React Router**.
- Lazy-load pages for optimized performance.
- Routes include `/`, `/about`, and `/contact` for main sections.

## 8. Testing and Linting
- **ESLint** is configured for React and JavaScript linting.
- Follows the configurations provided in `.eslintrc.json`.
- Tests can be added using **Jest** and **React Testing Library**.

## 9. Version Control
- Use the **feature-branch** strategy for development.
- Main branches:
  - **main**: Stable release.
  - **develop**: Latest changes.
- Branch naming convention: `feature/<feature-name>`, `bugfix/<bug-name>`.

## 10. Naming, Git & Deployment Conventions

### 10.1 Coding Standards
- **Naming Conventions**:
  - Use `camelCase` for functions and variables.
  - Use `PascalCase` for component names.
- **Code Formatting**: Use `Prettier` for code formatting.

### 10.2 Version Control
- **Branch Naming**:
  - Use branches for new features and bug fixes with the format `feature/<name>` or `bugfix/<name>`.

### 10.3 Deployment Conventions
- **Platform**: Host on **Netlify** or **Vercel**.
- **Build Command**: Use `vite build` for building the application for production.
- **Preview Command**: Use `vite preview` to test the build locally.

**Note**: Follow the repository guidelines for creating issues, committing code, and managing pull requests.
