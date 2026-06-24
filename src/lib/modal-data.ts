export type ModalType =
  | "profile"
  | "mmm"
  | "pod"
  | "meetup"
  | "video"
  | "market"
  | "september"
  | "tier_launch"
  | "tier_ascend"
  | "tier_soar"
  | "join";

export interface ModalContent {
  tag: string;
  heading: string;
  body: string;
  fields: string[];
  cta: string;
}

export const modalData: Record<ModalType, ModalContent> = {
  profile: {
    tag: "Member Profiles",
    heading: "Create Your Profile",
    body: "Join 16,000+ SOARErs by creating your member profile. Share your city, your calling, and your journey.",
    fields: [
      "Full Name",
      "City / State / Country",
      "Line of Business",
      "Business Website (optional)",
    ],
    cta: "Create Profile",
  },
  mmm: {
    tag: "Monday Mentoring Moments",
    heading: "Register for the Next Session",
    body: "Secure your spot for the live teaching with Ivy McGregor. Sessions fill quickly.",
    fields: ["Full Name", "Email Address"],
    cta: "Reserve My Spot",
  },
  pod: {
    tag: "Pods",
    heading: "Suggest a New Pod",
    body: "Have a community you believe is missing a space? We would love to hear your idea.",
    fields: ["Pod Name", "Who is it for?", "Your Name"],
    cta: "Submit Suggestion",
  },
  meetup: {
    tag: "September Birthday Weekend",
    heading: "Sign Up for September 4 to 6, 2026",
    body: "Join Ivy and the SOARErs community for a landmark birthday weekend celebration. Secure your spot now — space is limited.",
    fields: ["Full Name", "Email Address", "City / State / Country"],
    cta: "Reserve My Spot",
  },
  video: {
    tag: "Global Exchange 2020",
    heading: "Watch the Full Recording",
    body: "Enter your email to access the Global Exchange 2020 recording featuring Oprah Winfrey, Tyler Perry, and Bishop T.D. Jakes.",
    fields: ["Full Name", "Email Address"],
    cta: "Access Recording",
  },
  market: {
    tag: "SOAR Market",
    heading: "Post to the Community",
    body: "Whether you are offering a service, sharing an opportunity, or looking for resources — your post reaches the entire community.",
    fields: [
      "Your Name",
      "Post Type: Offering / Need / Hiring",
      "Description",
    ],
    cta: "Post to Market",
  },
  september: {
    tag: "September Birthday Weekend — Houston, TX",
    heading: "Reserve Your Space.",
    body: "Secure your spot for September 4 to 6, 2026. A $50 deposit holds your space today. Full payment of $200 due August 1, 2026. Event details and the surprise guest announcement will be sent to registered guests only.",
    fields: [
      "Full Name",
      "Email Address",
      "City / State / Country",
      "Phone Number (optional)",
    ],
    cta: "Reserve My Space — $50 Deposit",
  },
  tier_launch: {
    tag: "Launch — Tier I Membership",
    heading: "You are cleared for takeoff.",
    body: "Unlock monthly live MMM sessions, the full archive, live Q&A, and featured guest speakers — including Oprah Winfrey, Tyler Perry, and Bishop T.D. Jakes. $29 per month.",
    fields: ["Full Name", "Email Address", "City / State / Country"],
    cta: "Join Launch — $29 per month",
  },
  tier_ascend: {
    tag: "Ascend — Tier II Membership",
    heading: "It is time to go higher.",
    body: "Everything in Launch, plus access to all 6 Impact Pods, exclusive strategies and tools, and a curated resource library. $59 per month.",
    fields: ["Full Name", "Email Address", "City / State / Country"],
    cta: "Join Ascend — $59 per month",
  },
  tier_soar: {
    tag: "Soar — Tier III Platinum",
    heading: "Direct access to Ivy.",
    body: "The full IV SOARErs experience — plus one-on-one coaching sessions with Ivy McGregor, global consultant, mentor, and impact leader. Select your coaching package after joining. $199 per month.",
    fields: [
      "Full Name",
      "Email Address",
      "Coaching Package: 1 / 2 / 4 / 6 sessions",
    ],
    cta: "Join Soar — $199 per month",
  },
  join: {
    tag: "Join IV SOARErs",
    heading: "You Were Made to Soar.",
    body: "Create your free profile and become part of a 16,000-member global community built on mentorship, access, and impact.",
    fields: ["Full Name", "Email Address", "City / State / Country"],
    cta: "Join the Community",
  },
};
