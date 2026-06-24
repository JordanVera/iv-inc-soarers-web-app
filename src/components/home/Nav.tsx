"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="main-nav" className={scrolled ? "scrolled" : ""}>
      <Link href="#home" className="nav-wordmark">
        <span className="nav-iv">IV</span>
        <span className="nav-soar">
          SOAR<span>ers</span>
        </span>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="#profiles">Members</Link>
        </li>
        <li>
          <Link href="#mmm">#MMM</Link>
        </li>
        <li>
          <Link href="#pods">Pods</Link>
        </li>
        <li>
          <Link href="#meetups">Meetups</Link>
        </li>
        <li>
          <Link href="#september" className="nav-link-gold">
            Sept. Weekend ✦
          </Link>
        </li>
        <li>
          <Link href="#market">Market</Link>
        </li>
        <li>
          <Link href="#tiers">Membership</Link>
        </li>
        <li>
          <Link href="#join" className="nav-cta">
            Join the Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
