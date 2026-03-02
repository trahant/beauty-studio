"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const BOOK_URL = "/contact";

const SERVICES = [
  {
    label: "Facials",
    href: "/facials",
    items: [
      { label: "Skincare Treatments", href: "/facials/skincare-treatments" },
      { label: "Signature Facials", href: "/facials/signature-facials" },
      { label: "Hydrating Treatments", href: "/facials/hydrating-treatments" },
      { label: "Anti-Aging Solutions", href: "/facials/anti-aging-solutions" },
    ],
  },
  {
    label: "Threading",
    href: "/threading",
    items: [
      { label: "Eyebrow Threading", href: "/threading/eyebrow-threading" },
      { label: "Facial Threading", href: "/threading/facial-threading" },
    ],
  },
  {
    label: "Waxing",
    href: "/waxing",
    items: [
      { label: "Chocolate Waxing", href: "/waxing/chocolate-waxing" },
      { label: "Body Waxing", href: "/waxing/body-waxing" },
    ],
  },
  {
    label: "Henna",
    href: "/henna",
    items: [
      { label: "Henna Tattoos", href: "/henna/henna-tattoos" },
      { label: "Custom Designs", href: "/henna/custom-designs" },
      { label: "Special Occasion", href: "/henna/special-occasion" },
      { label: "Bridal Packages", href: "/henna/bridal-packages" },
    ],
  },
  {
    label: "Lashes",
    href: "/lashes",
    items: [
      { label: "Lash Tint", href: "/lashes/lash-tint" },
      { label: "Lash Lift", href: "/lashes/lash-lift" },
      { label: "Full Set Extensions", href: "/lashes/full-set-lash-extensions" },
      { label: "2D Volume Lashes", href: "/lashes/2d-volume-lashes" },
      { label: "Extension Removal", href: "/lashes/lash-extension-removal" },
    ],
  },
  {
    label: "Gentleman Services",
    href: "/gentleman-services",
    items: [
      { label: "Men's Haircuts", href: "/gentleman-services/haircut" },
      { label: "Men's Facials", href: "/gentleman-services/mens-facial" },
    ],
  },
];

export function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileOpen]);

  // Expand Services by default when opening mobile menu so links are visible
  useEffect(() => {
    if (mobileOpen) setMobileExpanded("services");
    else setMobileExpanded(null);
  }, [mobileOpen]);

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <Image
            src="/logo-dark.png"
            alt="Beauty Secrets Studio"
            width={32}
            height={32}
            className="nav-logo-img"
          />
          Beauty Secrets Studio
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop">
          <div
            className="nav-services-trigger"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-link-btn"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
            </button>
            <div
              className={`nav-services-mega ${servicesOpen ? "open" : ""}`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="nav-services-grid">
                {SERVICES.map((category) => (
                  <div key={category.label} className="nav-services-col">
                    <Link
                      href={category.href}
                      className="nav-services-category"
                      onClick={() => setServicesOpen(false)}
                    >
                      {category.label}
                    </Link>
                    <ul className="nav-services-sublist">
                      {category.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="nav-link"
            onClick={() => setServicesOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="nav-link"
            onClick={() => setServicesOpen(false)}
          >
            FAQ
          </Link>
          <a href={BOOK_URL} className="nav-cta">
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="nav-hamburger" />
          <span className="nav-hamburger" />
          <span className="nav-hamburger" />
        </button>
      </nav>

      {/* Mobile nav panel - outside nav so it's not a flex child */}
      <div className={`nav-mobile ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="nav-mobile-inner">
          <button
            type="button"
            className="nav-mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span aria-hidden>×</span>
          </button>
          <div className="nav-mobile-section">
            <button
              type="button"
              className="nav-mobile-accordion"
              onClick={() =>
                setMobileExpanded(mobileExpanded === "services" ? null : "services")
              }
              aria-expanded={mobileExpanded === "services"}
            >
              Services
            </button>
            <div
              className={`nav-mobile-accordion-content ${mobileExpanded === "services" ? "open" : ""}`}
            >
              {SERVICES.map((category) => (
                <div key={category.label} className="nav-mobile-category">
                  <Link
                    href={category.href}
                    className="nav-mobile-category-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {category.label}
                  </Link>
                  <ul className="nav-mobile-sublist">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="nav-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="nav-mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            FAQ
          </Link>
          <a
            href={BOOK_URL}
            className="nav-mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Overlay when mobile menu open */}
      <div
        className={`nav-mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setMobileOpen(false);
          }
        }}
        role="button"
        tabIndex={mobileOpen ? 0 : -1}
        aria-label="Close menu"
      />
    </>
  );
}
