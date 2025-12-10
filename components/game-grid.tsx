"use client"

import { useState, useMemo } from "react"
import { GameCard } from "./game-card"
import { GameSearch } from "./game-search"
import type { Game } from "@/types/game"
import { Star, Gamepad2 } from "lucide-react"

interface GameGridProps {
  title: string
  games: Game[]
  icon?: "star" | "gamepad"
  showSearch?: boolean
}

export function GameGrid({ title, games, icon, showSearch = false }: GameGridProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || game.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [games, searchQuery, selectedCategory])

  return (
    <section className="py-8">
      <div className="flex items-center gap-3 mb-6">
        {icon === "star" && <Star className="w-6 h-6 text-primary" />}
        {icon === "gamepad" && <Gamepad2 className="w-6 h-6 text-primary" />}
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>

      {showSearch && (
        <GameSearch
          onSearch={setSearchQuery}
          onCategoryChange={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      )}

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No games found matching your criteria.</p>
        </div>
      )}
    </section>
  )
}
