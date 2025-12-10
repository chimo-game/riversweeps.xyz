"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function JackpotSection() {
  const [jackpot, setJackpot] = useState(34634.84)

  // Simulate jackpot increasing
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.random() * 0.5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Take Part In Our Fishing Jackpot!</h2>

        <div className="flex justify-center">
          {/* Jackpot display */}
          <div className="relative">
            <div className="relative w-80 h-80">
              <Image
                src="/golden-fish-mascot-with-jackpot-display-purple-bac.jpg"
                alt="Fishing Jackpot"
                fill
                className="object-contain"
              />
              {/* Jackpot counter overlay */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-blue-900/90 rounded-full px-6 py-3 border-4 border-yellow-500">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-500 text-2xl">$</span>
                  <span className="text-white text-3xl font-bold">{jackpot.toFixed(2)}</span>
                </div>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg px-4 py-1">
                <span className="text-white font-bold text-sm">JACKPOT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
