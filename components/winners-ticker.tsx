"use client"

import { useEffect, useState } from "react"
import { Trophy, DollarSign } from "lucide-react"

const winnerNames = [
  "John***",
  "Sarah***",
  "Mike***",
  "Emma***",
  "Chris***",
  "Lisa***",
  "David***",
  "Amy***",
  "James***",
  "Kate***",
  "Tom***",
  "Julia***",
  "Alex***",
  "Rachel***",
  "Ryan***",
  "Megan***",
  "Kevin***",
  "Nicole***",
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

interface Winner {
  id: number
  name: string
  game: string
  amount: number
}

function generateWinner(id: number): Winner {
  return {
    id,
    name: winnerNames[Math.floor(Math.random() * winnerNames.length)],
    game: games[Math.floor(Math.random() * games.length)],
    amount: Math.floor(Math.random() * 4500) + 500,
  }
}

export function WinnersTicker() {
  const [winners, setWinners] = useState<Winner[]>([])

  useEffect(() => {
    // Generate initial winners
    const initialWinners = Array.from({ length: 20 }, (_, i) => generateWinner(i))
    setWinners(initialWinners)

    // Add new winner every 5 seconds
    const interval = setInterval(() => {
      setWinners((prev) => {
        const newWinner = generateWinner(Date.now())
        return [newWinner, ...prev.slice(0, 19)]
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-primary/20 via-card to-primary/20 border-y border-primary/30 overflow-hidden">
      <div className="flex items-center gap-2 py-2">
        <div className="flex-shrink-0 flex items-center gap-2 px-4 bg-primary/30 py-2">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-semibold text-white whitespace-nowrap">LIVE WINS</span>
        </div>

        <div className="overflow-hidden flex-1">
          <div className="flex gap-8 animate-marquee">
            {winners.concat(winners).map((winner, idx) => (
              <div key={`${winner.id}-${idx}`} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-muted-foreground text-sm">{winner.name}</span>
                <span className="text-white text-sm">won</span>
                <span className="text-green-400 font-bold text-sm flex items-center">
                  <DollarSign className="w-3 h-3" />
                  {winner.amount.toLocaleString()}
                </span>
                <span className="text-white text-sm">on</span>
                <span className="text-primary text-sm font-medium">{winner.game}</span>
                <span className="text-muted-foreground mx-4">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
