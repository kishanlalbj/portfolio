import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-code",
  display: "swap",
});

const siteUrl = "https://kishanlalbj.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kishanlal BJ | Full Stack Developer",
    template: "%s | Kishanlal BJ",
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
    "Web Developer",
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
    images: [{ url: "/me.jpeg", width: 400, height: 400, alt: "Kishanlal BJ" }],
  },
  twitter: {
    card: "summary",
    title: "Kishanlal BJ | Full Stack Developer",
    description:
      "Full Stack Developer with 9+ years of experience building robust, user-centric web applications using the MERN stack.",
    images: ["/me.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body>
        {children}
        <Analytics />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2CBZRZRQ32"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2CBZRZRQ32');
          `}
        </Script>
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
