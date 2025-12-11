"use client"

import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/File1.svg" alt="Logo" width={32} height={32} />
          <span className="text-lg font-bold text-white">RiverSweeps</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="#games" className="hidden sm:block text-sm text-muted-foreground hover:text-white transition-colors">
            Games
          </Link>
          <Link
            href="/register"
            className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Play Now
          </Link>
        </div>
      </div>
    </header>
  )
}
