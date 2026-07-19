# Dziadek Komodor — website

PC/electronics repair shop site for Piła/Bydgoszcz, Poland. Astro static site, bilingual (Polish
default at `/`, English at `/en/`, same slugs on both). See `website_build_brief.md` for the full
business/content brief and `CLAUDE.md` for the design rules this build follows.

## Commands

| Command             | Action                                      |
| :------------------ | :------------------------------------------- |
| `npm install`        | Install dependencies                        |
| `npm run dev`         | Local dev server at `localhost:4321`        |
| `npm run build`       | Production build to `./dist/`               |
| `npm run preview`      | Preview the production build locally        |
| `npx astro check`    | Type-check the whole project                |

## Deploying to GitHub Pages (Stage 2 — testing, not the final public release)

The repo already includes `.github/workflows/deploy.yml`, which builds and deploys automatically
on every push to `main`. `astro.config.mjs` detects the repo name/owner from GitHub Actions'
`GITHUB_REPOSITORY` variable automatically, so this works regardless of what you name the repo —
no manual config needed either way.

**One-time setup, after you've pushed this code to a new GitHub repo:**

1. Push this project to a **public** GitHub repository (Pages on a private repo needs a paid plan;
   public is fine and matches the "testing before full release" goal — the URL won't be
   advertised anywhere, it just isn't access-restricted).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push (or re-push) to `main` — the *Deploy to GitHub Pages* workflow runs automatically and the
   site goes live at:
   - `https://<your-username>.github.io/<repo-name>/` for a normal repo name, or
   - `https://<your-username>.github.io/` if the repo is named exactly `<your-username>.github.io`.
4. Check the **Actions** tab for build status/logs if the deploy doesn't show up.

No domain, DNS, or real contact details are needed for this step — that's Stage 3. The contact
form's Discord webhook is still empty at this point too, so it'll show a "test mode" message
instead of actually sending — also a Stage 3 step (`PUBLIC_DISCORD_WEBHOOK_URL` in repo Settings →
Secrets and variables → Actions → *Variables*, or via a `.env` file for local-only testing, never
committed).

## What's still a placeholder

- Domain (`dziadekkomodor.pl` throughout — lives in `astro.config.mjs`, `src/data/site.ts`,
  `public/robots.txt`), phone number, email — swap in `src/data/site.ts` once real (Stage 3).
- Every photo — styled "add photo here" placeholders throughout, per the brief's explicit no
  stock/AI-photo rule. Swap `PlaceholderImage`/`PlaceholderReviews` usages for real `<img>` tags
  before a full public release.
- `polityka-prywatnosci` and `regulamin` pages are working drafts, not lawyer-reviewed text.
