"use client"

import { useEffect, useState } from "react"
import { X, DollarSign, TrendingUp } from "lucide-react"

const winnerNames = [
  "John D.",
  "Sarah M.",
  "Mike R.",
  "Emma L.",
  "Chris P.",
  "Lisa K.",
  "David W.",
  "Amy S.",
  "James T.",
  "Kate B.",
  "Tom H.",
  "Julia F.",
]

const games = [
  "Buffalo Slots",
  "Fortune Fish",
  "Lucky Fishing",
  "Egypt Fortunes",
  "Reel Rider",
  "Triple Fortune",
  "Golden Dragon",
  "Thunder Fishing",
]

const actions = ["won", "cashed out", "hit jackpot on"]

interface Toast {
  id: number
  name: string
  action: string
  game: string
  amount: number
  visible: boolean
}

export function SocialProofToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const showToast = () => {
      const newToast: Toast = {
        id: Date.now(),
        name: winnerNames[Math.floor(Math.random() * winnerNames.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        game: games[Math.floor(Math.random() * games.length)],
        amount: Math.floor(Math.random() * 4500) + 500,
        visible: true,
      }

      setToasts((prev) => [...prev, newToast])

      // Auto-hide after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.map((t) => (t.id === newToast.id ? { ...t, visible: false } : t)))
      }, 5000)

      // Remove from DOM after animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id))
      }, 5500)
    }

    // Show first toast after 3 seconds
    const initialTimeout = setTimeout(showToast, 3000)

    // Then show every 8-15 seconds randomly
    const interval = setInterval(
      () => {
        showToast()
      },
      Math.random() * 7000 + 8000,
    )

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  const dismissToast = (id: number) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, visible: false } : t)))
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 300)
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            bg-card border border-primary/40 rounded-xl p-4 shadow-lg shadow-primary/20
            flex items-center gap-3 max-w-sm
            transition-all duration-300 ease-out
            ${toast.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}
          `}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
            {toast.action === "hit jackpot on" ? (
              <TrendingUp className="w-5 h-5 text-white" />
            ) : (
              <DollarSign className="w-5 h-5 text-white" />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">
              <span className="text-primary">{toast.name}</span> {toast.action}{" "}
              <span className="text-green-400 font-bold">${toast.amount.toLocaleString()}</span>
            </p>
            <p className="text-muted-foreground text-xs truncate">{toast.game} • Just now</p>
          </div>

          <button
            onClick={() => dismissToast(toast.id)}
            className="text-muted-foreground hover:text-white transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
