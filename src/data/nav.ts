// Header/footer navigation labels. Slugs match src/pages/*.astro filenames (and their /en/
// siblings) — same-slug bilingual routing per the approved plan, so only the label translates.

export type NavLink = {
  slug: string; // "" means homepage
  label: { pl: string; en: string };
};

export const primaryNav: NavLink[] = [
  { slug: "cennik", label: { pl: "Cennik", en: "Pricing" } },
  { slug: "o-nas", label: { pl: "O nas", en: "About" } },
  { slug: "opinie", label: { pl: "Opinie", en: "Reviews" } },
  { slug: "poradnik", label: { pl: "Poradnik", en: "Guides" } },
  { slug: "faq", label: { pl: "FAQ", en: "FAQ" } },
];

export const servicesLabel = { pl: "Usługi", en: "Services" };

export const contactNav: NavLink = { slug: "kontakt", label: { pl: "Kontakt", en: "Contact" } };

export const footerLegalNav: NavLink[] = [
  { slug: "polityka-prywatnosci", label: { pl: "Polityka prywatności", en: "Privacy policy" } },
  { slug: "regulamin", label: { pl: "Regulamin", en: "Terms & warranty policy" } },
];

export function localePath(lang: "pl" | "en", slug: string): string {
  // BASE_URL is "/" locally and on a root (username.github.io) Pages site, or "/repo-name/" on a
  // project Pages site — prefixing here means every internal link keeps working no matter which
  // kind of repo this ends up being pushed to, without needing to know the repo name in advance.
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const localeSegment = lang === "en" ? "/en" : "";
  if (!slug) return lang === "en" ? `${base}/en/` : `${base}/`;
  return `${base}${localeSegment}/${slug}`;
}
