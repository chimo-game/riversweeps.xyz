"use client"

import { useState, useRef } from "react"
import { X, Gift } from "lucide-react"

const prizes = [
  { label: "$5", value: 5, color: "#ff0066" },
  { label: "$10", value: 10, color: "#00d4ff" },
  { label: "$25", value: 25, color: "#ffee00" },
  { label: "FREE SPIN", value: 0, color: "#00ff88" },
  { label: "$50", value: 50, color: "#ff6600" },
  { label: "$100", value: 100, color: "#aa00ff" },
  { label: "$15", value: 15, color: "#00ffcc" },
  { label: "BONUS", value: 0, color: "#ff3366" },
]

export function DailySpinWheel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [result, setResult] = useState<string | null>(null)
  const [hasSpun, setHasSpun] = useState(false)
  const wheelRef = useRef<HTMLDivElement>(null)

  const spinWheel = () => {
    if (isSpinning || hasSpun) return

    setIsSpinning(true)
    setResult(null)

    // Random spin between 5-10 full rotations + random segment
    const spins = Math.floor(Math.random() * 5 + 5) * 360
    const randomSegment = Math.floor(Math.random() * prizes.length)
    const segmentAngle = 360 / prizes.length
    const finalRotation = spins + randomSegment * segmentAngle + segmentAngle / 2

    setRotation(finalRotation)

    // Show result after animation
    setTimeout(() => {
      setIsSpinning(false)
      setHasSpun(true)
      const winningIndex = Math.floor(((finalRotation % 360) / 360) * prizes.length)
      const actualIndex = (prizes.length - winningIndex) % prizes.length
      setResult(prizes[actualIndex].label)
    }, 5000)
  }

  return (
    <>
      {/* Floating Spin Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-24 md:bottom-4 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg shadow-yellow-500/30 hover:scale-110 transition-transform animate-bounce"
      >
        <Gift className="w-8 h-8 text-white" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
          1
        </span>
      </button>

      {/* Spin Wheel Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-card rounded-3xl p-6 md:p-8 max-w-md w-full border border-primary/30">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Daily Spin Wheel</h2>
              <p className="text-muted-foreground">Spin once daily for a chance to win prizes!</p>
            </div>

            {/* Wheel Container */}
            <div className="relative w-64 h-64 mx-auto mb-6">
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[25px] border-l-transparent border-r-transparent border-t-yellow-400" />

              {/* Wheel */}
              <div
                ref={wheelRef}
                className="w-full h-full rounded-full border-4 border-yellow-400 overflow-hidden relative"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? "transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
                }}
              >
                {prizes.map((prize, index) => {
                  const angle = (360 / prizes.length) * index
                  return (
                    <div
                      key={index}
                      className="absolute w-1/2 h-1/2 origin-bottom-right flex items-center justify-center"
                      style={{
                        transform: `rotate(${angle}deg) skewY(${90 - 360 / prizes.length}deg)`,
                        background: prize.color,
                      }}
                    >
                      <span
                        className="text-white text-xs font-bold absolute"
                        style={{
                          transform: `skewY(${-(90 - 360 / prizes.length)}deg) rotate(${180 / prizes.length}deg)`,
                          left: "50%",
                          top: "30%",
                        }}
                      >
                        {prize.label}
                      </span>
                    </div>
                  )
                })}
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-4 border-yellow-400 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-xs">SPIN</span>
                </div>
              </div>
            </div>

            {/* Result */}
            {result && (
              <div className="text-center mb-4 animate-pulse">
                <p className="text-xl font-bold text-green-400">You won: {result}!</p>
              </div>
            )}

            {/* Spin Button */}
            <button
              onClick={spinWheel}
              disabled={isSpinning || hasSpun}
              className={`
                w-full py-4 rounded-xl font-bold text-lg text-white
                transition-all duration-300
                ${
                  isSpinning || hasSpun
                    ? "bg-muted cursor-not-allowed"
                    : "bg-gradient-to-r from-primary to-pink-600 hover:opacity-90 hover:scale-105"
                }
              `}
            >
              {isSpinning ? "Spinning..." : hasSpun ? "Come Back Tomorrow!" : "SPIN NOW"}
            </button>

            {/* Terms */}
            <p className="text-muted-foreground text-xs text-center mt-4">
              One free spin per day. Prizes credited instantly to your account.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
