# Portfolio

Personal portfolio site built with Angular 21 (standalone, zoneless, signals) and Tailwind CSS v4.

## Sections

- **Home** (`/`) — hero intro and highlights
- **Projects** (`/projects`) — software/dev work
- **Design** (`/design`) — visual/creative work
- **Blog** (`/blog`, `/blog/:slug`) — writing
- **About** (`/about`) — bio, experience, education, skills (resume)
- **Contact** (`/contact`) — email and social links

## Customize your content

All real content lives in plain data files — edit these, nothing else, to update the
site's text:

- `src/app/data/profile.ts` — name, bio, experience, education, skills, socials
- `src/app/data/projects.ts` — software projects
- `src/app/data/design-work.ts` — design/creative pieces
- `src/app/data/blog-posts.ts` — blog posts

Static files (résumé PDF, images) go under `public/` — see the `README.md` files in
`public/assets/` and `public/images/work/` for where to put them.

Site title/description/fonts are in `src/index.html`. Color theme tokens are in
`src/styles.css` (`@theme` block).

## Develop

```bash
npm start       # dev server at http://localhost:4200
npm run build   # production build to dist/portfolio
npm test        # unit tests (vitest)
```

## Deploy

`npm run build` outputs a static site to `dist/portfolio/browser`. Deploy that folder to
any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). This is a
client-side-rendered SPA — if deploying to a static host, configure it to rewrite all
routes to `index.html` (so deep links like `/projects` work on refresh).
