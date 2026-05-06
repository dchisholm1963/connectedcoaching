# AGENTS.md — Connected Coaching

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A multi-page website for Connected Coaching, a private relational coaching practice owned by Donna Chisholm, Eugene, Oregon. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   ├── placeholder.png
│   └── contact-form.html  # Netlify Forms static skeleton — registers the contact form at build time.
├── src
│   ├── components
│   │   ├── Nav.tsx      # Fixed top navigation bar with mobile hamburger menu.
│   │   └── Footer.tsx   # Site footer with nav links and contact info.
│   ├── routes
│   │   ├── __root.tsx   # HTML shell: imports Nav + Footer, adds Google Fonts.
│   │   ├── index.tsx    # Home page (/) — hero, intro, credentials, CTA.
│   │   ├── about.tsx    # About Donna (/about) — bio, story, credentials.
│   │   ├── services.tsx # Services & Classes (/services) — sessions, class series, contact form.
│   │   ├── why-work-with-me.tsx  # Client outcomes + testimonials (/why-work-with-me).
│   │   ├── resources.tsx         # External resource cards (/resources).
│   │   └── media.tsx             # Media appearances (/media).
│   ├── router.tsx   # TanStack Router setup: creates router from generated routeTree.
│   └── styles.css   # All CSS: Tailwind base + cc- prefixed component classes + CSS variables.
├── AGENTS.md
├── README.md
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`. The router auto-generates `src/routeTree.gen.ts` — do not edit it manually.

- `__root.tsx` — root HTML shell (uses `shellComponent`, not `component`)
- `index.tsx` — route for `/`
- `about.tsx` — route for `/about`
- `services.tsx` — route for `/services`
- `why-work-with-me.tsx` — route for `/why-work-with-me`
- `resources.tsx` — route for `/resources`
- `media.tsx` — route for `/media`

### Design System

All design tokens in `src/styles.css` as CSS custom properties. All component classes prefixed `cc-`. No component library used.

**Colors**: `--cream`, `--sage`, `--terracotta`, `--warm-dark`, `--gold`, `--white-warm` families.

**Typography**: Cormorant Garamond (serif headings) + Jost (sans body), loaded via Google Fonts in `__root.tsx`.

### Netlify Forms

Contact form on `/services` submits via fetch to `/contact-form.html` with `Content-Type: application/x-www-form-urlencoded`. The static skeleton at `public/contact-form.html` registers the form at build time. Forms only process on Netlify deploys.

### Scroll Animations

Each route file contains a local `useFadeIn(ref)` hook using IntersectionObserver. Elements with class `cc-fade-in` are revealed when they enter the viewport.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind base + CSS custom properties + all `cc-` component classes |

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Start with Netlify features (port 8888)
npm run build    # Production build
```

## Conventions

- Components: PascalCase
- Routes: kebab-case files
- CSS classes: `cc-` prefix for all custom classes
- External links: `target="_blank" rel="noopener noreferrer"`
- Internal links: `<Link to="..." />` from `@tanstack/react-router`
- Email CTAs: `mailto:dchisholm114@gmail.com` with descriptive subject lines

## Content Locations

| Content | File | Location |
|---------|------|----------|
| Donna's credentials | `src/routes/index.tsx` | `credentials` array |
| Full bio | `src/routes/about.tsx` | inline JSX |
| Service pricing | `src/routes/services.tsx` | inline JSX |
| Client outcomes (8) | `src/routes/why-work-with-me.tsx` | `outcomes` array |
| Testimonials | `src/routes/why-work-with-me.tsx` | `testimonials` array |
| Resources (8) | `src/routes/resources.tsx` | `resources` array |
| Media appearances (5) | `src/routes/media.tsx` | `mediaItems` array |

## Environment Variables

No environment variables required for the base site. For AI features: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, or `GEMINI_API_KEY`.
