# Design Rules for This Project

## Fonts
Use two fonts: [pick headline font, e.g. Fraunces] for headlines, [pick body font, e.g. Work Sans] for body text.
Never use Inter, Roboto, Arial, system-ui, or Space Grotesk.

## Colors
One dominant color + one accent color, both exact hex values (not vague descriptions like "a warm red").
No purple gradients. No timid, evenly-distributed pastel palettes.

## Layout
Avoid these default AI-generated patterns:
- Centered-text hero section with an icon grid directly below
- Three-card rows for features/services
- Uniform rounded corners on every element
- Glassmorphism overlays
- Bento-box grids used without a real reason

## Motion / Animation
Use orchestrated scroll-triggered animations (staggered reveals, subtle parallax on hero) via GSAP —
not plain CSS fade-ins. Motion should feel deliberate and premium, not decorative or default.

## Overall Direction
Take a real aesthetic risk that fits a trustworthy local repair business — not a generic SaaS template.

## Content & Business Context
Don't preload the full brief. Read only the file relevant to the current task, on demand:
- `brief/personas-pricing.md` — business context, target personas, customer objections, required page
  content (pricing, warranty, process, FAQ, contact form), competitive landscape, open items. Read this
  when writing copy, structuring pages, or targeting a specific persona.
- `brief/design-tech.md` — design direction detail, technical requirements (performance, accessibility,
  security, GDPR, JSON-LD schema templates, AI/answer-engine content structuring). Read this when
  implementing a page template, schema markup, or a compliance-related feature.
- `brief/launch-checklist.md` — Stage 2/3 steps (GitHub Pages, domain, email, Discord webhook, Google
  Business Profile, directories). Only relevant during actual launch tasks, not normal coding sessions.

## Stack
Astro (static output), plain CSS with custom-property design tokens, no UI framework. Bilingual
(pl default, en under /en/) via Astro's built-in i18n routing. See the approved implementation plan
for the full architecture.

## Development
When starting the dev server, use background mode:
```
astro dev --background
```
Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation
Astro docs: https://docs.astro.build — fetch a specific guide only when the current task needs it,
don't preload these:
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
