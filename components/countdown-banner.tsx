"use client"

import { useState, useEffect } from "react"
import { Clock, Zap, Gift } from "lucide-react"
import Link from "next/link"

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 23, minutes: 59, seconds: 59 })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1

        if (totalSeconds <= 0) {
          return { hours: 23, minutes: 59, seconds: 59 }
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-3 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjEiIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        {/* Left - Promo Text */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
            <Zap className="w-5 h-5 text-yellow-300" />
          </div>
          <div>
            <p className="text-white font-bold text-lg flex items-center gap-2">
              <Gift className="w-5 h-5" />
              FLASH BONUS: 200% Deposit Match!
            </p>
            <p className="text-white/80 text-sm">Limited time offer - Don&apos;t miss out!</p>
          </div>
        </div>

        {/* Center - Countdown */}
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-300" />
          <span className="text-white/80 text-sm mr-2">Ends in:</span>
          <div className="flex gap-1">
            <div className="bg-black/30 rounded-lg px-3 py-1">
              <span className="text-white font-mono font-bold text-xl">{formatNumber(timeLeft.hours)}</span>
            </div>
            <span className="text-white font-bold text-xl">:</span>
            <div className="bg-black/30 rounded-lg px-3 py-1">
              <span className="text-white font-mono font-bold text-xl">{formatNumber(timeLeft.minutes)}</span>
            </div>
            <span className="text-white font-bold text-xl">:</span>
            <div className="bg-black/30 rounded-lg px-3 py-1">
              <span className="text-white font-mono font-bold text-xl">{formatNumber(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>

        {/* Right - CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/deposit"
            className="bg-white text-red-600 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 hover:text-red-700 transition-all hover:scale-105"
          >
            CLAIM NOW
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-white transition-colors text-sm"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
