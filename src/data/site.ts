// Single source of truth for business facts. Every page, component, and JSON-LD block imports
// from here. Phone number is the only remaining placeholder — swap once confirmed.

export const site = {
  brandName: "Dziadek Komodor",
  tagline: {
    pl: "Naprawa komputerów i elektroniki, którą prowadzą ludzie, nie korporacja.",
    en: "Computer and electronics repair run by people, not a corporation.",
  },

  // Placeholder domain — realistic so it reads naturally in copy, trivial find-and-replace later.
  domain: "dziadekkomodor.pl",
  url: "https://dziadekkomodor.pl",

  phone: {
    display: "+48 607 318 412",
    href: "tel:+48607318412",
  },
  email: "kontakt@dziadekkomodor.pl",

  // Actual home base — kept private per the brief's home-based/hidden-address guidance.
  // Never rendered on any page or in JSON-LD streetAddress. Service-area marketing targets
  // Piła + Bydgoszcz only, exactly as the brief specifies.
  homeBase: "Wyrzysk",

  addressLocality: "Piła",
  addressRegion: "wielkopolskie",
  addressCountry: "PL",
  serviceAreas: ["Piła", "Bydgoszcz"],
  serviceAreasNote: {
    pl: "Piła, Bydgoszcz i okoliczne miejscowości",
    en: "Piła, Bydgoszcz, and surrounding towns",
  },

  warrantyMonths: 3,

  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "17:00" },
  ],
  hoursDisplay: {
    pl: "Poniedziałek–Piątek, 9:00–17:00",
    en: "Monday–Friday, 9:00 AM–5:00 PM",
  },

  socials: {
    facebook: "https://www.facebook.com/dziadekkomodor",
    googleBusiness: "https://g.page/dziadekkomodor",
  },

  // Env var name only — the actual webhook URL lives in .env (never committed), read via
  // import.meta.env.PUBLIC_DISCORD_WEBHOOK_URL at the point of use.
  discordWebhookEnvVar: "PUBLIC_DISCORD_WEBHOOK_URL",

  // Gates copy: this is unregistered activity (działalność nierejestrowana) — never render
  // "Sp. z o.o.", a NIP number, or VAT-inclusive language anywhere until Phase 2.
  legalStatus: {
    pl: "działalność nierejestrowana",
    en: "unregistered small-scale activity (Polish legal status, pre-company-registration)",
  },
} as const;

export type Lang = "pl" | "en";
