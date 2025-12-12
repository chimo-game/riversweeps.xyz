import type { Metadata } from "next"
import { Poppins, Nunito } from "next/font/google"
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
  title: "RiverSweeps - Premium Gaming Experience",
  description: "Experience the thrill of premium online casino gaming",
  other: {
    "google-site-verification": "-VPDfzJhNmU7fEVENwkEfzpNBQoVYr-itYPQyMcWbak",
  },
  icons: {
    icon: "/File1.svg",
    shortcut: "/File1.svg",
    apple: "/File1.svg",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${nunito.variable} font-sans`}>{children}</body>
    </html>
  )
}
