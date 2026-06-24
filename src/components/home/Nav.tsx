"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  className?: string;
}

const NAV_LINKS: NavLink[] = [
  { href: "#profiles", label: "Members" },
  { href: "#mmm", label: "#MMM" },
  { href: "#pods", label: "Pods" },
  { href: "#meetups", label: "Meetups" },
  { href: "#september", label: "Sept. Weekend ✦", className: "nav-link-gold" },
  { href: "#market", label: "Market" },
  { href: "#tiers", label: "Membership" },
  { href: "#join", label: "Join the Community", className: "nav-cta" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
        <Link href="#home" className="nav-wordmark" onClick={closeMenu}>
          <span className="nav-iv">IV</span>
          <span className="nav-soar">
            SOAR<span>ers</span>
          </span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={link.className}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-bg">IV</div>
        <button
          type="button"
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              className="mobile-menu-item"
              style={{ transitionDelay: menuOpen ? `${i * 50 + 80}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                className={link.className === "nav-cta" ? "mobile-menu-cta" : link.className}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mobile-menu-tagline">
          A global community assembled to soar.
        </p>
      </div>
    </>
  );
}
