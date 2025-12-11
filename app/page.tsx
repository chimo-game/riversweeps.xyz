"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"
import { GameGrid } from "@/components/game-grid"
import { JackpotSection } from "@/components/jackpot-section"
import { FeaturesSection } from "@/components/features-section"
import { FloatingElements } from "@/components/floating-elements"
import { SocialProofToast } from "@/components/social-proof-toast"

export default function Home() {
  const games = [
    { id: "1", title: "Buffalo Cash", category: "Slots", thumbnail: "/File8.webp", description: "", gameUrl: "#" },
    { id: "2", title: "Fortune Fish", category: "Fishing", thumbnail: "/File10.webp", description: "", gameUrl: "#" },
    { id: "3", title: "Lucky Fishing", category: "Fishing", thumbnail: "/File47.webp", description: "", gameUrl: "#" },
    { id: "4", title: "Egypt Fortunes", category: "Slots", thumbnail: "/File14.webp", description: "", gameUrl: "#" },
    { id: "5", title: "Reel Rider", category: "Slots", thumbnail: "/File16.webp", description: "", gameUrl: "#" },
    { id: "6", title: "Triple Fortune", category: "Slots", thumbnail: "/File18.webp", description: "", gameUrl: "#" },
    { id: "7", title: "Dragon Coin", category: "Slots", thumbnail: "/File9.webp", description: "", gameUrl: "#" },
    { id: "8", title: "Thunder Fishing", category: "Fishing", thumbnail: "/File44.webp", description: "", gameUrl: "#" },
    { id: "9", title: "Candy Heroes", category: "Slots", thumbnail: "/File46.webp", description: "", gameUrl: "#" },
    { id: "10", title: "Galaxy Fishing", category: "Fishing", thumbnail: "/File45.webp", description: "", gameUrl: "#" },
  ]

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingElements />
      <Navbar />
      
      <main className="relative z-10">
        <HeroBanner />

        {/* Quick Actions for money flow */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto mt-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-card border border-border rounded-xl p-4 shadow-sm">
              <div className="text-sm text-muted-foreground">
                Manage your balance quickly — deposit funds or cash out winnings.
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/deposit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5 text-center"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-white/80 animate-pulse" />
                  Deposit
                </Link>
                <Link
                  href="/cashout"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-border text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-all hover:-translate-y-0.5 text-center"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-300/80 animate-pulse" />
                  Cash Out
                </Link>
              </div>
            </div>
          </div>
        </section>

        <GameGrid title="Popular Games" games={games} />
        <JackpotSection />
        <FeaturesSection />
      </main>

      <footer className="relative z-10 border-t border-border py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/File1.svg" alt="Logo" width={24} height={24} />
            <span className="text-sm text-muted-foreground">RiverSweeps</span>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            © 2024 RiverSweeps. 18+ Only. Play Responsibly.
          </p>
        </div>
      </footer>

      <SocialProofToast />
    </div>
  )
}
