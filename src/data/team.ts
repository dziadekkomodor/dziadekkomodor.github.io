import albertPhoto from '../assets/photos/albert.jpg';
import mikolajPhoto from '../assets/photos/mikolaj.jpg';

export const team = [
  {
    slug: "albert",
    name: "Albert Cynarzewski",
    photo: albertPhoto,
    role: {
      pl: "Współzałożyciel — specjalista od oprogramowania i diagnostyki",
      en: "Co-founder — software & diagnostics specialist",
    },
    bio: {
      pl: "Programuje od 13. roku życia — zaczynał od tworzenia gier mobilnych, dziś to jego warsztat pracy przekłada się na naprawy: rozumie sprzęt od strony systemu, nie tylko śrubek. Odpowiada za instalacje i naprawy systemów operacyjnych, odzyskiwanie danych, naprawy BIOS-u/firmware'u oraz diagnostykę — w tym własne narzędzia diagnostyczne pisane specjalnie pod typowe usterki, z którymi przychodzą klienci. Do szybszej diagnostyki i researchu wykorzystuje też narzędzia AI.",
      en: "Coding since age 13 — started out building mobile games, and that same systems-level thinking now shapes how he approaches repairs: he understands hardware from the software side, not just the screwdriver side. Handles OS installs and repairs, data recovery, BIOS/firmware fixes, and diagnostics — including custom diagnostic tooling written specifically for the faults customers bring in most. Also uses AI tools to speed up diagnostics and research.",
    },
    yearsExperience: 4,
  },
  {
    slug: "mikolaj",
    name: "Mikołaj Knioła",
    photo: mikolajPhoto,
    role: {
      pl: "Współzałożyciel — specjalista od sprzętu i napraw komponentowych",
      en: "Co-founder — hardware & component-level repair specialist",
    },
    bio: {
      pl: "Strateg z natury i praktyk w warsztacie — sprawnie posługuje się pełnym zestawem narzędzi serwisowych i elektronarzędzi. Specjalizuje się w naprawach na poziomie komponentów: płyty główne, układy zasilania, lutowanie BGA, demontaż i ponowny montaż laptopów. Poza elektroniką naprawia też sprzęt mechaniczny, w tym rowery — to samo podejście \"rozłóż na części, znajdź usterkę, złóż z powrotem\" stosuje wszędzie. Trochę programuje i, podobnie jak Albert, korzysta z AI, żeby szybciej dochodzić do sedna problemu.",
      en: "A natural strategist and a hands-on workshop practitioner — comfortable with the full range of repair tools and power tools. Specializes in component-level repairs: motherboards, power circuits, BGA soldering, full laptop teardown and reassembly. Beyond electronics, he also repairs mechanical equipment, including bikes — the same \"take it apart, find the fault, put it back together\" mindset applies everywhere. Codes a little, and like Albert, uses AI tools to get to the root of a problem faster.",
    },
    yearsExperience: 3,
  },
] as const;
