"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: "coin" | "gem" | "star"
}

export function FloatingElements() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      type: ["coin", "gem", "star"][Math.floor(Math.random() * 3)] as "coin" | "gem" | "star",
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-particle opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
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
          {particle.type === "gem" && (
            <div
              className="rotate-45 bg-gradient-to-br from-cyan-400 to-blue-600"
              style={{ width: particle.size, height: particle.size }}
            />
          )}
          {particle.type === "star" && (
            <svg
              width={particle.size}
              height={particle.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}
