export type HeaderNavItem =
  | {
      label: string;
      href: string;
      kind: "link";
    }
  | {
      label: string;
      href: string;
      kind: "offer";
    };

export type OfferMenuItem = {
  label: string;
  href: string;
  summary?: string;
};

export type ContactAction = {
  kind: "email" | "phone" | "social";
  label: string;
  href: string;
  icon: "mail" | "phone" | "linkedin" | "facebook" | "instagram";
};
