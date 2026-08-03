import type { Metadata } from "next";
import type React from "react";
import { Source_Code_Pro } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-2CBZRZRQ32";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-code",
  display: "swap"
});

const siteUrl = "https://kishanlalbj.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kishanlal BJ | Full Stack Developer",
    template: "%s | Kishanlal BJ"
  },
  description:
    "Full Stack Developer with 9+ years of experience building robust, user-centric web applications using the MERN stack. Available for new opportunities.",
  keywords: [
    "Kishanlal",
    "kishanlalbj",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Portfolio",
    "Software Engineer",
    "Web Developer"
  ],
  authors: [{ name: "Kishanlal BJ", url: siteUrl }],
  creator: "Kishanlal BJ",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Kishanlal BJ | Full Stack Developer",
    description:
      "Full Stack Developer with 9+ years of experience building robust, user-centric web applications using the MERN stack.",
    siteName: "Kishanlal BJ Portfolio",
    images: [{ url: "/me.jpeg", width: 400, height: 400, alt: "Kishanlal BJ" }]
  },
  twitter: {
    card: "summary",
    title: "Kishanlal BJ | Full Stack Developer",
    description:
      "Full Stack Developer with 9+ years of experience building robust, user-centric web applications using the MERN stack.",
    images: ["/me.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body>
        {children}
        <Analytics />
        {/* Google Consent Mode v2 defaults — must run before gtag.js loads */}
        <Script id="ga-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <CookieConsentBanner />
        {/* FontAwesome */}
        <Script
          src="https://kit.fontawesome.com/459b172069.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
