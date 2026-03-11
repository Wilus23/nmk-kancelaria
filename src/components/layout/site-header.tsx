"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

import {
  headerNavItems,
  offerMenuItems,
  primaryContactActions,
  socialActions,
} from "@/lib/header-data";
import type { ContactAction } from "@/types/header";

const figmaLogoIcon = "https://www.figma.com/api/mcp/asset/3c9ede8a-c577-4076-83d0-c1318f23f8b5";
const figmaChevronIcon = "https://www.figma.com/api/mcp/asset/fce2ea28-80cd-4c84-b6ad-a9d41259d478";
const figmaPhoneIcon = "https://www.figma.com/api/mcp/asset/370fbf6d-f391-427b-a3d6-61a4eb680d67";
const figmaLinkedInIcon = "https://www.figma.com/api/mcp/asset/cd1a168b-3698-4720-b41b-e95afa12bcdc";
const figmaFacebookIcon = "https://www.figma.com/api/mcp/asset/53d55b4d-fa36-4e76-8dea-6641fc32746c";
const figmaInstagramIcon = "https://www.figma.com/api/mcp/asset/9b547e46-ce95-4720-a837-9fb3866cf0ea";
const figmaOfferPlaceholderIcon = "https://www.figma.com/api/mcp/asset/a62ef9a3-8b5e-4bd7-adfd-cdd1d7374e7d";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className="header-chevron"
      src={figmaChevronIcon}
      width={16}
      height={16}
    />
  );
}

function PlaceholderLogo() {
  return (
    <a className="brand-mark" href="#kancelaria" aria-label="NMK Kancelaria">
      <span className="brand-mark__symbol" aria-hidden="true">
        <Image alt="" src={figmaLogoIcon} width={37} height={37} />
      </span>
      <span className="brand-mark__copy">
        <span className="brand-mark__name">NMK</span>
        <span className="brand-mark__tag">Kancelaria</span>
      </span>
    </a>
  );
}

function ContactIcon({ icon }: { icon: ContactAction["icon"] }) {
  if (icon === "phone") {
    return (
      <Image alt="" aria-hidden="true" className="icon" src={figmaPhoneIcon} width={18} height={18} />
    );
  }

  if (icon === "linkedin") {
    return (
      <Image
        alt=""
        aria-hidden="true"
        className="icon"
        src={figmaLinkedInIcon}
        width={18}
        height={18}
      />
    );
  }

  if (icon === "facebook") {
    return (
      <Image
        alt=""
        aria-hidden="true"
        className="icon"
        src={figmaFacebookIcon}
        width={18}
        height={18}
      />
    );
  }

  if (icon === "instagram") {
    return (
      <Image
        alt=""
        aria-hidden="true"
        className="icon"
        src={figmaInstagramIcon}
        width={18}
        height={18}
      />
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7.5 12 14l9-6.5" />
      <path d="M4.5 6h15A1.5 1.5 0 0 1 21 7.5v9A1.5 1.5 0 0 1 19.5 18h-15A1.5 1.5 0 0 1 3 16.5v-9A1.5 1.5 0 0 1 4.5 6Z" />
    </svg>
  );
}

function OfferDropdown({
  expanded,
  panelId,
}: {
  expanded: boolean;
  panelId: string;
}) {
  return (
    <div
      id={panelId}
      className="offer-dropdown"
      role="region"
      aria-label="Zakres oferty"
      hidden={!expanded}
    >
      <p className="offer-dropdown__eyebrow">Zakres wsparcia</p>
      <p className="offer-dropdown__lead">
        Prowadzimy sprawy prywatne i biznesowe z naciskiem na strategię,
        dyskrecję i precyzyjną komunikację.
      </p>
      <div className="offer-dropdown__list">
        {offerMenuItems.map((item) => (
          <a key={item.href} className="offer-link" href={item.href}>
            <span className="offer-link__head">
              <Image
                alt=""
                aria-hidden="true"
                className="offer-link__icon"
                src={figmaOfferPlaceholderIcon}
                width={23}
                height={23}
              />
              <span className="offer-link__label">{item.label}</span>
            </span>
            <span className="offer-link__summary">{item.summary}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function HeaderContactCluster() {
  const [emailAction, phoneAction] = primaryContactActions;

  return (
    <div className="header-contact-cluster">
      <a className="contact-email" href={emailAction.href}>
        {emailAction.label}
      </a>
      <a
        className="contact-phone"
        href={phoneAction.href}
        aria-label={`Zadzwoń: ${phoneAction.label}`}
      >
        <ContactIcon icon={phoneAction.icon} />
      </a>
      <nav className="header-socials" aria-label="Kanały społecznościowe">
        {socialActions.map((action) => (
          <a
            key={action.label}
            className="social-link"
            href={action.href}
            aria-label={action.label}
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon icon={action.icon} />
          </a>
        ))}
      </nav>
    </div>
  );
}

export function SiteHeader() {
  const panelId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopOfferOpen, setDesktopOfferOpen] = useState(false);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopOfferOpen(false);
        setMobileOfferOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";

    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  const toggleMobileMenu = () => {
    setMenuOpen((value) => {
      const nextValue = !value;

      if (!nextValue) {
        setMobileOfferOpen(false);
      }

      return nextValue;
    });
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileOfferOpen(false);
  };

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Przejdź do treści
      </a>
      <div className="site-header__bar">
        <PlaceholderLogo />

        <nav className="site-nav" aria-label="Nawigacja główna">
          {headerNavItems.map((item) => {
            if (item.kind === "offer") {
              return (
                <div
                  key={item.label}
                  className="site-nav__item site-nav__item--offer"
                  onMouseEnter={() => setDesktopOfferOpen(true)}
                  onMouseLeave={() => setDesktopOfferOpen(false)}
                  onFocus={() => setDesktopOfferOpen(true)}
                  onBlur={(event) => {
                    const nextTarget = event.relatedTarget as Node | null;

                    if (!event.currentTarget.contains(nextTarget)) {
                      setDesktopOfferOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    className="site-nav__link"
                    aria-expanded={desktopOfferOpen}
                    aria-controls={panelId}
                    onClick={() => setDesktopOfferOpen((value) => !value)}
                  >
                    <span>{item.label}</span>
                    <ChevronIcon />
                  </button>
                  <OfferDropdown expanded={desktopOfferOpen} panelId={panelId} />
                </div>
              );
            }

            return (
              <a
                key={item.label}
                className="site-nav__link"
                href={item.href}
                aria-current={item.label === "Kancelaria" ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <HeaderContactCluster />

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          onClick={toggleMobileMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className="mobile-drawer" data-open={menuOpen ? "true" : "false"}>
        <nav className="mobile-drawer__nav" aria-label="Nawigacja mobilna">
          {headerNavItems.map((item) => {
            if (item.kind === "offer") {
              return (
                <div key={item.label} className="mobile-drawer__group">
                  <button
                    type="button"
                    className="mobile-drawer__link mobile-drawer__link--button"
                    aria-expanded={mobileOfferOpen}
                    aria-controls={`${panelId}-mobile`}
                    onClick={() => setMobileOfferOpen((value) => !value)}
                  >
                    <span>{item.label}</span>
                    <ChevronIcon />
                  </button>
                  <div
                    id={`${panelId}-mobile`}
                    className="mobile-offer-list"
                    hidden={!mobileOfferOpen}
                  >
                    {offerMenuItems.map((offerItem) => (
                      <a
                        key={offerItem.href}
                        className="mobile-offer-list__link"
                        href={offerItem.href}
                        onClick={closeMobileMenu}
                      >
                        <span className="mobile-offer-list__head">
                          <Image
                            alt=""
                            aria-hidden="true"
                            className="offer-link__icon"
                            src={figmaOfferPlaceholderIcon}
                            width={23}
                            height={23}
                          />
                          <span>{offerItem.label}</span>
                        </span>
                        <small>{offerItem.summary}</small>
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.label}
                className="mobile-drawer__link"
                href={item.href}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mobile-drawer__contact">
          {primaryContactActions.map((action) => (
            <a
              key={action.label}
              className={action.kind === "phone" ? "mobile-cta" : "mobile-email"}
              href={action.href}
              onClick={closeMobileMenu}
            >
              <ContactIcon icon={action.icon} />
              <span>{action.label}</span>
            </a>
          ))}
        </div>

        <div className="mobile-drawer__socials">
          {socialActions.map((action) => (
            <a
              key={action.label}
              className="social-link"
              href={action.href}
              aria-label={action.label}
              target="_blank"
              rel="noreferrer"
            >
              <ContactIcon icon={action.icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
