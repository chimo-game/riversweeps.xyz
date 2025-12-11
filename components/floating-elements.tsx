"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  type: "coin" | "star"
}

export function FloatingElements() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 8 + 12,
      delay: Math.random() * 5,
      type: Math.random() > 0.5 ? "coin" : "star",
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute opacity-20 animate-float-slow"
          style={{
            left: `${particle.x}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.type === "coin" && (
            <div
              className="rounded-full bg-gradient-to-br from-yellow-400 to-amber-600"
              style={{ width: particle.size, height: particle.size }}
            />
          )}
          {particle.type === "star" && (
            <div
              className="rounded-full bg-primary"
              style={{ width: particle.size, height: particle.size }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
