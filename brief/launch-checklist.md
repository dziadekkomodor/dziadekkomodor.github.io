# Launch Checklist — Dziadek Komodor

Part of the [full brief](../website_build_brief.md). Stage 2 (GitHub Pages) and Stage 3 (custom domain
and everything that makes the site findable). Only read this during actual launch work — not needed
during normal coding sessions.

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
- Update all placeholder domain references in the schema markup (design-tech.md §6) to the real domain,
  and re-push.

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
- Add the webhook URL as an environment variable / config value in the deployed site (per
  personas-pricing.md §4 / design-tech.md §6 — the code integration was already built in Stage 1, this
  just supplies the real URL).
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
