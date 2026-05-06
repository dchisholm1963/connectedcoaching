# Connected Coaching

A full-featured website for Connected Coaching, a private relational coaching practice owned by Donna Chisholm based in Eugene, Oregon.

## About the Project

This site presents Donna's services, credentials, philosophy, and media appearances. It includes a contact form powered by Netlify Forms and smooth client-side navigation between six main pages.

## Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React 19, SSR)
- **Routing**: TanStack Router v1 (file-based, client-side navigation)
- **Build**: Vite 7
- **Styling**: Tailwind CSS 4 + custom CSS variables (no component library dependencies)
- **Fonts**: Cormorant Garamond (headings) + Jost (body) via Google Fonts
- **Forms**: Netlify Forms
- **Deployment**: Netlify

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, intro, credentials, CTA |
| `/about` | About Donna — bio, story, credentials |
| `/services` | Services & Classes — group series, private sessions, contact form |
| `/why-work-with-me` | Outcomes — client results, testimonials |
| `/resources` | External resource cards |
| `/media` | Podcast, video, and webinar appearances |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. Use the Netlify CLI for full feature support (forms, etc.):

```bash
netlify dev
```

This starts at `http://localhost:8888`.

## Environment Variables

No environment variables are required for the base site. To add AI features, set one of: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`.

## Building for Production

```bash
npm run build
```

Output is in `dist/client/`. Deploy automatically via Netlify on push to main.

## Contact Form

The contact form on the Services page uses Netlify Forms. The static registration skeleton is at `public/contact-form.html`. In local development, form submissions will not process — test on a Netlify deploy preview.
