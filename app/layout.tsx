import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE = "https://reviewdeskapp.github.io";
const TITLE = "ReviewDesk — GitHub pull requests and Jira status on your Mac";
const DESCRIPTION =
  "ReviewDesk is a native macOS app that keeps every GitHub pull request that needs your review one glance away — in a dashboard, the menu bar and desktop widgets, with Jira ticket status next to each PR.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s — ReviewDesk" },
  description: DESCRIPTION,
  applicationName: "ReviewDesk",
  keywords: [
    "ReviewDesk", "macOS", "Mac app", "GitHub", "pull requests", "code review",
    "Jira", "menu bar", "widgets", "developer tools",
  ],
  category: "developer tools",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE,
    type: "website",
    siteName: "ReviewDesk",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 750, alt: "ReviewDesk dashboard on macOS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },
};

/** Structured data so search engines can show ReviewDesk as a software application. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReviewDesk",
  operatingSystem: "macOS 14 or later",
  applicationCategory: "DeveloperApplication",
  description: DESCRIPTION,
  url: SITE,
  image: `${SITE}/og.png`,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-[100dvh] antialiased">
        <div className="noise" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
