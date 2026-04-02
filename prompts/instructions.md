# Personal Website v2 – Implementation Instructions

This document describes the structure, conventions, and patterns currently used in the
`personal-website-v2` repository. It is primarily written for **AI coding agents** but may
also serve as a quick reference for human developers.

---

## 🧱 Tech Stack Overview

- **Framework**: Svelte 5 with SvelteKit (latest conventions, runes-based reactivity).
- **Language**: TypeScript throughout.
- **Styling**: Tailwind CSS v4, augmented by Skeleton UI utilities.
- **UI Library**: Skeleton UI v4 (`@skeletonlabs/skeleton-svelte` + Zag.js patterns).
- **Icons**: `<iconify-icon>` component (Solar icon set).
- **Animations**: `svelte/motion` (`spring`), `svelte/transition` (`fly`), Tailwind utilities.

---

## 📁 Project Layout

```
src/
 ├─ lib/
 │   ├─ config.ts            ← central data store (name, bio, projects, sections, etc.)
 │   ├─ components/          ← page sections (Hero, About, Skills, Projects, Experience, Education)
 │   ├─ ui/                  ← shared layout pieces (NavigationBar, possibly future bits)
 │   └─ styles/              ← global CSS files (app.css, theme.css)
 ├─ routes/
 │   ├─ +page.svelte         ← assembles every section into the single‑page layout
 │   ├─ +layout.svelte       ← global layout / providers (if used)
 │   ├─ sitemap.xml/+server  ← sitemap generation
 │   └─ robots.txt/+server   ← robots rules
```

> **config.ts** is the _only_ file you edit to update profile, skills, projects, experience,
> or education content. Components read from it and render accordingly.

---

## ⚙ Core Conventions

1. **Svelte 5 & Reactivity** – always use runes (`$state`, `$props`, `$derived`, `$effect`) and
   avoid deprecated v4 syntax (`$:` etc.).
2. **Skeleton UI Patterns**
   - Import exclusively from `@skeletonlabs/skeleton-svelte`.
   - Leverage the composed component pattern (e.g. `<Dialog>` owns `<Dialog.Trigger>`,
     `<Dialog.Content>`, etc.).
   - Use preset utility classes (`preset-tonal`, `card`, `badge`, `bg-surface-50-950`, …)
     for consistent styling.
3. **Icons** – always use `<iconify-icon icon="solar:..." ...>`; don’t paste raw SVGs.
4. **Color usage** – never hard‑code arbitrary color values. Use the theme variables defined
   in `src/lib/styles/theme.css` (under `data-theme='custom'`) or canonical Tailwind/Skeleton
   utility classes. This keeps colors consistent and automatically respects dark mode.
5. **Dark mode** – apply `dark:` variants or Skeleton custom properties; ensure every custom
   color has a dark equivalent.
6. **Animations & Interactions**
   - Hover/interactive cards use `use:springyCard` action defined in each section.
   - Content entrance animations use `fly` with staggered delays.
   - Modal/drawer state transitions rely on `transition transition-discrete` +
     `data-[state=open]:…` utilities.

---

## 🏗 Feature Notes

- **NavigationBar & Drawer**
  - Built with Skeleton `<Dialog>`; triggered by hamburger menu.
  - Drawer is a right-aligned side panel (`justify-end translate-x-full`).
  - Links close the drawer via `onclick={() => drawerOpen = false}` so routing works.
- **Anchored Scrolling**
  - Each section component has a hard-coded `id` matching the nav link.
  - Anchor navigation is purely `href="#about"` etc.; no router logic required.

---

> 📌 **Quick reminder for AI coding agents:**
>
> - For new or updated UI components, consult `prompts/library-rules/components.md`.
> - For any 3D/Threlte work, read `prompts/library-rules/threlte.md` before generating code.

---

Feel free to refresh this document as the app evolves; it should always mirror the current
architecture and style rules. Happy coding! 😄
