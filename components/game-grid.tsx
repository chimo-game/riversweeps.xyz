"use client"

import { GameCard } from "./game-card"
import type { Game } from "@/types/game"

interface GameGridProps {
  title: string
  games: Game[]
}

export function GameGrid({ title, games }: GameGridProps) {
  return (
    <section id="games" className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  )
}
