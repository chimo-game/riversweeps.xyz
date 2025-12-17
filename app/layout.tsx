import type { Metadata } from "next"
import { Poppins, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import type React from "react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
})

export const metadata: Metadata = {
  title: {
    default: "RiverSweeps - Premium Online Casino & Gaming Platform",
    template: "%s | RiverSweeps",
  },
  description:
    "Play premium online casino games at RiverSweeps. Enjoy slots, fishing games, instant play, daily bonuses, and secure crypto deposits. Join River Sweeps for the ultimate gaming experience with 24/7 support.",
  keywords: [
    "riversweeps",
    "river sweeps",
    "riversweeps casino",
    "river sweeps casino",
    "riversweeps online",
    "online casino",
    "casino games",
    "slots",
    "fishing games",
    "crypto casino",
    "bitcoin casino",
    "instant play",
    "online slots",
    "casino bonuses",
    "daily bonuses",
    "secure gaming",
    "fair play",
    "24/7 support",
  ],
  authors: [{ name: "RiverSweeps" }],
  creator: "RiverSweeps",
  publisher: "RiverSweeps",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riversweeps.xyz",
    siteName: "RiverSweeps",
    title: "RiverSweeps - Premium Online Casino & Gaming Platform",
    description:
      "Play premium online casino games at RiverSweeps. Enjoy slots, fishing games, instant play, daily bonuses, and secure crypto deposits. Join River Sweeps for the ultimate gaming experience.",
    images: [
      {
        url: "/File1.svg",
        width: 1200,
        height: 630,
        alt: "RiverSweeps - Premium Gaming Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RiverSweeps - Premium Online Casino & Gaming Platform",
    description:
      "Play premium online casino games at RiverSweeps. Enjoy slots, fishing games, instant play, daily bonuses, and secure crypto deposits.",
    images: ["/File1.svg"],
    creator: "@riversweeps",
  },
  alternates: {
    canonical: "https://riversweeps.xyz",
  },
  category: "Gaming",
  classification: "Online Casino",
  other: {
    "google-site-verification": "-VPDfzJhNmU7fEVENwkEfzpNBQoVYr-itYPQyMcWbak",
    "application-name": "RiverSweeps",
    "apple-mobile-web-app-title": "RiverSweeps",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
  },
  icons: {
    icon: "/File1.svg",
    shortcut: "/File1.svg",
    apple: "/File1.svg",
  },
  manifest: "/manifest.json",
  generator: "Next.js",
  applicationName: "RiverSweeps",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
