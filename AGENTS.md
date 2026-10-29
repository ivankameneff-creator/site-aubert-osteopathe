<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Aubert Osteopathe Site

This repository contains the local homepage clone for https://www.aubert-osteopatheparis16.com/.

- Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.
- Run locally with `npm.cmd run dev`; run lint, typecheck, and production build with `npm.cmd run check`.
- Homepage content and outbound links are in `src/app/page.tsx`; page styling is in `src/app/globals.css`.
- Site-specific assets and notes are in `public/sites/aubert-osteopatheparis16/` and `docs/research/aubert-osteopatheparis16/`.
- The contact form is intentionally non-submitting; it reports that no mail service is configured.

Preserve the source site's observed layout and interactions when making visual changes. Before changing Next.js APIs, read the matching guide under `node_modules/next/dist/docs/`.
