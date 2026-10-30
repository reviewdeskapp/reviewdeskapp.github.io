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

const DESCRIPTION =
  "ReviewDesk watches GitHub and Jira and keeps the pull requests that need you one glance away, right on your Mac.";

export const metadata: Metadata = {
  metadataBase: new URL("https://reviewdeskapp.github.io"),
  title: "ReviewDesk for macOS",
  description: DESCRIPTION,
  applicationName: "ReviewDesk",
  openGraph: {
    title: "ReviewDesk for macOS",
    description: DESCRIPTION,
    type: "website",
    siteName: "ReviewDesk",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReviewDesk for macOS",
    description: DESCRIPTION,
  },
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
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
