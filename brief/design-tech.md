# Design Direction & Technical Requirements — Dziadek Komodor

Part of the [full brief](../website_build_brief.md). Covers design direction detail, performance,
accessibility, security, GDPR mechanics, structured data, and AI/answer-engine content structuring.
See `CLAUDE.md` for the headline design rules (fonts, colors, layout, motion) — this file has the
supporting detail.

## 5. Design Direction

- **Palette:** warm neutral base (white/off-white/light grey) + one confident accent color for CTAs.
  Optionally a slightly darker/techier accent variant for the gaming landing page, lighter/calmer for
  family and senior pages, within one consistent brand system.
- **Typography:** one strong headline typeface + one highly readable sans-serif body font. Body text
  minimum 16px (18px+ on the senior-focused page). High contrast (≥4.5:1). Generous line spacing.
- **Imagery:** real photos only — team, workshop, tools, before/after repairs. No stock photography, no
  AI-generated images (both read as untrustworthy to this audience). Use placeholders in the build until
  real photos are taken.
- **Layout:** clear hierarchy, one primary CTA repeated top/mid/bottom of each page, icons for service
  highlights, sticky header with phone number + CTA.
- **Motion:** restrained micro-interactions only (button feedback, subtle reveals) — no heavy animation
  that slows the page.
- **Avoid:** generic "AI template" look, overdesigned unclear hero sections, low-contrast "elegant" text,
  desktop-only design thinking.
- **Mobile-first is mandatory** — most local/urgent repair searches happen on phones.

## 6. Technical Requirements (code-level, build these in from the start)

**Performance (Core Web Vitals — still the standard into 2026):**
- LCP < 2.5s, INP < 200ms, CLS < 0.1.
- WebP/AVIF images, explicit image dimensions (prevent layout shift), minimal third-party scripts,
  self-hosted fonts, `fetchpriority="high"` on hero image.

**Accessibility:**
- Target WCAG 2.1 AA even though the EU Accessibility Act's microenterprise exemption (under 10 employees
  and/or under €2M turnover, services only) likely covers this business for now. It's good practice, aids
  SEO, helps the senior persona, and future-proofs the site as the business grows.
- 4.5:1+ contrast, 16px+ text, full keyboard navigation, alt text on all images, semantic HTML heading
  structure, labeled form fields.

**Security (only what's actually relevant for a small brochure/contact-form site — do not over-build):**
- Input sanitization on the contact/intake form (server-side validation, escape input).
- HTTPS everywhere (free/automatic via GitHub Pages once DNS is set up in Stage 2).
- Rate limiting + basic bot protection on the contact form (simple rate limit, honeypot field — see
  personas-pricing.md §4).
- Secrets (any API keys — Discord webhook, maps, analytics) in environment variables, never hardcoded/committed.
- Dependency scanning: GitHub Dependabot alerts or `npm audit` is sufficient — no dedicated security pipeline needed.
- Do NOT build: user auth/roles, multi-tenancy, audit logging, load/chaos testing, circuit breakers,
  RTO/RPO disaster recovery plans, formal architecture docs — all irrelevant at this scale.

**GDPR / data handling (build the mechanics now, content comes from the separate privacy policy doc):**
- Reserve a footer link + form link to `/polityka-prywatnosci` (privacy policy — drafted separately).
- State clearly in that policy what's collected via the intake form, why, and how long it's retained.
- Simple deletion practice: delete old inquiry records after a defined period (e.g. 12 months of inactivity).
- Consent checkbox required on the intake form before submission (build this into the form now).

**Structured data (JSON-LD) — build these into the page templates now, using placeholder values where the
real domain/phone/photos aren't finalized yet:**

Homepage — `ProfessionalService` (add `ComputerStore` to the `@type` array if selling refurbished hardware):
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "ComputerStore"],
  "@id": "https://TWOJADOMENA.pl/#firma",
  "name": "NAZWA FIRMY",
  "image": "https://TWOJADOMENA.pl/img/serwis.jpg",
  "url": "https://TWOJADOMENA.pl/",
  "telephone": "+48XXXXXXXXX",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Piła",
    "addressRegion": "wielkopolskie",
    "addressCountry": "PL"
  },
  "areaServed": [
    { "@type": "City", "name": "Piła" },
    { "@type": "City", "name": "Bydgoszcz" }
  ],
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "17:00" }
  ],
  "sameAs": ["https://www.facebook.com/...", "https://g.page/..."]
}
</script>
```
*(Omit `address.streetAddress` since this is a home-based service-area business hiding its exact address —
`addressLocality` + `areaServed` is sufficient. Only add `aggregateRating` once genuine reviews exist and
are visibly displayed on the page — never fabricate ratings, Google can penalize this.)*

Each service page — `Service` schema linked to the business via the shared `@id`:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Naprawa laptopów i komputerów",
  "provider": { "@type": "ProfessionalService", "@id": "https://TWOJADOMENA.pl/#firma" },
  "areaServed": [ { "@type": "City", "name": "Piła" }, { "@type": "City", "name": "Bydgoszcz" } ]
}
</script>
```

FAQ page/section — `FAQPage` schema (answers must match visible on-page text exactly):
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Ile trwa naprawa laptopa?", "acceptedAnswer": { "@type": "Answer", "text": "Standardowo 1–3 dni robocze." } },
    { "@type": "Question", "name": "Czy diagnoza jest darmowa?", "acceptedAnswer": { "@type": "Answer", "text": "Tak, wstępna diagnoza jest bezpłatna." } }
  ]
}
</script>
```

**Content structuring for AI/answer-engine visibility (build this into how pages are written):**
- Write in Polish first; English only as separate pages if targeting expats.
- Answer-first structure: lead each section with a direct 1–2 sentence answer to the implied question,
  question-phrased H2/H3 headings, short scannable paragraphs, tables for pricing.
- Ensure robots.txt does NOT block AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot) — verify
  this explicitly, many default configs block them silently.
- llms.txt: fine to auto-generate if a one-click option exists, but not worth real effort — Google has
  confirmed it doesn't use it, and a large-scale study found no measurable effect on AI citations elsewhere.
- Generate a **sitemap.xml** listing every page (submission to Google Search Console happens in Stage 2).
