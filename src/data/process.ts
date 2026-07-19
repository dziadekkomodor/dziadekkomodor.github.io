// Diagnoza → Wycena → Naprawa → Testy → Gwarancja — the brief requires this exact process
// stated on the homepage and every service page. Single source, reused everywhere.

export type ProcessStep = {
  label: { pl: string; en: string };
  description: { pl: string; en: string };
};

export const processSteps: ProcessStep[] = [
  {
    label: { pl: "Diagnoza", en: "Diagnosis" },
    description: {
      pl: "Bezpłatnie sprawdzamy, co faktycznie jest nie tak.",
      en: "We check what's actually wrong, free of charge.",
    },
  },
  {
    label: { pl: "Wycena", en: "Quote" },
    description: {
      pl: "Pisemna wycena przed rozpoczęciem jakiejkolwiek pracy.",
      en: "A written quote before any work starts.",
    },
  },
  {
    label: { pl: "Naprawa", en: "Repair" },
    description: {
      pl: "Zaczynamy dopiero po Twojej akceptacji.",
      en: "We start only after you approve the quote.",
    },
  },
  {
    label: { pl: "Testy", en: "Testing" },
    description: {
      pl: "Sprawdzamy, czy wszystko działa tak, jak powinno.",
      en: "We verify everything works the way it should.",
    },
  },
  {
    label: { pl: "Gwarancja", en: "Warranty" },
    description: {
      pl: "5 miesięcy gwarancji na wykonaną naprawę.",
      en: "A 5-month warranty on the completed repair.",
    },
  },
];
