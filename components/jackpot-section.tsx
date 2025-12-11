"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function JackpotSection() {
  const [jackpot, setJackpot] = useState(34634.84)

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.random() * 0.5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Take Part In Our Fishing Jackpot!</h2>

        <div className="flex justify-center">
          <div className="relative">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] animate-float-slow">
              <Image
                src="/File39.webp"
                alt="Fishing Jackpot"
                fill
                className="object-contain"
              />
              {/* Jackpot counter overlay */}
              <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-2xl sm:text-3xl font-bold">$</span>
                  <span className="text-white text-3xl sm:text-4xl font-bold drop-shadow-lg">
                    {jackpot.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
