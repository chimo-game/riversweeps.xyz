"use client"

import { Shield, Zap, Gift, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Play",
    description: "No downloads. Play directly in your browser.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Gift,
    title: "Daily Bonuses",
    description: "Login every day for free coins and rewards.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our team is always here to help you.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Shield,
    title: "Secure & Fair",
    description: "Licensed and regulated with fair play.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all hover:scale-105 group"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
