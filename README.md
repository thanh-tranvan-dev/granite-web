# Granite workshop website

Phase 1 frontend for a small Vietnamese stone fabrication and installation workshop. Built with Next.js App Router, TypeScript, Tailwind CSS 4 and reusable server-rendered components. Portfolio entries are clearly identified as examples using illustrative photography.

## Requirements and commands

- Node.js 20.9 or later
- npm

```bash
npm install
npm run dev
npm run lint
npm run format
npm run format:check
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local` for local overrides.

- `NEXT_PUBLIC_SITE_URL`: canonical site origin used for metadata, sitemap and robots (set this to the production domain before deployment).
- `NEXT_PUBLIC_API_URL`: reserved for a future FastAPI backend; no API calls are made in Phase 1.

## Project structure

- `src/app`: routes, metadata, sitemap and robots handlers
- `src/components`: shared site chrome, content blocks and client-only quote form
- `src/config/site.ts`: central business contact and local service configuration
- `src/data/content.ts`: editable services, stones, sample projects, articles and image references
- `src/lib/api.ts`: URL helper reserved for the future FastAPI integration
- `public/images`: locally hosted, resized WebP illustrative stock photography
- `docs/image-sources.md`: image source and usage notes

## Maintain the content

Replace placeholders in `src/config/site.ts` (name, phone, Zalo, email, address, service area, map URL and domain). Use a fully qualified production domain in `domain` or set `NEXT_PUBLIC_SITE_URL`; keep contact values out of page components.

Replace illustrative photos by updating `photos` in `src/data/content.ts`. Portfolio images are not completed workshop jobs. Before production, replace project samples with real workshop photographs and descriptions, update `docs/image-sources.md`, and make sure image alt text describes the actual content. The image records are not claims that the business performed depicted work.

To add a service, add an entry to `services`; the service detail route is generated from its slug. Add a stone to `stones`, a portfolio item to `projects`, or an article to `articles`. Each collection generates detail routes and sitemap entries. Article content is currently plain text; expand it with checked, locally useful advice before publishing.

The quote form is frontend-only and does not submit or store leads. Phase 2 can connect it to `NEXT_PUBLIC_API_URL` and the FastAPI lead endpoint after agreeing on validation, privacy and delivery behavior.

## Deployment to Vercel

Import the Git repository in Vercel, use the Next.js preset and deploy. Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL and optionally `NEXT_PUBLIC_API_URL` when the backend exists. Verify the deployed quote/contact links, image licenses, metadata, sitemap and real business details before public launch.
