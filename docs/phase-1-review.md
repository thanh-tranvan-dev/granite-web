# Phase 1 Review

Review date: 2026-09-24

## 1. Executive Summary

The site is a small, static-first Next.js App Router site with working routes, a clean production build, and clear disclosure that portfolio and article content is illustrative. The source is organized around reusable content collections and a central site configuration. The project is not ready for public launch: the business profile still contains placeholders and a localhost domain fallback, page copy targets locations that do not match the configured service area, and the image-source inventory does not cover several assets actually used. These are practical launch and local-search issues; no architectural rewrite is indicated.

## 2. Validation

- `npm install`: **PASS** (`npm.cmd install` was used because PowerShell blocks the `npm.ps1` shim; dependencies were already up to date). 147 packages reported funding links; no install warnings or errors were reported.
- `npm run lint`: **PASS** (`npm.cmd run lint`; ESLint completed without findings).
- `npm run build`: **PASS** (`npm.cmd run build`; Next.js 16.3.6 compiled, TypeScript passed, and 31 static pages were generated). No build warnings or errors were reported.

The workspace already contained uncommitted changes before or during this review (including README and project files); they were not reverted. No production source files were edited for this review.

## 3. Current Architecture

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4; no backend calls are made in Phase 1.
- Route pages are under `src/app`. Service, stone, project, and article details use static params from collections in `src/data/content.ts`; unknown slugs call `notFound()`.
- `src/components/Blocks.tsx` contains reusable server-rendered content blocks. `SiteChrome.tsx` is a Client Component for the mobile menu, so its header, footer, and contact bar are all in a client-marked module. `QuoteForm.tsx` is client-side and explicitly reports that it does not send or store data.
- Contact and site settings are centralized in `src/config/site.ts`, though project/article locality strings and form option labels are also hard-coded in content/UI.
- `src/lib/api.ts` only provides a future endpoint URL helper. A future FastAPI endpoint can be connected without introducing backend concerns into page content, but no request contract, server validation, or lead persistence exists yet.
- `sitemap.ts` derives detail URLs from the same content collections; `robots.ts` allows crawling and points to the sitemap.

## 4. What Is Already Good

- All requested top-level and dynamic route families exist; static params and `notFound()` provide sensible unknown-slug behavior.
- Shared site content is data-driven, and business identity/contact fields are mostly held in one config module.
- The frontend is server-rendered by default. Client code is limited to interactive chrome and the quote form.
- Contact actions include `tel:`, Zalo, and quote links. The mobile bar exposes all three actions.
- Project listings and details, homepage copy, README, and source notes disclose that sample imagery is illustrative rather than verified workshop work.
- The form has labels, native required validation for name/phone, and an accessible status message; it does not claim that a lead was submitted.
- Metadata, robots, sitemap, visible keyboard focus styling, responsive layout rules, and Next/Image are present.
- Validation passes without adding dependencies.

## 5. P0 â€” Blockers

None found. Lint and build pass, and all requested route families are present.

## 6. P1 â€” Fix Before Deploy

### P1-1: Production business identity and origin are still placeholders

- **ID:** P1-1
- **File:** `src/config/site.ts`, `.env.example`
- **Problem:** Email is `[EMAIL LIÃŠN Há»†]`, Facebook points to the generic `https://facebook.com/`, Google Maps points to the generic maps homepage, and the default site origin is `http://localhost:3000`. The config also contains a phone number and business/address data that must be confirmed with the owner before publication.
- **Why it matters:** Contact links can be misleading or unhelpful, and if production does not set `NEXT_PUBLIC_SITE_URL`, metadataBase, sitemap URLs, and robots' sitemap URL resolve to localhost.
- **Recommended fix:** Confirm the canonical business name, phone, email, address, map pin, social account, service area, and production domain. Set the production origin in Vercel and remove or guard the localhost fallback for production builds.

### P1-2: Location signals conflict across site content

- **ID:** P1-2
- **File:** `src/config/site.ts`, `src/data/content.ts`, `src/app/dich-vu/page.tsx`
- **Problem:** The configured areas are SÆ¡n Háº¡, TÆ° NghÄ©a, SÆ¡n Tá»‹nh, and NghÄ©a HÃ nh (Quáº£ng NgÃ£i), but service copy says ÄÃ  Náºµng and Quáº£ng Nam, and illustrative project records contain ÄÃ  Náºµng, Quáº£ng Nam, Há»™i An, and Äiá»‡n BÃ n locations.
- **Why it matters:** Prospective customers may infer the workshop serves places it does not, while inconsistent local business signals weaken trust and local SEO. The project records are disclosed as examples, but their displayed locations still look specific.
- **Recommended fix:** Confirm the actual service footprint. Align service copy with the config and remove or visibly mark sample locations as fictional/reference data (or omit them) until verified.

### P1-3: Image records do not describe the assets in use; several files are large

- **ID:** P1-3
- **File:** `docs/image-sources.md`, `src/data/content.ts`, `public/images/*`, `README.md`
- **Problem:** Source documentation lists a set of Unsplash WebP files, but current `photos` values also point to `bep-da-hoa-cuong.jpg`, `ban-bep-chu-l.png` (2.43 MB), `cau-thang-da.png` (2.20 MB), `mat-tien-da-hoa-cuong.png` (2.96 MB), and `mo-da-hoa-cuong.jpg`. Those used files have no matching source/license/usage records in the table. README describes `public/images` as resized WebP photography, which does not match the current JPG/PNG assets. `Next/Image` is used, but it does not reduce the bytes of these original static files when served directly.
- **Why it matters:** Ownership and permitted use for visible images cannot be confirmed from the documentation; large source images can increase download cost and hurt page loading, especially on mobile.
- **Recommended fix:** Identify and document the actual source and usage rights for every image used, replace assets with owner-approved workshop photos or appropriately licensed references, and resize/re-encode large files to fit their displayed dimensions. Keep the portfolio's illustrative disclosure until real project records are verified.

## 7. P2 â€” Improvements

### P2-1: Quote form omits several requested project details

- **ID:** P2-1
- **File:** `src/components/QuoteForm.tsx`
- **Problem:** Current fields are name, phone, service, and free-text description. Dedicated fields for construction area, stone type, and expected dimensions are absent. The description placeholder invites some of this information but does not structure it.
- **Why it matters:** A structured request is easier for a small team to triage and matches the expected Phase 1 intake. The existing disclosure is good: the form clearly says it is not connected and the status message does not imply persistence.
- **Recommended fix:** Add optional area, stone-interest, and expected-size fields if they help staff respond. Keep the no-backend disclosure until a real submission path exists; document consent/privacy handling before collecting leads through a backend.

### P2-2: Fixed mobile contact bar can cover page content

- **ID:** P2-2
- **File:** `src/app/globals.css`
- **Problem:** At widths up to 760px, the contact bar is fixed to the viewport bottom. The footer adds bottom padding, but there is no equivalent page-bottom clearance for the content immediately before the footer.
- **Why it matters:** On short pages or when scrolling to the end, the bar can overlap links or text. Check this on 375px and 768px; the bar is not enabled at 768px because its breakpoint is 760px.
- **Recommended fix:** Provide safe-area-aware bottom clearance for page content or otherwise ensure the final content is reachable above the fixed bar; verify the result on small screens.

### P2-3: Shared chrome sends more UI through the client boundary than necessary

- **ID:** P2-3
- **File:** `src/components/SiteChrome.tsx`
- **Problem:** The file-level `"use client"` needed for the menu also marks footer and contact bar as client components.
- **Why it matters:** This adds avoidable client-side JavaScript for mostly static content, though the overall impact is modest for this site.
- **Recommended fix:** If bundle measurements justify it, isolate the interactive mobile navigation into a small client component and keep static chrome server-rendered.

### P2-4: Homepage does not link its knowledge section to article entries

- **ID:** P2-4
- **File:** `src/app/page.tsx`
- **Problem:** The homepage shows a knowledge heading and a link to `/kien-thuc` but no featured article links.
- **Why it matters:** The section offers little path from the homepage to useful content and reduces internal links to the article details.
- **Recommended fix:** Link one or two reviewed articles there when the sample article copy is ready for publication.

### P2-5: Metadata and accessibility can be made more specific

- **ID:** P2-5
- **File:** `src/app/layout.tsx`, route pages, `src/components/SiteChrome.tsx`
- **Problem:** Root metadata is inherited and route titles/descriptions are set on most non-root pages, but there is no explicit canonical metadata or per-route Open Graph image. The mobile menu does not implement Escape-to-close, and navigation links do not indicate the current page.
- **Why it matters:** These are refinement opportunities for share previews, URL consistency, and keyboard/navigation context; no build or crawl blocker was found.
- **Recommended fix:** After confirming the production origin, add canonical URLs where appropriate and suitable share images. Consider Escape handling and current-page state for the mobile navigation.

## 8. SEO Review

| Area | Status | Problem | Recommendation |
| ---- | ------ | ------- | -------------- |
| Route coverage | Pass | Requested routes exist, including dynamic details. | Preserve static params and `notFound()` behavior. |
| Titles/descriptions | Mostly present | Root homepage inherits generic site metadata; most other pages define titles/descriptions and dynamic pages derive them from records. | Give the homepage a focused title/description and review every description for accurate locality. |
| H1/headings | Generally good | Pages use a visible page heading; no systematic duplicate-H1 issue was found in source review. | Keep one clear primary H1 per page. |
| Canonical | Partial | `metadataBase` is set but explicit canonical alternates are absent. The origin defaults to localhost. | Set the production origin and add canonical URLs if URL variants need control. |
| Open Graph | Partial | Root Open Graph basics exist, with no explicit image and little route-specific social metadata. | Add a real, rights-cleared social image and route-specific details where useful. |
| Sitemap | Present | Includes root pages and dynamic records; last-modified dates are generated as the current date on each request. URLs inherit configured domain, which defaults to localhost. | Set production URL. Use stable content dates only if they are maintained; do not imply edits on every request. |
| Robots | Pass with configuration dependency | Allows all crawlers and references `/sitemap.xml`; target is wrong when default localhost origin is deployed. | Configure the canonical production URL before deployment. |
| Structured data | Absent | No Schema.org JSON-LD or LocalBusiness data found. Business address/email still require confirmation. | After confirming NAP and service area, add only accurate LocalBusiness/Service data if useful. Avoid invented ratings/reviews. |
| Internal links | Good baseline | Shared nav/footer, cards, CTAs, and breadcrumbs link key sections. Homepage knowledge section links only to the list. | Add reviewed article links and check all CTAs after business details are set. |
| Images | Needs attention | Next/Image and descriptive alt text are used; actual used assets are not all in source documentation and some are multi-megabyte PNGs. | Reconcile image inventory, usage rights, responsive display sizes, and compression. |
| Crawlability/rendering | Pass | Pages are server rendered/static generated; robots allows crawling. | Recheck deployed HTML, metadata, robots, and sitemap at the real domain. |

## 9. Mobile / UX Review

- CSS defines responsive behavior for narrow screens (760px and 430px breakpoints); grids collapse and the mobile navigation becomes a toggle menu.
- At 375px, cards become one column, the CTA stacks, the footer stacks, and the fixed phone/Zalo/quote bar is available. Main concerns are the fixed bar potentially obscuring end-of-page content and ensuring the large hero headline/actions fit comfortably.
- At 768px, the layout remains in the tablet/desktop rules and the fixed contact bar is not enabled. The card grid remains three columns until below 760px, so card content may be tight at tablet widths. At 1024px, nav gaps and type shrink, but this breakpoint should be visually checked for crowding.
- At 1440px, the main content is capped at 1160px. No explicit horizontal overflow pattern was found in CSS, but no browser visual audit at the requested viewport sizes was run.
- Fixed bar respects bottom safe-area padding; page content itself has no matching mobile bottom inset.
- Focus-visible outlines are present. Menu supports `aria-expanded`, `aria-controls`, and an accessible label; Escape-to-close is not implemented.

## 10. Conversion Review

- Phone calls use the configured `tel:` value in the hero, header, footer, quote page, contact page, and mobile bar.
- Zalo links use `https://zalo.me/0358853439`; the number and account should be confirmed before launch. The mobile Zalo action opens a new tab with `rel="noreferrer"`.
- Quote links lead to `/bao-gia`. The page exposes the form plus direct phone and Zalo alternatives.
- The quote form is deliberately demo-only; both its persistent notice and post-submit status explain that no data is sent or stored. This is honest but means the form does not itself create an inquiry. Keep an obvious contact alternative and decide the intended Phase 1 lead flow before advertising a quote form as a submission channel.
- No popups or aggressive conversion patterns were found. Confirm contact values and test tap targets/links on a real mobile device before launch.

## 11. Image Review

- `public/images` contains 12 assets: six WebP files are referenced in `docs/image-sources.md`; several JPG/PNG files actually mapped in `src/data/content.ts` are not in that source table. The logo is also not documented in the image source table.
- Three used PNGs are particularly large: `ban-bep-chu-l.png` (2,434,341 bytes), `cau-thang-da.png` (2,195,402 bytes), and `mat-tien-da-hoa-cuong.png` (2,958,614 bytes). These are served from `public` as static originals.
- The project and service UI labels many photos as illustrative, and project details state they do not describe work by the workshop. Preserve these disclosures until actual work is verified.
- Source documentation says its Unsplash images are used under the Unsplash License, but does not establish the source or rights of all files currently used. Confirm each file individually and update the table to match actual filenames and placements.
- Next/Image is used with `fill` and `sizes` for major content images; card photos use shared image components. The hero is marked `priority`. Image quality/format and dimensions were not measured in-browser.

## 12. Performance Review

- Positive: server components/static generation by default, local image hosting, Next/Image, `sizes` on the hero and shared image component, lazy loading by default for non-priority images, and no third-party scripts found.
- Main likely cost: large static PNGs and image filenames/docs mismatch. Next/Image behavior should be confirmed on deployed Vercel for the selected output mode.
- `SiteChrome.tsx` currently makes static footer/contact chrome client-marked due to a file-level directive. This is a modest optimization opportunity, not a demonstrated large bundle problem.
- `next/font/google` loads DM Sans and Manrope at build time. The build succeeded; offline builds may require cached font assets or network availability depending on environment.
- No runtime bundle analyzer or Core Web Vitals measurement was performed; no micro-optimization is recommended before measuring the deployed site.

## 13. Accessibility Review

- Form controls have visible labels; required name and phone inputs use native validation; post-submit text uses `role="status"`.
- Images generally have descriptive alt text or identify illustrative imagery. Logo alt is present.
- A global `:focus-visible` indicator exists. Mobile menu exposes expanded state and controls.
- Review mobile menu Escape behavior, current-page indication, actual contrast of small muted text, and fixed-bar overlap at browser zoom/small heights. These were code-level findings, not a screen-reader or keyboard-session audit.

## 14. Deployment Readiness

The project builds successfully and is structurally compatible with Vercel's Next.js preset. It is **not ready for a trustworthy public launch** until P1-1 through P1-3 are addressed: production NAP/domain/social/map values must be confirmed, local service-area claims aligned, and image provenance/optimization resolved. Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin in Vercel. The quote form is static/demo-only and does not generate stored leads; README accurately describes that limitation.

## 15. Future FastAPI Readiness

The present separation between routes, shared components, content collections, site configuration, and a small API URL helper gives a straightforward place to replace static collections and connect a future FastAPI service. The form already has a narrow client boundary, but future submission needs an agreed request schema, server-side validation, success/failure states, spam protection, privacy messaging, and persistence. No backend, CRM, database, authentication, or state-management work is required for Phase 1.

## 16. Recommended Fix Order

1. Confirm and replace business name, phone, email, address, map pin, social URL, service area, and production domain; set `NEXT_PUBLIC_SITE_URL` in Vercel.
2. Align all local service copy and any displayed sample locations to the confirmed real service area.
3. Reconcile every `photos` entry and the logo with source/rights documentation; replace unverified images and resize/re-encode oversized assets.
4. Fix the mobile fixed-bar content clearance and visually check 375px, 768px, 1024px, and 1440px layouts.
5. Decide the real Phase 1 quote flow; add optional area/material/dimension fields if useful and retain clear no-submission messaging until a backend or other delivery path exists.

