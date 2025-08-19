# Quick Upgrade Template

This repository showcases a simple React + Vite landing page that can be configured on the fly. It renders a header, hero, about, services, contact section, and footer, all styled with Tailwind CSS. A floating "+" button opens a configuration dialog where you can change the site title, brand colors, and section content. Settings are saved in your browser's local storage.

> **Note:** This project is for illustration purposes only.

## What We've Done

- Scaffolded a React application using Vite.
- Implemented modular components for each page section.
- Added a runtime configuration dialog with persistence to `localStorage`.
- Included basic tests and linting to ensure code quality.

## Getting Started

1. **Install dependencies**
   ```bash
   yarn install
   ```
2. **Start the development server**
   ```bash
   yarn dev
   ```
   Then open [http://localhost:5173](http://localhost:5173) in your browser.
3. **Customize the page**
   Click the floating "+" button to open the configuration dialog. Update the fields and save to apply your changes.

## Available Scripts

- `yarn dev` – start a development server with hot reloading.
- `yarn build` – produce an optimized production build.
- `yarn lint` – run ESLint across the project.
- `yarn test` – execute component tests.

