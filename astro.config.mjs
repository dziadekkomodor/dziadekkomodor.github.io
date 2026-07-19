// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Placeholder domain for local dev/build — keep in sync with src/data/site.ts and
// public/robots.txt (Stage 3: replace all three once a real domain is purchased). This is
// intentionally NOT used for Stage 2 GitHub Pages testing (see below) — the brief is explicit
// that the placeholder domain only gets swapped once a real domain exists.
const PLACEHOLDER_SITE_URL = 'https://dziadekkomodor.pl';

// GitHub Actions sets GITHUB_REPOSITORY to "owner/repo" automatically during the Pages deploy
// workflow (.github/workflows/deploy.yml) — using it here means `site`/`base` are derived
// automatically for whatever repo this actually gets pushed to, without hardcoding a repo name
// that isn't chosen yet. A repo named exactly "<owner>.github.io" is a root-level Pages site
// (no subpath); anything else is a project site served at "<owner>.github.io/<repo>/".
const ghRepository = process.env.GITHUB_REPOSITORY;
const [ghOwner, ghRepo] = ghRepository ? ghRepository.split('/') : [];
const isRootSite = ghRepo === `${ghOwner}.github.io`;

const SITE_URL = ghRepository
  ? (isRootSite ? `https://${ghOwner}.github.io` : `https://${ghOwner}.github.io/${ghRepo}`)
  : PLACEHOLDER_SITE_URL;
const BASE = ghRepository && !isRootSite ? `/${ghRepo}` : undefined;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE,
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
