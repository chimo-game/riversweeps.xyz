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
            <div className="relative w-[400px] h-[400px]">
              <Image
                src="/File39.webp"
                alt="Fishing Jackpot"
                fill
                className="object-contain"
              />
              {/* Jackpot counter overlay - positioned in the blue bar area */}
              <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400 text-3xl font-bold">$</span>
                  <span className="text-white text-4xl font-bold drop-shadow-lg">{jackpot.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
