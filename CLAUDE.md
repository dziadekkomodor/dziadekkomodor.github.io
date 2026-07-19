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
Reference: this project also has a full business/content brief in website_build_brief.md — use it for
copy, page structure, and persona targeting, not just visuals.

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
Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
