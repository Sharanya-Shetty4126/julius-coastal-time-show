# JULIUS — Coastal Time Show

A premium, cinematic restaurant brand website for JULIUS, a coastal dining experience inspired by Honnavar and the Arabian Sea. The project is built as a multi-page React app with a time-aware visual theme that shifts between morning, daytime, sunset, and night atmospheres.

## Overview

This project showcases a luxury seafood and hospitality brand with:

- immersive coastal visuals
- multi-page navigation
- responsive editorial layout
- time-based atmosphere changes
- strong restaurant branding and storytelling
- premium restaurant menu and gallery experience

The website is designed to feel more like a boutique hospitality experience than a standard restaurant template.

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Router / TanStack Start
- TanStack Query
- Tailwind CSS v4
- shadcn-style UI primitives
- Radix UI components
- Lucide React icons
- ESLint + Prettier

## Project Structure

```text
julius-coastal-time-show/
├── public/
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── *.jpg
│   │   └── *.png.asset.json
│   ├── components/
│   │   ├── JuliusLayout.tsx
│   │   └── ui/
│   ├── lib/
│   │   ├── content.ts
│   │   └── lovable-error-reporting.ts
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── gallery.tsx
│   │   ├── guest-notes.tsx
│   │   ├── index.tsx
│   │   ├── menu.tsx
│   │   ├── visit.tsx
│   │   ├── wine-bar.tsx
│   │   └── README.md
│   ├── router.tsx
│   ├── server.ts
│   ├── start.ts
│   ├── styles.css
│   └── routeTree.gen.ts
├── AGENTS.md
├── components.json
├── eslint.config.js
├── package.json
├── tsconfig.json
├── vite.config.ts
├── bun.lock
├── .prettierrc
├── .prettierignore
├── .gitignore
├── roadmap.md
└── README.md
```

## Features

### 1. Time-aware experience
The homepage detects the visitor's local time and changes the visual atmosphere between:

- Morning
- Day
- Sunset / Evening
- Night

### 2. Multi-page restaurant website
Navigation includes:

- Home
- About
- Menu
- Wine & Bar
- Gallery
- Visit
- Guest Notes
- Contact

### 3. Premium design language
The project uses:

- deep blue and ocean-inspired palette
- luxurious serif typography
- editorial room-like spacing
- coastal hospitality storytelling
- smooth transitions and atmospheric motion

### 4. Content-driven structure
The restaurant content is centralized in `src/lib/content.ts` to make it easy to modify:

- brand information
- menu items
- wine bar details
- attractions and travel info
- guest note guidance
- contact placeholders

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or Bun

### Installation

```bash
npm install
```

or

```bash
bun install
```

### Run in development mode

```bash
npm run dev
```

The app will start in Vite development mode and be available locally in the browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

```json
{
  "dev": "vite dev",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview",
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

## Key Files to Edit

### Content updates
- `src/lib/content.ts` — menu, contact info, brand text, visit content

### Layout and page shell
- `src/components/JuliusLayout.tsx` — navigation, footer, shared layout
- `src/routes/__root.tsx` — app shell, SEO metadata, fonts, favicon

### Styling and theming
- `src/styles.css` — theme tokens, fonts, helper classes, motion styles

### Page content
- `src/routes/*.tsx` — each route for the website sections

## Notes

- This project is a front-end marketing site; there is no backend or database configured.
- It is designed for brand representation and visual presentation rather than transactional features.
- Some contact items are currently placeholders and should be replaced with real business details.
- Images in `src/assets` are part of the brand experience and can be updated to match real restaurant photography.

## License

This project does not currently include a custom license file. If you intend to publish or distribute it, please add an appropriate license before deployment.

## Recommended Next Steps

1. Replace placeholder contact details in `src/lib/content.ts`
2. Add real restaurant photos and branding assets
3. Connect a form or booking integration for contact or reservations
4. Optimize for production deployment (Vercel, Netlify, or other static hosting)
5. Add analytics and SEO improvements if the site is going live

## Summary

JULIUS is a visually rich coastal restaurant website built with modern React tooling, custom theming, and polished route-based page structure. It is well-suited for a premium hospitality brand and is easy to customize for real-world restaurant content and deployment.
