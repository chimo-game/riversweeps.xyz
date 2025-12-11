"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, UserPlus } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroBanner() {
  const [activeUsers, setActiveUsers] = useState(12847)
  const [totalUsers, setTotalUsers] = useState(847293)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 5) - 2)
      setTotalUsers((prev) => prev + Math.floor(Math.random() * 3))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* Live Stats */}
            <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">{activeUsers.toLocaleString()} Online</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <UserPlus className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">{totalUsers.toLocaleString()} Users</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Play & Win
              <br />
              <span className="text-primary">Big Prizes</span>
            </h1>
            
            <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
              Join thousands of players. Play the best slots and fishing games for free. Get your welcome bonus now!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/register"
                className="px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                href="#games"
                className="px-8 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/80 transition-colors"
              >
                View Games
              </Link>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] animate-float">
              <Image
                src="/File3.webp"
                alt="Games"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
