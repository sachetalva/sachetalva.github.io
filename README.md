# Sachet Alva - Personal Profile Website

An interactive, editorial-style typography portfolio and resume website built with **Solid JS**, **Vite**, **TypeScript**, and **Vanilla CSS**. 

The site features a responsive layouts that allows users to toggle between an **Interactive View** (featuring an interactive mock terminal console and timeline scrubber) and a **Classic Resume** (fully optimized for executive screen scans and printing to a concise 2-page PDF).

---

## Key Features

### 1. Interactive View
* **Swiss Typography Grid**: An elegant, high-contrast, Swiss-inspired layout focused on readability and premium typography.
* **Interactive CLI Terminal**: A simulated terminal allowing visitors to query professional logs via POSIX-like commands (e.g., `whoami`, `ls -la`, `cat bio.txt`, `cat skills.json`, `cat achievements.log`, `cat contact.txt`, and a hidden `sh easter_egg.sh`).
* **Whiteboard Career Odyssey Scrubber**: An interactive horizontal timeline scrubber to step through career milestones, organizational scale, and detailed technical accomplishments.
* **Filtered Projects Matrix**: Filter projects dynamically by categories: *Software Engineering*, *Cloud Services*, and *Management & Ops*.
* **Neumorphic Rotary Navigation Dial**: A floating ceramic-style dial widget providing quick jump shortcuts to all sections.

### 2. Classic Resume View
* **Executive Screen Scan**: A clean, single-page-equivalent overview layout of the resume.
* **Print-Optimized conciseness**: Fully customized print styles that format the page into a clean, 2-page print layout (accessible via the "Download Resume" print execution).

---

## Tech Stack & Tooling

* **Core**: [Solid JS](https://solidjs.com/) (v1.9.12), TypeScript (v6.0), Vanilla CSS
* **Build System**: [Vite](https://vite.dev/) (v8.0)
* **Unit Testing**: [Vitest](https://vitest.dev/) (v4.1) & [@solidjs/testing-library](https://github.com/solidjs/templates/tree/main/ts-vitest)
* **E2E Testing**: [Playwright](https://playwright.dev/) (v1.60)
* **CI/CD**: GitHub Actions deployment script (`deploy.yml`) to build and deploy the production bundle to GitHub Pages.

---

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Available Scripts

In the project directory, you can run:

#### `npm run dev`
Runs the app in development mode.<br />
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

#### `npm run build`
Builds the app for production to the `dist/` folder.<br />
It correctly bundles Solid JS, minifies the code assets, and generates filename hashes for caching optimization.

#### `npm run preview`
Locally previews the production build.

#### `npm run test`
Runs the Vitest unit tests in the jsdom environment.

#### `npm run test:e2e`
Runs the Playwright E2E browser tests locally.

---

## Deployment

Deployments are fully automated. On every push to the `main` branch, the GitHub Actions workflow compiles the codebase, runs unit tests, builds the optimized production bundle, and deploys the static files to GitHub Pages.
