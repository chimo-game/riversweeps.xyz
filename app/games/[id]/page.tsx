import { games } from "@/data/games"
import { Navbar } from "@/components/navbar"
import { Maximize2, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

export default function GamePage({ params }: { params: { id: string } }) {
  const game = games.find((g) => g.id === params.id)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Games</span>
        </Link>

        {/* Game Container */}
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border-2 border-primary/30">
          <iframe src={game.gameUrl} className="absolute inset-0 w-full h-full" allow="fullscreen" title={game.title} />
        </div>

        {/* Game Info Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6 p-4 bg-card rounded-xl">
          <div>
            <h1 className="text-2xl font-bold text-white">{game.title}</h1>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">{game.category}</span>
          </div>

          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all font-semibold neon-glow">
            <Maximize2 className="w-5 h-5" />
            Fullscreen
          </button>
        </div>

        {/* Game Description */}
        <div className="mt-6 p-6 bg-card rounded-xl">
          <h2 className="font-bold text-white mb-3">About This Game</h2>
          <p className="text-muted-foreground leading-relaxed">{game.description}</p>
        </div>
      </div>
    </div>
  )
}
