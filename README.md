# Awwards-Win

A modern React web application built with Vite, featuring smooth animations and responsive design.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Available Scripts

- **`npm run dev`** - Start the development server with hot module reloading
- **`npm run build`** - Build the project for production
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally

## 📦 Project Structure

```
awwards-win/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ClipPathTitle.jsx
│   │   ├── FlavorSlider.jsx
│   │   ├── FlavorTitle.jsx
│   │   ├── Navbar.jsx
│   │   └── VideoPinSection.jsx
│   ├── sections/            # Page sections
│   │   ├── BenefitSection.jsx
│   │   ├── FlavorSection.jsx
│   │   ├── FooterSection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── MessageSection.jsx
│   │   ├── NutritionSection.jsx
│   │   └── TestimonialSection.jsx
│   ├── constants/           # Application constants
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
│   ├── fonts/
│   ├── images/
│   └── videos/
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── tailwind.config.js      # Tailwind CSS configuration (if present)
├── package.json
└── index.html              # HTML entry point
```

## 🛠️ Technologies & Dependencies

### Frontend Framework
- **React** (^19.2.0) - UI library
- **React DOM** (^19.2.0) - React rendering

### Styling & Animations
- **Tailwind CSS** (^4.1.18) - Utility-first CSS framework
- **@tailwindcss/vite** (^4.1.18) - Tailwind CSS Vite plugin
- **GSAP** (^3.14.2) - Professional animation library
- **@gsap/react** (^2.1.2) - React hooks for GSAP
- **@studio-freight/lenis** (^1.0.42) - Smooth scrolling library

### Responsive Design
- **react-responsive** (^10.0.1) - Media query utility for React

### Build Tools
- **Vite** (^7.2.4) - Lightning-fast build tool
- **@vitejs/plugin-react** (^5.1.1) - React plugin for Vite

### Code Quality
- **ESLint** (^9.39.1) - JavaScript linter
- **eslint-plugin-react-hooks** (^7.0.1) - ESLint rules for React hooks
- **eslint-plugin-react-refresh** (^0.4.24) - ESLint plugin for React Refresh

## 📝 Development

The application follows a component-based architecture with:
- **Components**: Reusable UI elements
- **Sections**: Page sections combining components
- **Constants**: Shared configuration and constants

### Code Style
- ESLint is configured to maintain code quality
- Run `npm run lint` to check for issues
- Run `npm run lint -- --fix` to automatically fix issues

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## 📱 Responsive Design

The project uses `react-responsive` for handling responsive layouts across different screen sizes.

## ✨ Features

- Smooth animations with GSAP
- Smooth scrolling experience with Lenis
- Responsive design for all devices
- Modular component architecture
- Modern React 19 with latest features
- Optimized Vite build system

## 📄 License

This project is private and intended for internal use.

## 🤝 Contributing

For contributions, please ensure:
- Code follows the ESLint rules
- Components are properly documented
- Responsive design is maintained
