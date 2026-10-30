# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

Two independent Vite + React 19 + TypeScript apps share one Firebase project (`cristian-nass`):

- **Root (`/`)** — the portfolio site, deployed to hosting target `cristian-nass` (cristian-nass.web.app).
- **`cristian-blog/`** — a separate blog app with its own `package.json`, lockfile, ESLint 9 flat config and Vite 7. Deployed to hosting target `cristian-blog` (cristian-blog.web.app). The portfolio's navbar links to it.

The two apps don't share code. Run commands from the directory of the app you are changing.

## Commands

Yarn 4 is pinned via `packageManager` and `.yarn/releases` (run `corepack enable` if `yarn` is missing). Node version: `.nvmrc` (20.11.1).

The project was created with Yarn. Stray `package-lock.json` files (from occasional `npm install`) exist in both apps; use `yarn` for installs, not npm. Yarn 4 writes `yarn.lock` with a `__metadata:` header. If the file shows `# yarn lockfile v1` instead, Yarn 1 rewrote it by mistake, so restore it rather than committing it.

Portfolio (repo root):

```bash
yarn dev        # Vite dev server
yarn build      # tsc && vite build → dist/
yarn lint       # eslint, --max-warnings 0 (warnings fail)
yarn preview
yarn deploy     # build + firebase deploy --only hosting:cristian-nass
```

Blog (`cristian-blog/`):

```bash
yarn dev | yarn build | yarn lint | yarn preview
firebase deploy --only hosting:cristian-blog   # from the repo root, after building the blog
```

Both apps can run at once: the portfolio takes port 5173 and the blog falls back to 5174. The portfolio's "Blog ↗" link is hardcoded to `https://cristian-blog.web.app` (in `Navbar.tsx`), so locally it opens the live blog, not the local one.

There is no test suite in either app. `tsc` (part of `build`) and `lint` are the checks.

Formatting follows `.prettierrc`: single quotes, no bracket spacing (`{a}` not `{ a }`), JSX closing `>` on the same line, 80 columns.

## Portfolio architecture

- A single-page scroller, with no router despite `react-router-dom` being installed. `src/App.tsx` stacks the `src/pages/*` components inside `<section id="...">` elements.
- `src/components/Navbar.tsx` owns the section list (`items`). It highlights the active link with an `IntersectionObserver` on those section ids. Adding, removing or renaming a section means updating both `App.tsx` and `items` in `Navbar.tsx`.
- Section headings use a manual index (`"01"`, `"02"`, …) passed to `SectionHeading`; renumber by hand when sections change.
- Content lives in `src/utils/experiences.ts` and `src/utils/education.ts`. Each experience's `description` is an array of bullet strings, rendered by `ExperienceDescription` (it looks up the entry by `id`). Edit those files, not the page components, to change CV content. Exceptions are the bio copy and the tech stack in `About.tsx`, plus the hero text and stats in `Home.tsx`. Years of experience ("15+") is hardcoded in three places: twice in `Home.tsx` and once in `About.tsx`. Keep them in sync.
- `Experiences.tsx` renders two different layouts, chosen in JS with `useMediaQuery('(min-width: 768px)')` (usehooks-ts): a timeline with a sticky detail panel on desktop and an accordion on mobile. `Navbar` switches menus the same way. UI changes usually need to be made in both branches.
- Animation is Framer Motion throughout. `Reveal` is the shared scroll-in wrapper; `Home` does the scroll-linked hero parallax.
- Styling is Tailwind with a custom dark design system in `tailwind.config.js` (colors `ink`, `ink-card`, `cloud`, `muted`, `accent`, `accent-2`; fonts `display`/`sans`/`mono`; `max-w-content`). Shared classes (`section-shell`, `eyebrow`, `display-xl`, `display-lg`, `link-underline`, `glow`, `grain`) are defined in `src/index.css`. Use these tokens instead of raw values.
- Google Fonts (Inter, JetBrains Mono, Space Grotesk) are loaded in `index.html`.
- The site is a PWA via `vite-plugin-pwa` (`vite.config.ts`). The service worker precaches the build and adds a CacheFirst rule for same-origin requests, so stale caches can show old content after a deploy.

## Blog architecture

- `src/firebase/setup.ts` initializes Firebase and exports the Firestore instance. The web API key in it is public by design; access is controlled by Firestore rules.
- `src/store/useDataBlogStore.ts` (Zustand) fetches the `blog-data` collection once from `App.tsx`. Each document has `title`, `category`, `description` (HTML, rendered with `dangerouslySetInnerHTML`), `example_link`, `posted_by`, and `created_at` (Firestore Timestamp).
- `BlogPage.tsx` is the only route. `NoteView`, `useHTMLDataStore`, `useSelectedCategory`, `firebase/services.ts` and `utils/data.ts` are unused leftovers.

## Firebase

- `firebase.json` defines both hosting targets (SPA rewrites to `/index.html`) plus Firestore rules and indexes. `.firebaserc` maps the targets.
- `firestore.rules` in the repo is **not** what's live. It's a time-limited open rule whose date has passed, while the deployed rules were set separately. Don't run a bare `firebase deploy` (it would push these rules); always use `--only hosting:<target>`, unless you are intentionally updating the rules.
- `.firebase/` (the hosting deploy cache) is committed and updated with each deploy.
