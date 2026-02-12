## Core Web Vital

Core Web Vitals are a set of **user-experience** performance metrics Google uses to **evaluate real-world page experience**.

### 1) LCP — Largest Contentful Paint (Core Web Vital)

**What it is**: Time until the largest visible piece of content in the viewport (usually hero image, large heading, or main banner) is rendered.

> Common causes

- Slow server/TTFB
- Render-blocking CSS/JS
- Heavy images (size, format, no preload)
- Client-side rendering + slow hydration
> How you improve it
- Reduce TTFB (CDN, caching, SSR)
- Optimize hero asset (correct dimensions, WebP/AVIF, compression, srcset)
- Preload critical image/font
- Remove/defer non-critical JS, inline critical CSS

### 2) CLS — Cumulative Layout Shift (Core Web Vital)

**What it is:** A score of how much the layout **unexpectedly moves** while loading.

> Common causes

- Images/iframes without width/height
- Late-loaded ads/banners pushing content
- Web font swap causing text reflow
- Injecting content above existing content

> How you improve it

- Reserve space: explicit width/height, CSS aspect-ratio
- Use placeholders/skeletons with correct final size
- Avoid inserting content above the fold (use overlay)
- Font strategy: preload critical fonts, reduce FOIT/FOUT carefully

### 3) TBT — Total Blocking Time (lab metric)

**What it is:** Total time during page load where the main thread is blocked by long tasks

**Why it matters:** Users can’t interact smoothly when the main thread is busy.

> Common causes

- Too much JavaScript (large bundles)
- Expensive framework hydration / rendering
- Heavy third-party scripts
- Long tasks from parsing/compiling JS

> How you improve it

- Reduce JS (code-splitting, tree-shaking, remove unused deps)
- Break up long tasks (yield to main thread; schedule non-critical work)
- Defer/limit third-party scripts
- Offload heavy work to Web Workers where appropriate

### 4) FCP — First Contentful Paint

**What it is:** Time until the browser renders the first piece of content (text, image, SVG, canvas).

> Common causes

- Render-blocking CSS/JS
- Slow font/CSS delivery
- Slow server/TTFB

> How you improve it

- Reduce render-blocking resources (critical CSS, defer JS)
- Optimize CSS delivery
- Improve TTFB and caching

### 5) Speed Index

**What it is:** A measure of how quickly the page’s contents are visually populated (based on a video-like analysis of rendering progress).

> Common causes

- Lots of above-the-fold content loading slowly
- Unoptimized images
- Too many render-blocking resources

> How you improve it

- Optimize above-the-fold assets
- Prioritize critical resources; lazy-load below-the-fold
- Reduce JS/CSS that delays painting

### 6) TTI — Time to Interactive (older metric)

**What it is:** Time until the page is “reliably interactive” (handlers registered, main thread idle enough).

> Same as TBT

### 7) TTFB — Time to First Byte

**What it is:** Time from request start until the browser receives the first byte of the response from the server.

> Common causes

- Slow backend/DB
- No CDN / far distance from users
- No caching (dynamic pages generated every time)
- Cold starts (serverless), heavy middleware

> How you improve it

- CDN + edge caching
- Server-side caching, optimize backend and database
- SSR/streaming where it helps deliver HTML faster
- Reduce redirects; keep TLS and connection overhead low

## Summary

“LCP measures when the main content becomes visible; CLS measures visual stability; those are Core Web Vitals. TTFB is server responsiveness and heavily affects LCP/FCP. FCP is first visible content. Speed Index is how fast the page visually fills in. For interactivity, Lighthouse uses TBT (blocked main thread time) and may show TTI, but in practice I optimize for low main-thread work and validate with INP in field data.”
