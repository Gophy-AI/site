# Gophy Web

Landing page for the Gophy desktop app — [gophy.ai](https://gophy.ai)

## Tech Stack

- [Astro 5](https://astro.build/) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [TypeScript](https://www.typescriptlang.org/) — type safety
- shadcn/ui-inspired zinc/neutral design system

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build to dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Pages

| Route | Source | Description |
|-------|--------|-------------|
| `/` | `src/pages/index.astro` | Landing page — Hero, Features, How It Works |
| `/privacy` | `src/pages/privacy.astro` | Privacy policy |
| `/terms` | `src/pages/terms.astro` | Terms of service |

## Components

| Component | Description |
|-----------|-------------|
| `Header.astro` | Fixed nav with GitHub and Download links |
| `Hero.astro` | Main value proposition, CTAs, feature badges |
| `Features.astro` | 9 feature cards (6 available + 3 coming soon) |
| `HowItWorks.astro` | 3-step vertical flow: Download, Record, Review |
| `Footer.astro` | Dark footer with product and legal links |

## Theme

The design system lives in `src/styles/global.css` with CSS custom properties following shadcn conventions:

- **Colors**: zinc/neutral palette (`--background`, `--foreground`, `--card`, `--muted`, `--accent`, `--border`, `--primary`, `--secondary`)
- **Font**: Inter (Google Fonts)
- **Utilities**: `btn-primary`, `btn-outline`, `btn-ghost`, `card`, `badge`

## Project Structure

```
web/
├── src/
│   ├── components/     # Astro components (Header, Hero, Features, etc.)
│   ├── layouts/        # Base HTML layout with meta tags and fonts
│   ├── pages/          # Route pages (index, privacy, terms)
│   ├── styles/         # Global CSS with Tailwind theme
│   └── lib/            # Analytics (OpenPanel)
├── public/             # Static assets (favicon, OG image)
├── astro.config.mjs    # Astro config (site: gophy.ai, sitemap, Tailwind)
└── package.json
```

## Deployment

Static output to `dist/`. Hosted at [gophy.ai](https://gophy.ai). Sitemap auto-generated via `@astrojs/sitemap`.
