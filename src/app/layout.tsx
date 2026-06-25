import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "../styles/soarers.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ivyincsoarers.com"),
  title: "IV SOARers — IVY Inc.",
  description:
    "A global community of leaders, entrepreneurs, and visionaries — assembled to soar.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://ivyincsoarers.com",
    siteName: "IV SOARErs",
    title: "IV SOARers — IVY Inc.",
    description:
      "A global community of leaders, entrepreneurs, and visionaries — assembled to soar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
