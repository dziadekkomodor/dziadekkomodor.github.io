// Single source of truth for FAQ content — both FaqAccordion.astro (visible text) and the
// FAQPage JSON-LD builder read from this same array, so the schema always matches what's on
// the page (a Google requirement for FAQPage rich results).

export type FaqItem = {
  question: { pl: string; en: string };
  answer: { pl: string; en: string };
};

export const faqItems: FaqItem[] = [
  {
    question: { pl: "Czy diagnoza jest darmowa?", en: "Is the diagnosis free?" },
    answer: {
      pl: "Tak, wstępna diagnoza jest bezpłatna. Diagnoza szczegółowa kosztuje 60–70 zł, ale ta kwota jest odliczana od ceny naprawy, jeśli się na nią zdecydujesz — płacisz za nią tylko wtedy, gdy finalnie nie naprawiamy sprzętu.",
      en: "Yes, the initial diagnosis is free. A detailed diagnosis costs 60–70 zł, but that amount is deducted from the repair cost if you go ahead — you only actually pay for it if the repair doesn't happen.",
    },
  },
  {
    question: { pl: "Ile trwa naprawa?", en: "How long does a repair take?" },
    answer: {
      pl: "Większość typowych napraw (czyszczenie, wymiana dysku, instalacja systemu, wymiana matrycy) zajmuje 24–72 godziny od momentu akceptacji wyceny. Naprawy komponentowe płyty głównej (BGA, układy zasilania) mogą potrwać dłużej — dokładny czas zawsze podajemy razem z wyceną.",
      en: "Most common repairs (cleaning, drive swaps, OS installs, screen replacements) take 24–72 hours after you approve the quote. Motherboard-level component repairs (BGA, power circuits) can take longer — we always give you a specific timeframe together with the quote.",
    },
  },
  {
    question: { pl: "Czy dojeżdżacie do klienta?", en: "Do you offer on-site or home visits?" },
    answer: {
      pl: "Obsługujemy Piłę, Bydgoszcz i okoliczne miejscowości. W wielu przypadkach możliwy jest odbiór sprzętu lub wizyta na miejscu — szczególnie ważne dla seniorów i firm. Napisz lub zadzwoń, a ustalimy najwygodniejszą opcję.",
      en: "We serve Piła, Bydgoszcz, and nearby towns. In many cases we can pick up your device or visit on-site — especially useful for seniors and business clients. Message or call us and we'll work out what's easiest.",
    },
  },
  {
    question: { pl: "Co jeśli dane zostaną utracone?", en: "What if my data gets lost?" },
    answer: {
      pl: "Przed każdą naprawą ingerującą w dysk informujemy o ryzyku utraty danych i, jeśli to możliwe, wykonujemy kopię zapasową. Oferujemy też podstawowe odzyskiwanie danych na miejscu, a w bardziej złożonych przypadkach (uszkodzenia mechaniczne, RAID) — we współpracy ze specjalistycznym laboratorium zewnętrznym.",
      en: "Before any repair that touches the drive, we tell you about the risk of data loss and back up what we can beforehand. We offer basic data recovery in-house, and for more complex cases (mechanical damage, RAID) we work with a specialist external lab.",
    },
  },
  {
    question: { pl: "Jaka jest gwarancja na naprawę?", en: "What warranty do you offer on repairs?" },
    answer: {
      pl: "Na wykonane naprawy dajemy 5 miesięcy gwarancji. Warunki gwarancji zależą od rodzaju usterki i zawsze są jasno opisane na wycenie.",
      en: "We give a 5-month warranty on completed repairs. The exact terms depend on the type of fault and are always spelled out clearly on your quote.",
    },
  },
  {
    question: { pl: "Czy mogę zostać przeładowany za naprawę, której nie potrzebuję?", en: "Could I get overcharged for repairs I don't actually need?" },
    answer: {
      pl: "Nie. Naprawiamy tylko to, co faktycznie wymaga naprawy, a każdą wycenę przedstawiamy na piśmie przed rozpoczęciem pracy — nic nie robimy bez Twojej akceptacji.",
      en: "No. We only fix what actually needs fixing, and every quote is given in writing before any work starts — nothing happens without your approval first.",
    },
  },
  {
    question: { pl: "Jakie urządzenia naprawiacie?", en: "What kinds of devices do you repair?" },
    answer: {
      pl: "Laptopy, komputery stacjonarne, telefony oraz komputery gamingowe — od czyszczenia i wymiany podzespołów po naprawy na poziomie płyty głównej.",
      en: "Laptops, desktop computers, phones, and gaming PCs — from cleaning and part swaps to motherboard-level component repairs.",
    },
  },
];
