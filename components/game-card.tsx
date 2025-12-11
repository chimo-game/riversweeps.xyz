"use client"

import Image from "next/image"
import Link from "next/link"
import type { Game } from "@/types/game"

interface GameCardProps {
  game: Game
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link href="/register" className="group block">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card">
        <Image 
          src={game.thumbnail || "/placeholder.svg"} 
          alt={game.title} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white font-medium text-sm truncate">{game.title}</p>
          <p className="text-muted-foreground text-xs">{game.category}</p>
        </div>
      </div>
    </Link>
  )
}
