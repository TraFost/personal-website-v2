# Personal Website v2 - Implementation Instructions

This document outlines the current implementation architecture and conventions of the `personal-website-v2` codebase, intended as a reference for AI assistants and developers.

## Tech Stack
- **Framework**: Svelte 5 (with SvelteKit)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: Skeleton UI v4 (`@skeletonlabs/skeleton` & `@skeletonlabs/skeleton-svelte` powered by Zag.js)
- **Icons**: Iconify (`<iconify-icon>` web component), primarily using the `solar` icon set.
- **Animations**: `svelte/motion` (`spring`), `svelte/transition` (`fly`), and Tailwind CSS utility classes.

## Codebase Structure
- `src/lib/config.ts`: The central data store. Contains all profile information, skills, projects, experience, and education data. Always update this file to modify content without touching UI code.
- `src/routes/+page.svelte`: The main entry point for the single-page application. Composes the various sections.
- `src/lib/components/`: Contains the individual section components for the landing page:
  - `Hero.svelte`
  - `About.svelte` (`id="about"`)
  - `Skills.svelte` (`id="skills"`)
  - `Projects.svelte` (`id="projects"`)
  - `Experience.svelte` (`id="experience"`)
  - `Education.svelte` (`id="education"`)
- `src/lib/ui/`: Contains higher-level layout UI components like `NavigationBar.svelte`.

## Core Conventions & Patterns
1. **Svelte 5 API**: The project uses modern Svelte 5 syntax. Use runes (`$state`, `$props`, `$derived`) when working with reactivity within components.
2. **Skeleton UI v4 Patterns**:
   - Skeleton components must be imported from `@skeletonlabs/skeleton-svelte`. 
   - Many Skeleton components utilize a "composed" pattern (e.g. `<Dialog>` containing `<Dialog.Trigger>`, `<Dialog.Positioner>`, `<Dialog.Content>`).
   - Use Skeleton preset utility classes (`preset-tonal`, `preset-filled`, `card`, `badge`, `bg-surface-50-950`, etc.) when adding new UI elements to ensure they conform to the existing theme and dark mode settings.
3. **Icons**: Use the custom HTML element `<iconify-icon icon="solar:..." width="24" height="24"></iconify-icon>`. Do not import SVG components unless necessary.
4. **Dark Mode**: Fully supported using Tailwind's `dark:` classes and Skeleton UI's CSS custom properties. Always ensure any custom colors have a `dark:` equivalent.
5. **Animations**: 
   - Interactive elements (like cards) heavily use `use:springyCard` custom actions leveraging `svelte/motion` springs for hover effects. 
   - Initial load animations are handled with Svelte's `fly` transition on mounting.
   - For UI component state transitions (like modals/drawers), use CSS `transition transition-discrete` coupled with Tailwind data-state styling (`data-[state=open]:...`).

## Feature Specifics
- **Navigation Drawer**: Implemented in `NavigationBar.svelte` using Skeleton's `<Dialog>` component. It acts as a side-drawer popping out from the right side (`justify-end`, `translate-x-full`). It utilizes internal state (`let drawerOpen = $state(false);`) to manually close the drawer whenever an anchor link is clicked.
- **Anchors & Scrolling**: Navigation within the single-page site operates via `#id` anchor links. Each component in `src/lib/components` has an explicit `id` tag to support this integration.
