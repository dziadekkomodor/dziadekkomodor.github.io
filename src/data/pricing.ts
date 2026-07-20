import { site } from './site';

export type PriceRow = {
  name: { pl: string; en: string };
  price: { pl: string; en: string };
  note?: { pl: string; en: string };
};

export type PriceCategory = {
  id: string;
  title: { pl: string; en: string };
  rows: PriceRow[];
};

export const pricingCategories: PriceCategory[] = [
  {
    id: "diagnostyka",
    title: { pl: "Diagnostyka", en: "Diagnostics" },
    rows: [
      {
        name: { pl: "Diagnoza wstępna", en: "Initial diagnosis" },
        price: { pl: "0 zł", en: "0 zł (free)" },
      },
      {
        name: { pl: "Diagnoza szczegółowa", en: "Detailed diagnosis" },
        price: { pl: `${site.diagnosisDetailedFee} zł`, en: `${site.diagnosisDetailedFee} zł` },
        note: {
          pl: "Kwota odliczana od ceny naprawy, jeśli zdecydujesz się na jej wykonanie.",
          en: "Waived — deducted from the repair cost if you go ahead with the repair.",
        },
      },
    ],
  },
  {
    id: "laptopy-komputery",
    title: { pl: "Laptopy i komputery", en: "Laptops and desktops" },
    rows: [
      {
        name: { pl: "Czyszczenie + wymiana pasty termoprzewodzącej", en: "Cleaning + thermal paste replacement" },
        price: { pl: "65–150 zł", en: "65–150 zł" },
        note: { pl: "Laptopy gamingowe: od ok. 250 zł.", en: "Gaming laptops: from approx. 250 zł." },
      },
      {
        name: { pl: "Czyszczenie po zalaniu", en: "Liquid-damage cleaning" },
        price: { pl: "od ok. 150–280 zł", en: "from approx. 150–280 zł" },
      },
      {
        name: { pl: "Instalacja systemu operacyjnego", en: "OS installation" },
        price: { pl: "100–180 zł", en: "100–180 zł" },
      },
      {
        name: { pl: "Wymiana dysku HDD/SSD (robocizna)", en: "HDD/SSD swap (labor only)" },
        price: { pl: "50–70 zł + część", en: "50–70 zł + part" },
      },
      {
        name: { pl: "Wymiana matrycy 15.6\"", en: "15.6\" screen/matrix replacement" },
        price: { pl: "od ok. 370 zł", en: "from approx. 370 zł" },
      },
      {
        name: { pl: "Naprawa zawiasów / obudowy", en: "Hinge / case repair" },
        price: { pl: "od ok. 50 zł + części", en: "from approx. 50 zł + parts" },
      },
    ],
  },
  {
    id: "naprawy-zaawansowane",
    title: { pl: "Naprawy zaawansowane (płyta główna)", en: "Advanced repairs (motherboard)" },
    rows: [
      {
        name: { pl: "Naprawa układu zasilania płyty głównej", en: "Motherboard power-circuit repair" },
        price: { pl: "ok. 230–350 zł", en: "approx. 230–350 zł" },
      },
      {
        name: { pl: "Lutowanie BGA", en: "BGA rework" },
        price: { pl: "200–450 zł", en: "200–450 zł" },
      },
      {
        name: { pl: "Naprawa BIOS", en: "BIOS repair" },
        price: { pl: "150–280 zł", en: "150–280 zł" },
      },
    ],
  },
  {
    id: "odzyskiwanie-danych",
    title: { pl: "Odzyskiwanie danych", en: "Data recovery" },
    rows: [
      {
        name: { pl: "Odzyskiwanie podstawowe / logiczne", en: "Basic / logical recovery" },
        price: { pl: "od ok. 100 zł", en: "from approx. 100 zł" },
      },
      {
        name: { pl: "Odzyskiwanie głębokie / mechaniczne / RAID", en: "Deep / mechanical / RAID recovery" },
        price: { pl: "300–4 500 zł", en: "300–4,500 zł" },
        note: {
          pl: "Zlecane zewnętrznemu laboratorium — na miejscu nie mamy jeszcze własnego laboratorium danych.",
          en: "Outsourced to an external lab — we don't yet run our own in-house data recovery lab.",
        },
      },
    ],
  },
  {
    id: "telefony",
    title: { pl: "Telefony", en: "Phones" },
    rows: [
      {
        name: { pl: "Wymiana szybki", en: "Glass replacement" },
        price: { pl: "ok. 586 zł", en: "approx. 586 zł" },
      },
      {
        name: { pl: "Wymiana wyświetlacza", en: "Full display replacement" },
        price: { pl: "ok. 679 zł", en: "approx. 679 zł" },
        note: { pl: "iPhone: do ok. 1 610 zł.", en: "iPhone: up to approx. 1,610 zł." },
      },
      {
        name: { pl: "Wymiana baterii", en: "Battery replacement" },
        price: { pl: "ok. 415 zł", en: "approx. 415 zł" },
      },
    ],
  },
];

export const pricingDisclaimer = {
  pl: "Ceny orientacyjne — mogą się różnić w zależności od modelu urządzenia i zakresu usterki. Ostateczna wycena zawsze po bezpłatnej diagnozie, a naprawa wykonywana jest wyłącznie po Twojej akceptacji.",
  en: "Indicative prices — the final cost depends on the device model and the extent of the fault. You always get a firm quote after a free diagnosis, and we never start a repair without your approval.",
};
