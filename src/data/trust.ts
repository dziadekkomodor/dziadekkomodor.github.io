// The three objections from the brief's Polish market research (~77% of Poles distrust
// online-advertised technicians). Reused identically on the homepage and every service page —
// single source so the framing never drifts between pages.

export type TrustPoint = {
  fear: { pl: string; en: string };
  answer: { pl: string; en: string };
};

export const trustPoints: TrustPoint[] = [
  {
    fear: {
      pl: "Czy nie zostanę przeładowany za naprawy, których nie potrzebuję?",
      en: "Will I get overcharged for repairs I don't actually need?",
    },
    answer: {
      pl: "Bezpłatna wstępna diagnoza, pisemna wycena przed rozpoczęciem pracy. Naprawiamy tylko to, co faktycznie wymaga naprawy.",
      en: "Free initial diagnosis, a written quote before any work starts. We only fix what actually needs fixing.",
    },
  },
  {
    fear: {
      pl: "Czy mogę zaufać małej, lokalnej firmie tak samo jak dużemu serwisowi?",
      en: "Can I trust a small local operation as much as a big chain?",
    },
    answer: {
      pl: "Prawdziwe zdjęcia nas i naszego warsztatu — żadnych zdjęć stockowych ani generowanych przez AI. Autentyczne opinie z Google, jasno opisana gwarancja.",
      en: "Real photos of us and our actual workshop — no stock photos, no AI-generated imagery. Genuine Google reviews, warranty terms stated plainly.",
    },
  },
  {
    fear: {
      pl: "Ile to będzie trwało i jak w ogóle wygląda cały proces?",
      en: "How long will it take, and what does the whole process actually look like?",
    },
    answer: {
      pl: "Jasny proces krok po kroku: Diagnoza → Wycena → Naprawa → Testy → Gwarancja. Typowe naprawy: 24–72h.",
      en: "A clear step-by-step process: Diagnosis → Quote → Repair → Testing → Warranty. Typical repairs: 24–72h.",
    },
  },
];
