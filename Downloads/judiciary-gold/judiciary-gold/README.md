# Judiciary Gold — Website

A premium, responsive landing page for **Judiciary Gold**, a fictional judicial
services exam mentorship institute. Built as an **original design** inspired
only by the general theme of the referenced Instagram page — no Instagram UI,
assets, or copy have been copied.

## Tech Stack

- React 18 (functional components + hooks only)
- Vite
- Tailwind CSS
- Framer Motion (subtle scroll/hover animations)
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/     Reusable UI building blocks (Navbar, Hero, Courses, etc.)
  pages/          Page-level composition (Home.jsx)
  data/           Sample content as plain JS modules (courses, faculty, etc.)
  hooks/          Custom hooks (useCountUp for animated statistics)
  index.css       Tailwind entry + global accessibility/motion styles
  App.jsx         Root layout (Navbar + routed page + Footer)
  main.jsx        React DOM entry point
```

## Design Notes

- **Palette:** ink black, warm paper white, and an antique gold accent —
  chosen to read as premium and legal/academic rather than flashy.
- **Type:** Fraunces (display serif) for headings, Public Sans for body
  copy, IBM Plex Mono for small data labels (stats, dates, eyebrows).
- **Signature element:** the `Seal` component — an original SVG medallion
  used as the logo mark, hero accent, and footer mark, reinforcing the
  "certification" feel of the brand.
- Course and faculty imagery is intentionally represented with icons/initials
  rather than stock photography, keeping the visual language consistent and
  license-free. Swap these for real photography by editing `src/data/*.js`.

## Editing Content

All copy lives in `src/data/`:

- `courses.js` — course catalogue
- `faculty.js` — instructor roster
- `testimonials.js` — student quotes
- `updates.js` — blog/announcement grid
- `resources.js` — study resource cards
- `faqs.js` — FAQ accordion entries

Update these files to change site content without touching component code.

## Accessibility

- Visible focus rings (`:focus-visible`) tuned to the brand's gold accent
- `prefers-reduced-motion` respected globally
- Semantic headings, labelled form fields, and `aria-*` attributes on
  interactive widgets (accordion, carousel, mobile menu)

## Optional: WordPress / Elementor

This project is a standalone React app. To reproduce it in WordPress:

1. Recreate the section order above as Elementor sections/containers.
2. Import the color palette and fonts (Fraunces / Public Sans / IBM Plex
   Mono via Elementor's Global Fonts) to match this design system.
3. Rebuild dynamic sections (courses, faculty, testimonials, FAQ) using
   Elementor's Loop Grid / Accordion widgets bound to a matching custom
   post type, using the sample data files here as your content reference.
