"use client"

import Link from "next/link"
import Image from "next/image"

const categories = ["Slots", "Blackjack", "Roulette", "Poker", "Live Casino", "Sports"]

export function Navbar() {
  return (
    <>
      <nav className="bg-background px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/File1.svg" alt="RiverSweeps" width={40} height={40} />
            <span className="text-2xl font-bold text-white">RiverSweeps</span>
          </Link>

          {/* Get App Button */}
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all neon-glow">
            GET APP
          </button>
        </div>
      </nav>
      {/* Pink gradient line */}
      <div className="navbar-gradient" />
    </>
  )
}
