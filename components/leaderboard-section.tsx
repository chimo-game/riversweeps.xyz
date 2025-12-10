"use client"

import { useState } from "react"
import { Trophy, Medal, Crown, TrendingUp } from "lucide-react"
import Image from "next/image"

const weeklyLeaders = [
  { rank: 1, name: "Dragon***", winnings: 45780, games: 234, avatar: "D" },
  { rank: 2, name: "Lucky***", winnings: 38450, games: 189, avatar: "L" },
  { rank: 3, name: "King***", winnings: 32100, games: 156, avatar: "K" },
  { rank: 4, name: "Phoenix***", winnings: 28900, games: 142, avatar: "P" },
  { rank: 5, name: "Star***", winnings: 25600, games: 128, avatar: "S" },
  { rank: 6, name: "Wolf***", winnings: 22400, games: 115, avatar: "W" },
  { rank: 7, name: "Eagle***", winnings: 19800, games: 98, avatar: "E" },
  { rank: 8, name: "Tiger***", winnings: 17500, games: 87, avatar: "T" },
]

const monthlyLeaders = [
  { rank: 1, name: "Master***", winnings: 156000, games: 890, avatar: "M" },
  { rank: 2, name: "Champion***", winnings: 142500, games: 756, avatar: "C" },
  { rank: 3, name: "Elite***", winnings: 128900, games: 678, avatar: "E" },
  { rank: 4, name: "Pro***", winnings: 115400, games: 612, avatar: "P" },
  { rank: 5, name: "Ace***", winnings: 98700, games: 534, avatar: "A" },
  { rank: 6, name: "Hero***", winnings: 87600, games: 478, avatar: "H" },
  { rank: 7, name: "Legend***", winnings: 76500, games: 412, avatar: "L" },
  { rank: 8, name: "Boss***", winnings: 65400, games: 356, avatar: "B" },
]

export function LeaderboardSection() {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly">("weekly")
  const leaders = activeTab === "weekly" ? weeklyLeaders : monthlyLeaders
  const prizePool = activeTab === "weekly" ? 10000 : 50000

  const getRankStyles = (rank: number) => {
    switch (rank) {
      case 1:
        return {
          bg: "bg-gradient-to-r from-yellow-400 to-amber-600",
          border: "border-yellow-400",
          icon: Crown,
        }
      case 2:
        return {
          bg: "bg-gradient-to-r from-slate-300 to-slate-500",
          border: "border-slate-300",
          icon: Medal,
        }
      case 3:
        return {
          bg: "bg-gradient-to-r from-amber-600 to-amber-800",
          border: "border-amber-600",
          icon: Medal,
        }
      default:
        return {
          bg: "bg-secondary",
          border: "border-border",
          icon: TrendingUp,
        }
    }
  }

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <Image src="/File31.webp" alt="Leaderboard" width={40} height={40} />
            <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
          </div>

          {/* Tabs */}
          <div className="flex bg-card rounded-xl p-1 gap-1">
            <button
              onClick={() => setActiveTab("weekly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "weekly" ? "bg-primary text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "monthly" ? "bg-primary text-white" : "text-muted-foreground hover:text-white"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Prize Pool Banner */}
        <div className="bg-gradient-to-r from-primary/20 via-card to-primary/20 border border-primary/30 rounded-2xl p-6 mb-8 text-center">
          <p className="text-muted-foreground mb-2">Prize Pool</p>
          <p className="text-4xl md:text-5xl font-bold text-yellow-400">${prizePool.toLocaleString()}</p>
          <p className="text-muted-foreground mt-2">Top 3 players share the prize</p>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 p-4 bg-secondary/50 text-muted-foreground text-sm font-medium">
            <div className="col-span-1">Rank</div>
            <div className="col-span-5">Player</div>
            <div className="col-span-3 text-right">Winnings</div>
            <div className="col-span-3 text-right">Games</div>
          </div>

          {/* Table Body */}
          {leaders.map((leader) => {
            const styles = getRankStyles(leader.rank)
            const IconComponent = styles.icon

            return (
              <div
                key={leader.rank}
                className={`grid grid-cols-12 gap-4 p-4 items-center border-t border-border hover:bg-secondary/30 transition-colors ${
                  leader.rank <= 3 ? "bg-secondary/20" : ""
                }`}
              >
                <div className="col-span-1">
                  {leader.rank <= 3 ? (
                    <div className={`w-8 h-8 rounded-full ${styles.bg} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <span className="text-muted-foreground font-medium">{leader.rank}</span>
                  )}
                </div>
                <div className="col-span-5 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full ${styles.bg} flex items-center justify-center text-white font-bold`}
                  >
                    {leader.avatar}
                  </div>
                  <span className="text-white font-medium">{leader.name}</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-green-400 font-bold">${leader.winnings.toLocaleString()}</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-muted-foreground">{leader.games}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
