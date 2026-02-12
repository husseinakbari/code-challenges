## Compare Next App router and Page router

### 1) Routing & layouts

**Pages Router**

- Per-page routes: pages/about.tsx
- Layouts are usually implemented manually (e.g., \_app.tsx, wrapper components).
- Nested layouts exist but are DIY.

**App Router**

- Route segments: app/about/page.tsx
- Nested layouts are first-class: layout.tsx at any segment.
- Shared UI, navigation, and state are easier and more structured.

### 2) Rendering model

**Pages Router**

- Components are typically Client Components (run in browser) unless you use SSR/SSG to generate HTML.

**App Router**

- Default is Server Components (run on the server, not shipped to the client).
- You opt into client behavior using `"use client"` at the top of a file.
- Enables smaller client bundles and better performance when used correctly.

### 3) Data fetching

**Pages Router**

- getStaticProps (SSG), getServerSideProps (SSR), getStaticPaths.
- Data fetching is “Next-specific lifecycle functions”.

**App Router**

- Fetch data directly in server components with fetch() / DB calls.
- Built-in caching & revalidation options:
  `fetch(..., { cache: 'force-cache' | 'no-store', next: { revalidate: seconds } })`
- `loading.tsx`, `error.tsx`, `not-found.tsx` are conventions for UX and errors.

### A crisp interview answer

“Pages Router is the legacy file-based router with `getStaticProps`/`getServerSideProps` and client-first components. App Router is the newer system built on React Server Components, nested layouts, streaming, and a new data-fetching/caching model.

App Router defaults to server rendering with explicit client components via `use client`, which can reduce bundle size and improve performance.

## Questions:

### “In App Router, when do you need 'use client'?”

Answer: You need `"use client"` if the component:

- Uses React hooks like useState, useEffect, useRef, useReducer
- Uses browser-only APIs (window, document, localStorage)
- Attaches event handlers (onClick, onChange)
- Uses many client-only libraries (some charts, editors)
- Otherwise keep it as a Server Component to reduce JS shipped to the browser.

### Cache in App router

`await fetch(url, { cache: "force-cache" });`

- Treat as cacheable.
- Best for mostly-static data (marketing pages, docs).

`await fetch(url, { cache: "no-store" });`

- Always fetch fresh.
- Use for user-specific, real-time, or sensitive data.

`await fetch(url, { next: { revalidate: 60 } });`

- Cache the response, but revalidate in background at most every 60s.
- This is similar to ISR behavior, but at the fetch level.
