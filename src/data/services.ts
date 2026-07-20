// Metadata for the five persona/service landing pages — drives the homepage routing section,
// each page's <title>/meta description, and its Service JSON-LD (serviceType + description feed
// the schema directly, so keep this copy-accurate, not just a label).

export type ServiceEntry = {
  slug: string; // matches the .astro filename under src/pages/ (and src/pages/en/)
  persona: { pl: string; en: string };
  title: { pl: string; en: string };
  short: { pl: string; en: string };
  serviceType: { pl: string; en: string };
  metaDescription: { pl: string; en: string };
  theme?: "gaming";
};

export const services: ServiceEntry[] = [
  {
    slug: "naprawa-laptopow-i-komputerow",
    persona: { pl: "Rodziny i klienci indywidualni", en: "Families & individuals" },
    title: { pl: "Naprawa laptopów i komputerów", en: "Laptop and computer repair" },
    short: {
      pl: "Laptopy i komputery stacjonarne, w Pile, Bydgoszczy i okolicach — czyszczenie, wymiana dysku, matrycy, naprawy płyty głównej.",
      en: "Laptops and desktops, in Piła, Bydgoszcz, and surrounding towns — cleaning, drive swaps, screen replacement, motherboard repairs.",
    },
    serviceType: { pl: "Naprawa laptopów i komputerów", en: "Laptop and computer repair" },
    metaDescription: {
      pl: "Naprawa laptopów i komputerów w Pile, Bydgoszczy i okolicach — bezpłatna diagnoza, jasna wycena, 3 miesiące gwarancji.",
      en: "Laptop and computer repair in Piła, Bydgoszcz, and surrounding towns — free diagnosis, clear pricing, 3-month warranty.",
    },
  },
  {
    slug: "naprawa-telefonow-i-tabletow",
    persona: { pl: "Właściciele telefonów i tabletów", en: "Phone & tablet owners" },
    title: { pl: "Naprawa telefonów i tabletów", en: "Phone and tablet repair" },
    short: {
      pl: "Wymiana szybki, wyświetlacza i baterii, naprawa portu ładowania, ratowanie danych po zalaniu.",
      en: "Glass, display, and battery replacement, charging port repair, data rescue after liquid damage.",
    },
    serviceType: { pl: "Naprawa telefonów i tabletów", en: "Phone and tablet repair" },
    metaDescription: {
      pl: "Naprawa telefonów i tabletów w Pile, Bydgoszczy i okolicach — wymiana szybki, wyświetlacza, baterii. Bezpłatna diagnoza, 3 miesiące gwarancji.",
      en: "Phone and tablet repair in Piła, Bydgoszcz, and surrounding towns — glass, display, and battery replacement. Free diagnosis, 3-month warranty.",
    },
  },
  {
    slug: "komputery-gamingowe-bydgoszcz",
    persona: { pl: "Gracze PC — Bydgoszcz i Piła", en: "PC gamers — Bydgoszcz & Piła" },
    title: { pl: "Komputery gamingowe — budowa i naprawa", en: "Gaming PCs — builds and repair" },
    short: {
      pl: "Budowy na zamówienie, upgrade'y, chłodzenie, naprawy komponentowe. Boutique builder, jakiego w Bydgoszczy jeszcze nie było.",
      en: "Custom builds, upgrades, cooling, component-level repairs. The boutique gaming builder Bydgoszcz hasn't had yet.",
    },
    serviceType: { pl: "Budowa i naprawa komputerów gamingowych", en: "Gaming PC builds and repair" },
    metaDescription: {
      pl: "Komputery gamingowe w Bydgoszczy i Pile — budowa na zamówienie, upgrade GPU/chłodzenia, naprawy BGA. Techniczne podejście, bez kompromisów.",
      en: "Gaming PCs in Bydgoszcz and Piła — custom builds, GPU/cooling upgrades, BGA repairs. Technical approach, no shortcuts.",
    },
    theme: "gaming",
  },
  {
    slug: "uslugi-it-dla-firm",
    persona: { pl: "Małe firmy i mikroprzedsiębiorstwa", en: "Small businesses & micro-firms" },
    title: { pl: "Usługi IT dla firm", en: "IT services for businesses" },
    short: {
      pl: "Wsparcie break/fix, szybki czas reakcji, sprzęt poleasingowy — żeby Twoja firma nie stała w miejscu.",
      en: "Break/fix support, fast response times, post-lease hardware sourcing — so your business doesn't grind to a halt.",
    },
    serviceType: { pl: "Wsparcie IT i serwis sprzętu dla firm", en: "IT support and hardware service for businesses" },
    metaDescription: {
      pl: "Usługi IT dla firm w Pile, Bydgoszczy i okolicach — serwis break/fix, wsparcie na miejscu, sprzęt poleasingowy. Szybki czas reakcji.",
      en: "IT services for businesses in Piła, Bydgoszcz, and surrounding towns — break/fix support, on-site help, post-lease hardware. Fast response times.",
    },
  },
  {
    slug: "pomoc-komputerowa-seniorzy",
    persona: { pl: "Seniorzy", en: "Seniors" },
    title: { pl: "Pomoc komputerowa dla seniorów", en: "Computer help for seniors" },
    short: {
      pl: "Cierpliwe wyjaśnienia bez żargonu, duży druk, telefon zawsze pod ręką — i możliwość wizyty domowej.",
      en: "Patient, jargon-free help, large print, a phone always within reach — and home visits when you need one.",
    },
    serviceType: { pl: "Pomoc komputerowa dla seniorów", en: "Computer assistance for seniors" },
    metaDescription: {
      pl: "Pomoc komputerowa dla seniorów w Pile, Bydgoszczy i okolicach — cierpliwe wyjaśnienia, możliwość wizyty domowej, kontakt telefoniczny.",
      en: "Computer help for seniors in Piła, Bydgoszcz, and surrounding towns — patient explanations, home visits available, phone-first contact.",
    },
  },
];
