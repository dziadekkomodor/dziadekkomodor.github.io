# Website Build Brief — PC & Electronics Repair Shop (Piła / Bydgoszcz, Poland)

This file consolidates everything decided and researched so far. It's meant to be pasted into Claude Code
as the brief for building the site. Nothing has been built or published yet — this is the source of truth.

Grouped into three stages: **Stage 1 (Local Build)** is everything needed to design and code the site
entirely on your own machine — nothing public yet. **Stage 2 (GitHub)** is pushing the finished code to
GitHub and getting it live at a free github.io URL, so it's testable in a real browser before spending any
money. **Stage 3 (Publish)** is buying the domain and everything else that makes it findable — DNS, email,
Google Business Profile, directories.

---

# STAGE 1 — LOCAL BUILD (nothing public yet)

## 1. Business Context

- Two equal partners running a PC/electronics repair business, currently in **Phase 1: unregistered legal
  activity** (działalność nierejestrowana) in Poland. No NIP, no registered company yet.
- Quarterly revenue limit: **10,813.50 zł per person (2026 rate)**. This matters for the site: no VAT
  invoices can be issued yet, and the business address should NOT be a formal registered commercial address
  (it's home-based). Keep any "About" copy consistent with this — real names/faces are fine, but don't
  imply a registered company (e.g. avoid "Sp. z o.o.", NIP numbers, VAT-inclusive language) until Phase 2.
- Service area: **Piła and Bydgoszcz** (Wielkopolskie / Kujawsko-Pomorskie region, Poland), plus nearby towns.
- Both partners already own most core repair tools — the business is ready to take jobs, not a startup
  buying equipment from scratch.
- Existing unrelated brand: "Piegeon" (piegeon.de) — an indie game/software studio, kept separate from this
  business.
- **Brand name (decided): "Dziadek Komodor"** ("Grandpa Commodore") — a nostalgic nod to the Commodore 64's
  cult popularity in Poland, personified as a warm, trustworthy grandpa figure. Works well across personas:
  nostalgic/retro appeal for gamers, warm and approachable for families, relatable for seniors, still
  credible enough for small-business clients. Checked for conflicts (web search, mid-2026): no existing
  business, domain, or social presence found using this name — appears genuinely available. Still confirm
  before finalizing: .pl domain availability, CEIDG/KRS registry check, Facebook/Instagram handle
  availability, and a quick look at the Polish trademark database (uprp.gov.pl).
- **Mascot opportunity:** the name supports a real illustrated character (a cartoon grandpa with a
  Commodore 64) rather than just a wordmark — worth building this into the logo/visual identity rather
  than using a generic tech logo.

## 2. Target Personas (use to shape copy, imagery, and page structure)

| Persona | Age | Description | Content angle |
|---|---|---|---|
| Budget families / value-seekers | 25–65 | Largest volume segment. Aging laptops/phones, price-sensitive, choose independents over big chains on cost + trust. | Plain language, transparent pricing, warranty, "we treat your device like our own." |
| PC gamers | 15–35 | Higher-margin builds/upgrades/repairs. Mostly male. Underserved niche, especially in Bydgoszcz (no dedicated local boutique builder there). | Technical depth, benchmarks, component-level detail (GPU/cooling/BGA), portfolio of builds, darker/techy sub-aesthetic. |
| Small businesses / micro-firms | 30–60 (owners) | Need IT support, break/fix, affordable refurbished/post-lease hardware. Steadier recurring B2B revenue. | Uptime, response times, on-site support, hardware sourcing, professional tone. |
| Elderly residents (secondary) | 65+ | Fast-growing online population, low digital skills. Wants patient, jargon-free help. Zero local competitors branded around this — open niche. | Larger type, simple language, phone-first CTA, home-visit option, reassurance over technical detail. |

**Local population context (Bydgoszcz, GUS — Piła follows similar regional pattern):**
Working-age (18–64): ~57% · Post-working age (60/65+): ~27% · Pre-working age (0–17): ~16%.
~53% of Poles play video games nationally (context for the gamer segment).
Registered local businesses: ~8,558 in Piła, ~47,759 in Bydgoszcz (B2B persona's addressable pool).

**Structure recommendation:** one homepage hub + a dedicated landing page per persona/service line, not one
page trying to speak to everyone. Suggested URLs:
- `/` — homepage hub (who/what/where, routes to service pages)
- `/naprawa-laptopow-pila` and `/naprawa-komputerow-bydgoszcz` — general consumer repair (families persona)
- `/komputery-gamingowe-bydgoszcz` — gaming builds/upgrades/repair
- `/uslugi-it-dla-firm` — small business IT support
- `/pomoc-komputerowa-seniorzy` — senior-friendly help
- `/cennik` — price list
- `/o-nas` — about / team bios
- `/opinie` — reviews
- `/kontakt` — NAP, map, hours, intake form
- `/blog` or `/poradnik` — how-to content (SEO/AI visibility)
- `/faq` — FAQ page
- `/polityka-prywatnosci` — privacy policy (to be drafted separately)
- `/regulamin` — shop policy (warranty, liability, intake terms — to be drafted separately)

## 3. Top Customer Objections to Address (from Polish market research)

Real data point: per the Tauron/IPC "Naprawiamy czy wyrzucamy?" study, **~77% of Poles distrust
online-advertised technicians**, and price transparency is a major decision factor. The top 3 fears to
proactively defuse on the homepage and every service page:
1. **"Will I get overcharged / upsold on repairs I don't need?"** → Answer: free/low-cost diagnosis, written
   quote before any work starts, "we only fix what actually needs fixing."
2. **"Can I trust this local/small operation vs. a big chain?"** → Answer: real photos of the two of you and
   the actual workshop (no stock photos, no AI-generated imagery), genuine Google reviews, warranty terms
   stated plainly.
3. **"How long will it take / what's the process?"** → Answer: clear step-by-step process (Diagnoza →
   Wycena → Naprawa → Testy → Gwarancja), realistic turnaround times (e.g. 24–72h for common jobs).

## 4. Required Page Content (specifics, not generic advice)

**Homepage must include (above the fold):**
- Headline stating what you do, where, why — readable in under 5 seconds.
- Click-to-call phone number, visible/sticky.
- Primary CTA: "Darmowa wycena" / "Umów naprawę" (no-obligation framing lowers barrier).
- Real photo of the two partners and/or workshop — not stock imagery.

**Cennik (price list) page** — publish real/indicative prices. Local Bydgoszcz/Piła market benchmarks
(from prior research) to use as a starting reference, adjust to your actual costs:
- Free initial diagnosis (0 zł); detailed diagnosis 60–70 zł, waived if repair proceeds.
- Laptop cleaning + thermal paste: 65–150 zł (gaming laptops from ~250 zł).
- Liquid-damage cleaning: from ~150–280 zł.
- OS install: 100–180 zł.
- HDD/SSD swap (labor only): 50–70 zł + part.
- Screen/matrix replacement (15.6"): from ~370 zł.
- Hinge/case repair: from ~50 zł + parts.
- Motherboard power-circuit repair: ~230–350 zł; BGA rework: 200–450 zł; BIOS: 150–280 zł.
- Basic/logical data recovery: from ~100 zł locally (deep/mechanical/RAID recovery — note as outsourced,
  300–4,500 zł range, since no local lab exists yet).
- Phone screen/glass replacement: indicative market average ~586 zł (glass) / ~679 zł (full display) /
  up to ~1,610 zł (iPhone display); battery ~415 zł. **Flag these as indicative, verify before publishing.**
- State clearly: "Cena może się różnić w zależności od modelu urządzenia — ostateczna wycena po
  bezpłatnej diagnozie, naprawa tylko po Twojej akceptacji."

**Warranty/guarantee messaging:** state a specific warranty period on repairs (competitors offer 6–24
months — decide on a number and state it plainly wherever pricing appears).

**Process transparency:** free/low-cost diagnosis → written quote → approval required before work →
repair → testing → warranty. State this on the homepage and every service page.

**Team/About page:** real names, photos, years of experience, specializations of both partners. This is a
genuine trust/SEO asset (E-E-A-T) — don't skip it or leave it vague.

**Reviews:** embed real Google reviews (once collected, post-launch). Don't fabricate or pad — a natural
profile of honest reviews outperforms a suspiciously perfect one. Leave a placeholder section in the build.

**FAQ section/page** — include real questions like: "Ile trwa naprawa?", "Czy diagnoza jest darmowa?",
"Czy dojeżdżacie do klienta?", "Co jeśli dane zostaną utracone?", "Jaka jest gwarancja na naprawę?"
Write actual answers (not placeholders) before launch — this content also feeds AI/answer-engine visibility.

**Contact / intake form — keep short:**
- Name, phone or email, device type (dropdown), brief problem description, optional photo upload,
  consent checkbox (required for GDPR — link to privacy policy).
- Provide both the form AND a click-to-call number (many customers prefer calling).
- No unnecessary fields — every extra field costs leads.
- **Form handling (decided):** GitHub Pages is static-only, so the form submits directly to a **Discord
  webhook** via client-side `fetch()` — no backend needed, submissions land in a Discord channel. Since the
  webhook URL is exposed in public JS, include a **honeypot field** (hidden input real users never fill; if
  filled, silently drop the submission) and disable the submit button after one click. If a searchable
  paper trail is wanted later, swap to Formspree (free tier, email-based) — a five-minute change.
  (The actual webhook URL is created in Stage 2, once Discord is set up for this — code the integration
  now with a placeholder/env variable.)

**Service area:** explicitly state Piła + Bydgoszcz + nearby towns served; mention if on-site/pickup
or remote support is offered.

## 5. Design Direction

- **Palette:** warm neutral base (white/off-white/light grey) + one confident accent color for CTAs.
  Optionally a slightly darker/techier accent variant for the gaming landing page, lighter/calmer for
  family and senior pages, within one consistent brand system.
- **Typography:** one strong headline typeface + one highly readable sans-serif body font. Body text
  minimum 16px (18px+ on the senior-focused page). High contrast (≥4.5:1). Generous line spacing.
- **Imagery:** real photos only — team, workshop, tools, before/after repairs. No stock photography, no
  AI-generated images (both read as untrustworthy to this audience). Use placeholders in the build until
  real photos are taken (see open items).
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
- Rate limiting + basic bot protection on the contact form (simple rate limit, honeypot field — see Section 4).
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
real domain/phone/photos aren't finalized yet (see open items):**

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

## 7. Competitive Landscape (for positioning/differentiation, not to copy)

- **Bydgoszcz** is fairly saturated — ENTER and Komp-Tech are the review-count leaders. Underserved niches
  there: dedicated boutique gaming-PC builder, professional data recovery, senior-focused branding.
- **Piła** is less saturated — clearer gaps: no console repair (PS/Xbox), no senior-focused branding, no
  data recovery lab.
- Differentiation strategy: lead with transparent pricing + warranty + real-people trust signals (the
  thing distrust-driven customers are looking for), and claim one or more of the open niches above
  explicitly in copy (e.g. "naprawiamy również konsole" if console repair is offered).

## 8. Open Items Needed Before Build Can Be Finished

- [x] Brand name: **Dziadek Komodor** (see Section 1) — still confirm domain/CEIDG/social/trademark before
  fully finalizing, but proceed with build using this name.
- [ ] Warranty length decision (e.g. 6/12/24 months) — needed for copy across multiple pages.
- [ ] Real photos of both partners + workshop — can build with placeholders, must swap before publish.
- [ ] Finalized price list numbers — benchmarks above are market reference, not confirmed prices.
- [ ] Privacy policy and shop policy/regulamin text (to be drafted separately, linked from footer + form).

---

# STAGE 2 — GITHUB (push live to a free github.io URL)

This is the first time the site becomes actually public — but still free, no domain purchased yet. Good
checkpoint to test everything for real (mobile rendering, form submission, load speed) before spending money.

## 9. Push to GitHub Pages

- Create the GitHub repository, push the finished Stage 1 code to it.
- Enable **GitHub Pages** in the repo settings (Settings → Pages → select branch/folder to deploy from).
- The site becomes live at `https://username.github.io/repo-name/` (or `https://username.github.io/` if
  it's a root user/org site repo) — free, with GitHub's own HTTPS automatically included.
- Test everything on this live URL: mobile rendering, page speed, the contact form actually submitting
  to Discord, all links, all pages. Fix anything broken before moving to Stage 3.
- No domain or DNS involved yet at this point — this is purely GitHub's own free hosting.

# STAGE 3 — PUBLISH (custom domain + everything else that makes it findable)

Everything below involves real-world actions: buying things, creating accounts, and making the site
findable under its own domain rather than a github.io URL.

## 10. Domain & Custom Domain Setup

- Buy the chosen domain (.pl preferred) from a registrar that supports .pl (e.g. home.pl, OVH, Namecheap).
- Point the domain at the already-live GitHub Pages site: add an `A`/`ALIAS` record (root domain) or
  `CNAME` record (www subdomain) per GitHub's instructions, and add a `CNAME` file to the repo with the
  domain name.
- Wait for DNS to propagate, then confirm GitHub auto-issues the free HTTPS certificate for the custom domain.
- Update all placeholder domain references in the schema markup (Section 6) to the real domain, and re-push.

## 11. Email Setup

- **Mailbox setup: Zoho Mail free tier** — free custom-domain email for up to 5 mailboxes (covers both
  partners), webmail plus IMAP/SMTP for use in Gmail or a phone's mail app.
  1. Sign up at Zoho Mail once the domain is purchased.
  2. Add the **MX records** Zoho provides to the domain's DNS — this makes kontakt@twojadomena.pl deliverable.
  3. Follow Zoho's guided **SPF, DKIM, and DMARC** setup — this is what prevents outgoing mail from landing
     in spam folders. No extra domains needed for manual replies from a normal inbox.
  4. Alternative if budget allows later: Google Workspace (~6 USD/user/month, familiar Gmail UI).
- **If automated emails get added later** (e.g. auto-reply confirmations triggered by the contact form):
  use a transactional email service (e.g. Resend, free tier) sending from a **separate subdomain** (e.g.
  mail.twojadomena.pl) rather than the root domain, to isolate sending reputation. Not needed at launch.

## 12. Discord Webhook (for the contact form)

- Create a webhook in the Discord server/channel where you want form submissions to land.
- Add the webhook URL as an environment variable / config value in the deployed site (per Section 4/6 —
  the code integration was already built in Stage 1, this just supplies the real URL).
- Test the form end-to-end once live to confirm submissions arrive correctly and the honeypot doesn't block
  real submissions.

## 13. Google Business Profile

- Set up as a **Service-Area Business** with the home address **hidden** (Google's own guidance requires
  this for home-based service-area businesses).
- Define Piła, Bydgoszcz, and nearby towns as the service area.
- Pick precise categories (e.g. "Serwis komputerowy").
- Add real photos, complete every field, and complete Google's video verification step.
- Use the exact same **canonical NAP** (name spelling + phone number) as the website — inconsistency
  actively hurts local ranking and AI citation.

## 14. Directory Listings & Citations

- Register the identical NAP on the main Polish directories: **Panorama Firm, PKT.pl, Aleo, Cylex,
  Oferteo, Zumi, Facebook Page.**

## 15. Search Engine Submission

- Submit the `sitemap.xml` (built in Stage 1) to Google Search Console.
- Verify domain ownership in Search Console.
- Spot-check that robots.txt isn't accidentally blocking Googlebot or AI crawlers once live.

## 16. Reviews

- Start actively collecting Google reviews after every completed job (SMS/QR code request) — this is the
  single highest-leverage trust and ranking signal identified in the research, given how much Polish
  customers distrust advertised technicians.
- Once real reviews exist, add genuine `aggregateRating` to the homepage schema and embed reviews on the
  `/opinie` page (both were left as placeholders in Stage 1).

## 17. Post-Launch Open Items

- [ ] Google Business Profile setup and verification.
- [ ] Directory listings across the Polish directory sites above.
- [ ] First round of real customer photos/reviews to replace placeholders.

---

*This brief reflects research and decisions made as of the current conversation. Prices, thresholds, and
legal figures reflect 2026 Polish rules at time of writing — verify before publishing anything as final,
especially pricing and legal/compliance text.*
