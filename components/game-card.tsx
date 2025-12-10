"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import type { Game } from "@/types/game"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link href="/register" className="block group">
      <div className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 card-glow">
        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite ? "bg-red-500 text-white" : "bg-black/50 text-white/70 opacity-0 group-hover:opacity-100"
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        {/* Game Thumbnail */}
        <div className="relative aspect-square overflow-hidden">
          <Image src={game.thumbnail || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-primary text-white rounded-full px-6 py-2 font-semibold">PLAY</div>
          </div>
        </div>

        {/* Game Title */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <p className="text-white text-sm font-medium truncate">{game.title}</p>
          <p className="text-muted-foreground text-xs">{game.category}</p>
        </div>
      </div>
    </Link>
  )
}
