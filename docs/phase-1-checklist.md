# Phase 1 Launch Checklist

Items are based on the review dated 2026-09-24. Checkboxes are open until the item has been verified; a passing local build alone does not complete production-specific checks.

## Validation and build

- [x] `npm install` completes (`npm.cmd install` in the current PowerShell environment).
- [x] `npm run lint` passes.
- [x] `npm run build` passes and generates static pages.
- [ ] Re-run lint and build after approved changes.
- [ ] Confirm the deployed Vercel build and inspect runtime logs.

## Routes and navigation

- [x] Homepage `/` exists.
- [x] Service listing `/dich-vu` and dynamic detail routes exist.
- [x] Stone listing `/cac-loai-da` and dynamic detail routes exist.
- [x] Project listing `/cong-trinh` and dynamic detail routes exist.
- [x] Quote route `/bao-gia` exists.
- [x] Knowledge listing `/kien-thuc` and dynamic detail routes exist.
- [x] About `/gioi-thieu` and contact `/lien-he` exist.
- [x] Unknown dynamic slugs use `notFound()`.
- [ ] Click every nav, footer, breadcrumb, card, and CTA link on the deployed site.
- [ ] Check phone and Zalo links on a phone with the business owner’s confirmed number/account.

## Business details and local SEO

- [ ] Confirm the exact public business name and spelling.
- [ ] Confirm the phone number and test its `tel:` link.
- [ ] Replace placeholder email with a monitored address or remove the email display.
- [ ] Replace generic Facebook and map URLs with the official page/map pin or remove them.
- [ ] Confirm the address and real service-area list with the workshop.
- [ ] Align all service-area copy and sample location labels with confirmed coverage.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS production origin in Vercel.
- [ ] Verify metadataBase, canonical URLs (if added), sitemap URLs, and robots sitemap URL use the production origin.
- [ ] Verify deployed `/robots.txt` allows intended crawling and `/sitemap.xml` lists intended pages.
- [ ] Check Search Console ownership/indexing after launch.
- [ ] Add structured business data only after NAP and service area are verified; do not add unsupported reviews, ratings, or prices.

## SEO and content

- [x] Page metadata exists for most routes and dynamic routes derive titles/descriptions from their data.
- [x] Dynamic detail pages include breadcrumbs and unknown slugs return 404 behavior.
- [ ] Add a homepage-specific title and description if the inherited generic metadata is not sufficiently targeted.
- [ ] Review all titles, descriptions, H1s, and visible service claims for accuracy and uniqueness.
- [ ] Verify OG/social preview image rights and appearance; add an image if appropriate.
- [ ] Ensure any sitemap last-modified values represent actual content updates rather than request time.
- [ ] Review knowledge articles for accuracy, usefulness, local relevance, and readiness before publishing.
- [ ] Add homepage links to selected reviewed knowledge articles if useful.
- [ ] Do not publish unsupported years of experience, customer counts, rankings, guarantees, or service claims.

## Conversion and quote request

- [x] Phone CTA is present in the header, hero, footer/contact page, and mobile contact bar.
- [x] Zalo CTA is available, including the mobile bar.
- [x] Quote CTA links to `/bao-gia`.
- [x] Demo form clearly says it does not send or store submissions.
- [ ] Decide and explain the Phase 1 inquiry flow before promoting the form as a working submission channel.
- [ ] Confirm whether dedicated construction area, stone interest, and expected-size fields would help staff.
- [ ] If a submission endpoint is added later, implement server-side validation, success/error feedback, spam controls, privacy language, and persistence.
- [ ] Test keyboard use, required-field errors, form labels, and status announcements.

## Portfolio and images

- [x] Sample project data and page copy disclose that images are illustrative and not verified workshop projects.
- [ ] Keep the illustrative disclosure until each real project photo and description is confirmed by the workshop.
- [ ] Match every file referenced by `photos` and the logo to a source, license/permission, creator, and usage record in `docs/image-sources.md`.
- [ ] Replace undocumented or unverified assets with workshop-owned or rights-cleared images.
- [ ] Correct README's image description so it reflects the actual asset formats and state.
- [ ] Resize/re-encode large PNG assets for their rendered dimensions and responsive use.
- [ ] Confirm each image's alt text describes the image accurately and does not imply a sample is real work.
- [ ] Check image quality, crop, loading, and layout shift on mobile and desktop.

## Mobile and accessibility

- [ ] Review at 375px: header/menu, hero text and CTAs, cards, quote fields, fixed bar, page-end content clearance.
- [ ] Review at 768px: tablet navigation, card density, contact action visibility, and horizontal overflow.
- [ ] Review at 1024px: navigation fit, type, and card layout.
- [ ] Review at 1440px: content width, image crops, and section balance.
- [ ] Verify fixed phone/Zalo/quote bar does not cover content or keyboard-focused controls, including device safe areas.
- [ ] Check keyboard focus visibility and menu open/close behavior, including Escape-to-close.
- [ ] Check contrast of muted text and buttons at actual rendered sizes.
- [ ] Check browser zoom and screen-reader names for menu, links, form, and contact actions.

## Performance and deployment

- [x] Local production build passes.
- [x] Local Next.js image configuration has no custom remote host requirements for current local assets.
- [ ] Set and verify production environment variables; `NEXT_PUBLIC_API_URL` is not needed until a backend exists.
- [ ] Confirm Vercel image optimization works for current assets and deployment region/runtime settings.
- [ ] Review deployed page load and Core Web Vitals after replacing large images.
- [ ] Confirm no secrets are committed; no secret-bearing env values were found in `.env.example`.
- [ ] Confirm the quote form's demo-only behavior is acceptable for launch or provide a real inquiry path.
