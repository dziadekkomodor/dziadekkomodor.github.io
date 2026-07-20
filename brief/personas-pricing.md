# Personas, Pricing & Content Requirements — Dziadek Komodor

Part of the [full brief](../website_build_brief.md). Covers business context, personas, objections,
required page content, competitive landscape, and open items.

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
