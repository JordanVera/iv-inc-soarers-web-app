"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import type { ModalType } from "@/lib/modal-data";
import { Modal } from "./Modal";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";

const MAP_PINS = [
  "Houston",
  "Los Angeles",
  "Atlanta",
  "New York",
  "Chicago",
  "Puerto Rico ✦",
];

const MEMBERS = [
  {
    featured: true,
    avatar: "IVY",
    name: "Ivy McGregor",
    role: "Founder & Curator",
    location: "Houston, TX · USA",
    tenure: "Curating this community for 7 years with love.",
  },
  {
    avatar: "A",
    name: "Aaliyah R.",
    role: "Brand Strategist",
    location: "Atlanta, GA",
    tenure: "Member · 4 years",
  },
  {
    avatar: "M",
    name: "Marcus J.",
    role: "Tech Founder",
    location: "Lagos, Nigeria",
    tenure: "Member · 2 years",
  },
  {
    avatar: "S",
    name: "Simone K.",
    role: "Executive Coach",
    location: "London, UK",
    tenure: "Member · 6 years",
  },
  {
    avatar: "D",
    name: "DeShawn P.",
    role: "Real Estate Inv.",
    location: "Chicago, IL",
    tenure: "Member · 3 years",
  },
];

const PODS = [
  { icon: "∞", name: "Entrepreneurs Pod" },
  { icon: "◈", name: "Seniors Pod" },
  { icon: "◉", name: "Men's Pod" },
  { icon: "◇", name: "College Students Pod" },
  { icon: "✦", name: "Single Moms Pod" },
  { icon: "❋", name: "Social Impact Pod" },
];

const SPEAKERS = [
  { initial: "O", name: "Oprah Winfrey", title: "Media Icon · Mentor" },
  { initial: "T", name: "Tyler Perry", title: "Filmmaker · Entrepreneur" },
  {
    initial: "B",
    name: "Bishop T.D. Jakes",
    title: "Pastor · Author · Speaker",
  },
  {
    initial: "♪",
    name: "Special Musical Performance",
    title: "Featured Vocalist",
  },
];

const STORIES = [
  {
    num: "I",
    title: "How Monday Mentoring Moments Changed My Career Trajectory",
    author: "Contributed by a SOAREr, Atlanta",
  },
  {
    num: "II",
    title: "The Pod That Became My Board of Directors",
    author: "Contributed by a SOAREr, New York",
  },
  {
    num: "III",
    title: "From Facebook Group to Global Family",
    author: "Contributed by a SOAREr, London",
  },
  {
    num: "IV",
    title: "Puerto Rico and the Gift of Belonging",
    author: "Contributed by a SOAREr, Houston",
  },
];

export function HomePage() {
  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [activePin, setActivePin] = useState("Houston");

  const openModal = useCallback((type: ModalType) => {
    setModalType(type);
  }, []);

  const closeModal = useCallback(() => {
    setModalType(null);
  }, []);

  return (
    <>
      <Nav />
      <Modal type={modalType} onClose={closeModal} />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg-text">IV</div>
        <div className="hero-content">
          <p className="hero-eyebrow">Est. 2019</p>
          <p className="hero-eyebrow hero-eyebrow-tight">7 Years Strong</p>
          <div className="hero-wordmark">
            <div className="hero-roman">
              <em>IV</em>
            </div>
            <div className="hero-soar-row">
              <span className="hero-soar-caps">SOAR</span>
              <span className="hero-soar-lower">ers</span>
            </div>
          </div>
          <div className="hero-divider" />
          <p className="hero-tagline">
            A global community of leaders, entrepreneurs,
            <br />
            and visionaries — assembled to soar.
          </p>
          <p className="hero-meta">
            16,000+ Members &nbsp;·&nbsp; 100+ Countries &nbsp;·&nbsp; One
            Purpose
          </p>
          <div className="hero-actions">
            <Link href="#profiles" className="btn-primary">
              Explore the Community
            </Link>
            <Link href="#september" className="btn-ghost btn-ghost-gold">
              Sept. Weekend ✦
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat-cell">
            <span className="stat-number">16K+</span>
            <span className="stat-label">Global Members</span>
          </div>
          <div className="stat-cell">
            <span className="stat-number">100+</span>
            <span className="stat-label">Countries</span>
          </div>
          <div className="stat-cell">
            <span className="stat-number">VII</span>
            <span className="stat-label">Years of Impact</span>
          </div>
          <div className="stat-cell">
            <span className="stat-number">6</span>
            <span className="stat-label">Small Group Impact Pods</span>
          </div>
        </div>
      </div>

      {/* MEMBER PROFILES */}
      <Reveal className="profiles-section" id="profiles">
        <div className="section-inner">
          <div className="profiles-layout">
            <div>
              <p className="section-eyebrow">01 — Member Profiles</p>
              <h2 className="section-heading">
                Know who
                <br />
                you&apos;re <em>flying</em>
                <br />
                alongside.
              </h2>
              <p className="section-body">
                Every SOAREr brings a story, a city, and a calling. Browse the
                full directory — search by industry, location, or how long
                they&apos;ve been part of the journey.
              </p>
              <div className="profiles-actions">
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => openModal("profile")}
                >
                  Create Your Profile
                </button>
                <button type="button" className="btn-ghost">
                  Browse Directory
                </button>
              </div>
            </div>
            <div className="profiles-cards">
              {MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className={`member-card${member.featured ? " featured" : ""}`}
                >
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                  <div className="member-location">{member.location}</div>
                  <div className="member-tenure">{member.tenure}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* MMM */}
      <Reveal className="mmm-section" id="mmm">
        <div className="section-inner">
          <div className="mmm-theme-banner">
            <span className="mmm-theme-label">2026 Annual Theme</span>
            <span className="mmm-theme-divider" />
            <span className="mmm-theme-title">On Assignment</span>
            <span className="mmm-theme-sub">
              — Each of us is here on purpose, for a purpose.
            </span>
          </div>
          <p className="section-eyebrow">02 — Monday Mentoring Moments</p>
          <h2 className="section-heading">
            One hour.
            <br />
            <em>Infinite</em> impact.
          </h2>
          <div className="mmm-layout tier-gate" style={{ minHeight: 480 }}>
            <div className="mmm-gate-blurred">
              <div className="mmm-featured">
                <div className="mmm-tag"># MMM · Monthly</div>
                <h3 className="mmm-title">
                  On Assignment: Discovering the Work Only You Were Sent to Do
                </h3>
                <p className="mmm-desc">
                  A live teaching session with open Q&amp;A, special guest
                  speakers, and the kind of conversation that shifts your
                  trajectory.
                </p>
                <div className="mmm-meta-row">
                  <div className="mmm-meta-item">
                    <strong>Monday, June 29, 2026</strong>
                    Live · 7PM EST
                  </div>
                  <div className="mmm-meta-item">
                    <strong>1 Hour</strong>
                    Teaching + Q&amp;A
                  </div>
                  <div className="mmm-meta-item">
                    <strong>Free</strong>
                    All Members
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="tier-gate-overlay silver"
              onClick={() => openModal("tier_launch")}
            >
              <div className="gate-lock">◈</div>
              <div className="gate-tier-badge">Launch Membership — Tier I</div>
              <h3 className="gate-heading">
                Monday Mentoring Moments
                <br />
                awaits you.
              </h3>
              <p className="gate-desc">
                Unlock monthly live teaching sessions with Ivy McGregor and
                featured guests who have included Oprah Winfrey, Tyler Perry,
                Bishop T.D. Jakes, and more. One hour of impact, every month.
              </p>
              <span className="gate-btn">Unlock Launch Access</span>
              <div className="gate-features gate-features-spaced">
                <span className="gate-feature">Live Monthly Sessions</span>
                <span className="gate-feature">Full Episode Archive</span>
                <span className="gate-feature">Live Q&amp;A Access</span>
                <span className="gate-feature">Guest Speaker Events</span>
              </div>
            </button>
          </div>
        </div>
      </Reveal>

      {/* PODS */}
      <Reveal className="pods-section" id="pods">
        <div className="section-inner">
          <p className="section-eyebrow">03 — Pods · The Hubs</p>
          <h2 className="section-heading">
            Find your
            <br />
            people within
            <br />
            the <em>people.</em>
          </h2>
          <p className="section-body section-body-wide">
            Small groups for deep dives. Each pod convenes once per quarter for
            intimate, focused conversation — plus exclusive strategies, tools,
            and resource access.
          </p>
          <div className="tier-gate" style={{ minHeight: 420, marginTop: 64 }}>
            <div className="pods-grid-blurred">
              {PODS.map((pod) => (
                <div key={pod.name} className="pod-card">
                  <span className="pod-icon">{pod.icon}</span>
                  <div className="pod-name">{pod.name}</div>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="tier-gate-overlay gold"
              onClick={() => openModal("tier_ascend")}
            >
              <div className="gate-lock">✦</div>
              <div className="gate-tier-badge">Ascend Membership — Tier II</div>
              <h3 className="gate-heading">
                Six Impact Pods.
                <br />
                Unlimited depth.
              </h3>
              <p className="gate-desc">
                Join the Hub that speaks to your season — Entrepreneurs,
                Men&apos;s, Single Moms, College Students, Seniors, or Social
                Impact. Quarterly deep dives plus exclusive access to
                strategies, tools, and curated resources.
              </p>
              <span className="gate-btn">Unlock Ascend Access</span>
              <div className="gate-features gate-features-spaced">
                <span className="gate-feature">All 6 Pods</span>
                <span className="gate-feature">Strategies &amp; Tools</span>
                <span className="gate-feature">Resource Library</span>
                <span className="gate-feature">Quarterly Convenings</span>
              </div>
            </button>
          </div>
        </div>
      </Reveal>

      {/* MEETUPS */}
      <Reveal className="meetups-section" id="meetups">
        <div className="section-inner">
          <p className="section-eyebrow">04 — Meetups</p>
          <h2 className="section-heading">
            The world is
            <br />
            our <em>venue.</em>
          </h2>
          <p className="section-body">
            From Atlanta to Puerto Rico, SOARErs have gathered in cities across
            the country and beyond. We don&apos;t just connect — we show up in
            the world together.
          </p>
          <div className="meetups-layout">
            <div className="meetups-map-placeholder">
              <div className="map-bg-text">SOAR</div>
              <div className="map-pins">
                {MAP_PINS.map((pin) => (
                  <button
                    key={pin}
                    type="button"
                    className={`map-pin${activePin === pin ? " active" : ""}`}
                    onClick={() => setActivePin(pin)}
                  >
                    {pin}
                  </button>
                ))}
              </div>
            </div>
            <div className="meetups-cards">
              <div className="meetup-card">
                <div className="meetup-city">Houston</div>
                <div className="meetup-country">Texas, USA</div>
                <div className="meetup-year">2024</div>
                <div className="meetup-special">Home Base</div>
              </div>
              <div className="meetup-card">
                <div className="meetup-city">New York</div>
                <div className="meetup-country">New York, USA</div>
                <div className="meetup-year">2023 · 2022</div>
                <div className="meetup-special">Twice and counting</div>
              </div>
              <div className="meetup-card">
                <div className="meetup-city">Atlanta</div>
                <div className="meetup-country">Georgia, USA</div>
                <div className="meetup-year">2023</div>
              </div>
              <div className="meetup-card">
                <div className="meetup-city">Los Angeles</div>
                <div className="meetup-country">California, USA</div>
                <div className="meetup-year">2022</div>
              </div>
              <div className="meetup-card meetup-card-featured">
                <div className="meetup-city meetup-city-white">Puerto Rico</div>
                <div className="meetup-country">5th Year Anniversary</div>
                <div className="meetup-year meetup-year-muted">2023</div>
                <div className="meetup-special">
                  First International Meetup ✦
                </div>
              </div>
            </div>
          </div>
          <div className="meetups-cta-bar">
            <div>
              <div className="meetups-cta-label">
                ⬇ Scroll for the Main Event
              </div>
              <div className="meetups-cta-heading">
                The September Birthday Weekend is coming.
                <br />
                <em>250 seats. Reserve yours now.</em>
              </div>
            </div>
            <Link
              href="#september"
              className="btn-primary btn-primary-gold btn-nowrap"
            >
              See the Weekend →
            </Link>
          </div>
        </div>
      </Reveal>

      {/* SEPTEMBER BIRTHDAY WEEKEND */}
      <Reveal className="sept-hero" id="september">
        <div className="sept-bg-number">7</div>
        <div className="sept-hero-inner">
          <div className="sept-gold-bar" />
          <p className="sept-eyebrow">
            IV SOARErs · 7th Year Celebration · Houston, Texas
          </p>
          <h2 className="sept-headline">
            Something
            <br />
            <em>extraordinary</em>
            <br />
            is coming.
          </h2>
          <p className="sept-dates">
            September 4 – 6, 2026 &nbsp;·&nbsp; <span>Houston, TX</span>{" "}
            &nbsp;·&nbsp; An Intimate Weekend for SOARErs
          </p>

          <div className="sept-scarcity">
            <div className="sept-pulse" />
            <div className="sept-seats-num">250</div>
            <div className="sept-seats-divider" />
            <div className="sept-seats-label">
              Seats
              <br />
              Available
            </div>
            <div className="sept-seats-divider" />
            <div className="sept-scarcity-note">
              This is an intimate, curated weekend.
              <br />
              Space is strictly limited.
            </div>
          </div>

          <p className="sept-intro">
            Seven years ago, a Facebook group became a movement. This September,
            we gather in person to mark that milestone — with live music, a
            surprise guest of extraordinary caliber, and a Sunday service that
            will stay with you for years.
          </p>
          <p className="sept-reserve-note">
            Reserve your space now. Full details will follow.
          </p>

          <div className="sept-nights">
            <div className="sept-night">
              <div className="sept-night-bg">FRI</div>
              <div className="sept-night-day">Friday Night</div>
              <div className="sept-night-date">September 4, 2026</div>
              <div className="sept-night-name">The Sessions</div>
              <div className="sept-night-subtitle">A live music evening</div>
              <div className="sept-night-desc">
                An intimate evening of live music, soulful conversation, and the
                kind of energy that only happens when people who were meant to
                find each other finally do.
              </div>
              <div>
                <span className="sept-night-price">$50</span>
                <span className="sept-night-price-label">per person</span>
              </div>
            </div>

            <div className="sept-night featured-night">
              <div className="sept-night-bg">SAT</div>
              <div className="sept-night-day">Saturday Brunch</div>
              <div className="sept-night-date">September 5, 2026</div>
              <div className="sept-night-name">The Brunch</div>
              <div className="sept-night-subtitle">
                An afternoon of inspiration
              </div>
              <div className="sept-night-desc">
                A curated brunch experience featuring a surprise guest of
                extraordinary influence and impact. The caliber of this
                gathering will speak for itself. We&apos;ll just say —
                you&apos;ll want to be in the room.
              </div>
              <div>
                <span className="sept-night-price">$150</span>
                <span className="sept-night-price-label">per person</span>
              </div>
              <div className="sept-mystery">Surprise Guest to Be Announced</div>
            </div>

            <div className="sept-night">
              <div className="sept-night-bg">SUN</div>
              <div className="sept-night-day">Sunday Service</div>
              <div className="sept-night-date">September 6, 2026</div>
              <div className="sept-night-name">Fellowship</div>
              <div className="sept-night-subtitle">
                Lighthouse Church &amp; Ministries
              </div>
              <div className="sept-night-desc">
                We close the weekend together in worship and fellowship at
                Lighthouse Church and Ministries — grounded, grateful, and ready
                for what comes next.
              </div>
              <div>
                <span className="sept-night-price sept-night-price-sm">
                  Complimentary
                </span>
              </div>
            </div>
          </div>

          <div className="sept-package">
            <div className="sept-package-left">
              <div className="sept-pkg-eyebrow">
                Weekend Package · All Three Nights
              </div>
              <div className="sept-pkg-heading">
                The Full
                <br />
                Experience.
              </div>
              <div className="sept-pkg-price">$200</div>
              <div className="sept-pkg-price-sub">
                Per Person · Full Weekend
              </div>
              <div className="sept-pkg-breakdown">
                Includes Friday night ($50) + Saturday brunch ($150) + Sunday
                fellowship (complimentary)
              </div>
            </div>
            <div className="sept-package-right">
              <ul className="sept-pkg-includes">
                <li>Friday Night: The Sessions — Live Music Experience</li>
                <li>
                  Saturday: The Brunch — with a Surprise Guest of extraordinary
                  influence
                </li>
                <li>
                  Sunday: Fellowship at Lighthouse Church &amp; Ministries with
                  Ivy
                </li>
                <li>Access to the IV SOARErs 7th Year Celebration community</li>
                <li>
                  First access to event details, venue, and weekend schedule
                </li>
              </ul>
              <button
                type="button"
                className="sept-reserve-btn"
                onClick={() => openModal("september")}
              >
                Reserve My Space — $200
              </button>
              <div className="sept-fine-print">
                A $50 deposit holds your space today. Full payment due August 1,
                2026.
                <br />
                Details, venue, and surprise guest announcement coming soon to
                registered guests only.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* GLOBAL EXCHANGE */}
      <Reveal className="global-section" id="global">
        <div className="global-inner">
          <div className="global-layout">
            <button
              type="button"
              className="global-video-placeholder"
              onClick={() => openModal("video")}
            >
              <div className="global-play-btn">
                <svg width="18" height="22" viewBox="0 0 18 22">
                  <path d="M0 0l18 11L0 22V0z" />
                </svg>
              </div>
              <div className="global-video-label">
                Watch Global Exchange 2020
              </div>
            </button>
            <div className="global-text">
              <p className="section-eyebrow">05 — Global Exchange 2020</p>
              <h2 className="section-heading section-heading-white">
                A moment that
                <br />
                moved the <em>world.</em>
              </h2>
              <p className="section-body">
                One hour. Four legends. Infinite inspiration. The Global
                Exchange was a landmark convening that brought together voices
                that rarely share the same stage.
              </p>
              <div className="speakers-list">
                {SPEAKERS.map((speaker) => (
                  <div key={speaker.name} className="speaker-row">
                    <div className="speaker-initial">{speaker.initial}</div>
                    <div>
                      <div className="speaker-name">{speaker.name}</div>
                      <div className="speaker-title">{speaker.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* DIGITAL MAGAZINE */}
      <Reveal className="magazine-section" id="magazine">
        <div className="section-inner">
          <div className="magazine-layout">
            <div className="magazine-cover">
              <div className="mag-cover-bg">IV</div>
              <div className="mag-cover-content">
                <div className="mag-logo">IV SOARErs · Impact</div>
                <div className="mag-issue">
                  Stories of
                  <br />
                  <em>Transformation</em>
                </div>
                <div className="mag-subtitle">
                  The Digital Magazine · Vol. I
                </div>
              </div>
            </div>
            <div>
              <p className="section-eyebrow">06 — IV Inc. Impact Magazine</p>
              <h2 className="section-heading">
                Your stories,
                <br />
                in <em>print.</em>
              </h2>
              <p className="section-body">
                Written by SOARErs, for SOARErs. This digital magazine captures
                the real stories of how this community has changed lives,
                shifted trajectories, and opened doors.
              </p>
              <div className="magazine-stories">
                {STORIES.map((story) => (
                  <div key={story.num} className="story-row">
                    <div className="story-num">{story.num}</div>
                    <div className="story-content">
                      <div className="story-title">{story.title}</div>
                      <div className="story-author">{story.author}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <button type="button" className="btn-primary">
                  Read the Full Magazine
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* SOAR MARKET */}
      <Reveal className="market-section" id="market">
        <div className="section-inner">
          <p className="section-eyebrow">07 — The SOAR Market</p>
          <h2 className="section-heading">
            An open-air
            <br />
            market for
            <br />
            <em>visionaries.</em>
          </h2>
          <p className="section-body">
            This is where commerce meets community. Browse, post, and connect
            around the things you&apos;re building — opportunities, talent, and
            resources all in one place.
          </p>
          <div className="market-grid">
            <div className="market-card">
              <div className="market-type">Services &amp; Offerings</div>
              <div className="market-title">
                What I&apos;m Building &amp; How I Can Serve You
              </div>
              <div className="market-body">
                Share your business, your offerings, and your expertise with
                16,000 potential collaborators and clients who already trust
                this community.
              </div>
              <button
                type="button"
                className="market-cta"
                onClick={() => openModal("market")}
              >
                Post an Offering
              </button>
            </div>
            <div className="market-card">
              <div className="market-type">Needs &amp; Resources</div>
              <div className="market-title">
                What I&apos;m Looking For Right Now
              </div>
              <div className="market-body">
                Need a strategist, a developer, a connector, or capital? Post
                your ask and let the community bring the answer to you.
              </div>
              <button
                type="button"
                className="market-cta"
                onClick={() => openModal("market")}
              >
                Post a Need
              </button>
            </div>
            <div className="market-card">
              <div className="market-type">Hiring</div>
              <div className="market-title">
                Open Roles at SOAREr-Led Organizations
              </div>
              <div className="market-body">
                Every hiring post reaches a curated pool of global,
                purpose-driven talent. If you&apos;re growing, let the community
                grow with you.
              </div>
              <button
                type="button"
                className="market-cta"
                onClick={() => openModal("market")}
              >
                Post an Opportunity
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* TIERS */}
      <Reveal className="tiers-section" id="tiers">
        <div className="section-inner">
          <p className="section-eyebrow">Membership Tiers</p>
          <h2 className="section-heading section-heading-white">
            Choose how high
            <br />
            you want to <em>fly.</em>
          </h2>
          <p className="section-body section-body-light">
            The IV SOARErs app is free to download and explore. When you&apos;re
            ready to go deeper, three tiers of membership open the full
            experience.
          </p>
          <div className="tiers-grid">
            <div className="tier-card launch">
              <div className="tier-card-bg">I</div>
              <div className="tier-label">Tier I</div>
              <div className="tier-name">Launch</div>
              <p className="tier-tagline">You&apos;re cleared for takeoff.</p>
              <div className="tier-price">
                <span className="tier-amount">$29</span>
                <span className="tier-period"> / month</span>
              </div>
              <ul className="tier-features-list">
                <li>Monthly #MMM live sessions with Ivy McGregor</li>
                <li>Full archive of past Monday Mentoring Moments</li>
                <li>Live Q&amp;A participation</li>
                <li>Featured guest speaker access</li>
                <li>Member profile &amp; community directory</li>
                <li>Meetup registration priority</li>
              </ul>
              <button
                type="button"
                className="tier-cta"
                onClick={() => openModal("tier_launch")}
              >
                Join Launch
              </button>
            </div>

            <div className="tier-card ascend">
              <div className="tier-most-popular">Most Popular</div>
              <div className="tier-card-bg">II</div>
              <div className="tier-label">Tier II</div>
              <div className="tier-name">Ascend</div>
              <p className="tier-tagline">Everything in Launch, and more.</p>
              <div className="tier-price">
                <span className="tier-amount">$59</span>
                <span className="tier-period"> / month</span>
              </div>
              <ul className="tier-features-list">
                <li>Everything in Launch</li>
                <li>Access to all 6 Impact Pods (The Hubs)</li>
                <li>Quarterly pod deep-dive convenings</li>
                <li>Exclusive strategies, frameworks &amp; tools</li>
                <li>Curated resource library</li>
                <li>Early access to meetup registration</li>
                <li>SOAR Market premium listing</li>
              </ul>
              <button
                type="button"
                className="tier-cta"
                onClick={() => openModal("tier_ascend")}
              >
                Join Ascend
              </button>
            </div>

            <div className="tier-card soar-tier">
              <div className="tier-card-bg">III</div>
              <div className="tier-label">Tier III · Platinum</div>
              <div className="tier-name">Soar</div>
              <p className="tier-tagline">The full altitude experience.</p>
              <div className="tier-price">
                <span className="tier-amount">$199</span>
                <span className="tier-period"> / month</span>
              </div>
              <ul className="tier-features-list">
                <li>Everything in Ascend</li>
                <li>One-on-one coaching sessions with Ivy McGregor</li>
                <li>Choose from packages of 1, 2, 4, or 6 sessions</li>
                <li>Personalized strategy &amp; impact roadmap</li>
                <li>Priority access to Ivy for questions &amp; guidance</li>
                <li>VIP meetup experience &amp; recognition</li>
                <li>First access to new programs &amp; initiatives</li>
              </ul>
              <button
                type="button"
                className="tier-cta"
                onClick={() => openModal("tier_soar")}
              >
                Join Soar
              </button>
            </div>
          </div>

          <div className="coaching-section">
            <p className="section-eyebrow">Soar Tier · 1-on-1 Coaching</p>
            <h3 className="coaching-heading">
              Direct access to <em>Ivy.</em>
            </h3>
            <p className="coaching-desc">
              Select the coaching package that matches your season. Each session
              is a bespoke, high-impact conversation with a global consultant,
              mentor, and impact leader with 30 years of experience across
              philanthropy, strategy, and social change.
            </p>
            <div className="coaching-grid">
              <div className="coaching-card">
                <div className="coaching-sessions">1</div>
                <div className="coaching-label">Session</div>
                <div className="coaching-price">$350</div>
                <div className="coaching-per">Single session</div>
                <div className="coaching-desc-card">
                  A focused 60-minute conversation to clarify direction, solve a
                  specific challenge, or gain a strategic perspective from Ivy.
                </div>
              </div>
              <div className="coaching-card">
                <div className="coaching-sessions">2</div>
                <div className="coaching-label">Sessions</div>
                <div className="coaching-price">$650</div>
                <div className="coaching-per">Starter package · Save $50</div>
                <div className="coaching-desc-card">
                  Two sessions to establish a foundation and follow up on action
                  steps. Ideal for those in a season of transition or new
                  beginnings.
                </div>
              </div>
              <div className="coaching-card featured-coaching">
                <div className="coaching-badge">Most Selected</div>
                <div className="coaching-featured-body">
                  <div className="coaching-sessions coaching-featured-sessions">
                    4
                  </div>
                  <div className="coaching-label">Sessions</div>
                  <div className="coaching-price">$1,200</div>
                  <div className="coaching-per coaching-per-gold">
                    Growth package · Save $200
                  </div>
                  <div className="coaching-desc-card">
                    Four sessions over a defined period to build momentum,
                    refine your strategy, and move with clarity and intention.
                  </div>
                </div>
              </div>
              <div className="coaching-card">
                <div className="coaching-sessions">6</div>
                <div className="coaching-label">Sessions</div>
                <div className="coaching-price">$1,750</div>
                <div className="coaching-per">Full package · Save $350</div>
                <div className="coaching-desc-card">
                  The complete experience. Six sessions of deep-dive mentorship
                  with Ivy — for those committed to the full transformation.
                </div>
              </div>
            </div>
            <p className="coaching-footnote">
              Coaching packages are exclusive to Soar (Tier III) members.
              &nbsp;·&nbsp; Sessions are 60 minutes via video. &nbsp;·&nbsp;
              Scheduling within 30 days of purchase.
            </p>
          </div>
        </div>
      </Reveal>

      {/* JOIN CTA */}
      <section className="join-section" id="join">
        <p className="join-eyebrow">Join the Community</p>
        <h2 className="join-heading">
          You were made
          <br />
          to <em>soar.</em>
        </h2>
        <p className="join-body">
          Seven years. One hundred countries. Sixteen thousand reasons to
          believe this community is unlike anything else in the world.
        </p>
        <button
          type="button"
          className="btn-primary btn-primary-gold btn-primary-lg"
          onClick={() => openModal("join")}
        >
          Create Your Free Profile
        </button>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="nav-wordmark">
                <span className="nav-iv">IV</span>
                <span className="nav-soar footer-soar-white">
                  SOAR<span className="footer-soar-muted">ers</span>
                </span>
              </div>
              <p className="footer-tagline">
                &quot;A global gathering of those
                <br />
                called to lead, built to serve,
                <br />
                and created to soar.&quot;
              </p>
              <p className="footer-founder">— Ivy McGregor, Founder</p>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Community</div>
              <ul>
                <li>
                  <Link href="#profiles">Member Profiles</Link>
                </li>
                <li>
                  <Link href="#mmm">#MMM Archive</Link>
                </li>
                <li>
                  <Link href="#pods">Pods</Link>
                </li>
                <li>
                  <Link href="#meetups">Meetups</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Resources</div>
              <ul>
                <li>
                  <Link href="#global">Global Exchange</Link>
                </li>
                <li>
                  <Link href="#magazine">Impact Magazine</Link>
                </li>
                <li>
                  <Link href="#market">SOAR Market</Link>
                </li>
                <li>
                  <Link href="#">IVY Inc.</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Connect</div>
              <ul>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Facebook Group</Link>
                </li>
                <li>
                  <Link href="#">Contact Ivy</Link>
                </li>
                <li>
                  <Link href="#">On Assignment →</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">
              © 2025 <span>IVY Inc.</span> · All Rights Reserved · IV SOARErs
              Community
            </div>
            <div className="footer-copy">
              Designed for those who were always meant to fly.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
