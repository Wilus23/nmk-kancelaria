import type { ContactAction, HeaderNavItem, OfferMenuItem } from "@/types/header";

export const headerNavItems: HeaderNavItem[] = [
  { label: "Kancelaria", href: "#kancelaria", kind: "link" },
  { label: "Oferta", href: "#oferta", kind: "offer" },
  { label: "Aktualności", href: "#aktualnosci", kind: "link" },
  { label: "Kontakt", href: "#kontakt", kind: "link" },
];

export const offerMenuItems: OfferMenuItem[] = [
  {
    label: "Prawo Rodzinne",
    href: "#prawo-rodzinne",
    summary: "Sprawy rozwodowe, opieka i alimenty prowadzone z dyskrecją.",
  },
  {
    label: "Prawo Karne",
    href: "#prawo-karne",
    summary: "Reprezentacja od pierwszego kontaktu z organami ścigania.",
  },
  {
    label: "Prawo Spadkowe",
    href: "#prawo-spadkowe",
    summary: "Dziedziczenie, zachowek i bezpieczne uporządkowanie majątku.",
  },
  {
    label: "Obsługa Biznesu",
    href: "#obsluga-biznesu",
    summary: "Stałe wsparcie prawne dla spółek, zarządów i wspólników.",
  },
  {
    label: "Prawo Nieruchomości",
    href: "#prawo-nieruchomosci",
    summary: "Transakcje, due diligence i spory dotyczące nieruchomości.",
  },
  {
    label: "Mediacje & Negocjacje",
    href: "#mediacje",
    summary: "Strategia ugodowa tam, gdzie liczy się czas i relacja.",
  },
];

export const primaryContactActions: ContactAction[] = [
  {
    kind: "email",
    label: "biuro@kancelaria.pl",
    href: "mailto:biuro@kancelaria.pl",
    icon: "mail",
  },
  {
    kind: "phone",
    label: "+48 500 600 700",
    href: "tel:+48500600700",
    icon: "phone",
  },
];

export const socialActions: ContactAction[] = [
  {
    kind: "social",
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    kind: "social",
    label: "Facebook",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    kind: "social",
    label: "Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
];
