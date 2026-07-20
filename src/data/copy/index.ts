import { site } from './site';

export const homeCopy = {
  metaDescription: {
    pl: `Dziadek Komodor — naprawa komputerów, laptopów i telefonów w Pile, Bydgoszczy i okolicach. Bezpłatna diagnoza, jasna wycena, ${site.warrantyMonths} miesiące gwarancji.`,
    en: `Dziadek Komodor — computer, laptop, and phone repair in Piła, Bydgoszcz, and surrounding towns. Free diagnosis, clear pricing, ${site.warrantyMonths}-month warranty.`,
  },
  hero: {
    eyebrow: {
      pl: "Serwis komputerowy — Piła, Bydgoszcz i okolice",
      en: "Computer repair — Piła, Bydgoszcz & surrounding area",
    },
    headline: {
      pl: "Naprawiamy komputery, laptopy i telefony — uczciwie, szybko, z gwarancją.",
      en: "We repair computers, laptops, and phones — honestly, quickly, with a warranty.",
    },
    subhead: {
      pl: "Dziadek Komodor to lokalny serwis prowadzony przez dwóch pasjonatów sprzętu, nie korporację. Bezpłatna diagnoza, wycena na piśmie przed każdą naprawą, żadnych ukrytych kosztów.",
      en: "Dziadek Komodor is a local shop run by two hardware enthusiasts, not a corporation. Free diagnosis, a written quote before every repair, no hidden costs.",
    },
    ctaPrimary: { pl: "Darmowa wycena", en: "Free quote" },
    ctaSecondary: { pl: "Zadzwoń teraz", en: "Call now" },
  },
  routing: {
    heading: {
      pl: "Czego dziś potrzebujesz?",
      en: "What do you need today?",
    },
    intro: {
      pl: "Wybierz, co najlepiej opisuje Twoją sytuację — trafisz od razu na stronę z konkretami.",
      en: "Pick whatever best describes your situation — you'll land straight on the page with the specifics.",
    },
  },
  trust: {
    heading: {
      pl: "Wiemy, o co się martwisz",
      en: "We know what you're worried about",
    },
    intro: {
      pl: "Aż 77% Polaków nie ufa serwisom reklamującym się w internecie. Rozumiemy dlaczego — więc od razu odpowiadamy na najczęstsze obawy.",
      en: "As many as 77% of Poles distrust technicians who advertise online. We understand why — so here's how we address the most common concerns upfront.",
    },
  },
  process: {
    heading: {
      pl: "Jak wygląda naprawa krok po kroku",
      en: "How a repair works, step by step",
    },
  },
  team: {
    heading: {
      pl: "Poznaj Alberta i Mikołaja",
      en: "Meet Albert and Mikołaj",
    },
    intro: {
      pl: "Dwóch współzałożycieli, jeden warsztat. Zobacz, kto naprawia Twój sprzęt.",
      en: "Two co-founders, one workshop. See who's actually fixing your device.",
    },
    ctaLabel: { pl: "Poznaj cały zespół", en: "Meet the whole team" },
  },
  ctaBanner: {
    heading: {
      pl: "Gotowy na bezpłatną wycenę?",
      en: "Ready for a free quote?",
    },
    body: {
      pl: "Zadzwoń, napisz albo wypadnij do nas — odpowiemy szybko i bez zobowiązań.",
      en: "Call, message, or drop by — we'll get back to you quickly, no obligation.",
    },
  },
} as const;
