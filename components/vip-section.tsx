"use client"

import { Crown, Star, Gem, Trophy, Gift, Zap, ChevronRight } from "lucide-react"

const vipTiers = [
  {
    name: "Bronze",
    icon: Star,
    color: "from-amber-700 to-amber-900",
    borderColor: "border-amber-700",
    textColor: "text-amber-500",
    minDeposit: "$0",
    cashback: "5%",
    benefits: ["5% Daily Cashback", "Standard Support", "Weekly Bonuses"],
  },
  {
    name: "Silver",
    icon: Gem,
    color: "from-slate-400 to-slate-600",
    borderColor: "border-slate-400",
    textColor: "text-slate-300",
    minDeposit: "$500",
    cashback: "10%",
    benefits: ["10% Daily Cashback", "Priority Support", "Exclusive Games", "Birthday Bonus"],
  },
  {
    name: "Gold",
    icon: Crown,
    color: "from-yellow-400 to-yellow-600",
    borderColor: "border-yellow-400",
    textColor: "text-yellow-400",
    minDeposit: "$2,000",
    cashback: "15%",
    benefits: ["15% Daily Cashback", "VIP Support 24/7", "Higher Limits", "Personal Manager", "Special Events"],
  },
  {
    name: "Diamond",
    icon: Trophy,
    color: "from-cyan-300 to-blue-500",
    borderColor: "border-cyan-300",
    textColor: "text-cyan-300",
    minDeposit: "$10,000",
    cashback: "25%",
    benefits: [
      "25% Daily Cashback",
      "Dedicated VIP Host",
      "Unlimited Withdrawals",
      "Luxury Gifts",
      "Exclusive Tournaments",
      "Custom Bonuses",
    ],
  },
]

export function VipSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Crown className="w-7 h-7 text-yellow-400" />
          <h2 className="text-2xl font-bold text-white">VIP Loyalty Program</h2>
        </div>

        {/* VIP Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vipTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`
                relative bg-card rounded-2xl p-6 border-2 ${tier.borderColor}
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${index === 3 ? "lg:ring-2 lg:ring-cyan-300/50 lg:shadow-cyan-300/20 lg:shadow-xl" : ""}
              `}
            >
              {/* Popular badge for Diamond */}
              {index === 3 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST VALUE
                </div>
              )}

              {/* Tier Icon */}
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-4`}
              >
                <tier.icon className="w-8 h-8 text-white" />
              </div>

              {/* Tier Name */}
              <h3 className={`text-xl font-bold text-center mb-2 ${tier.textColor}`}>{tier.name}</h3>

              {/* Min Deposit */}
              <p className="text-muted-foreground text-sm text-center mb-4">Min. Deposit: {tier.minDeposit}</p>

              {/* Cashback Rate */}
              <div className="bg-secondary/50 rounded-xl p-3 mb-4 text-center">
                <span className="text-muted-foreground text-sm">Daily Cashback</span>
                <p className={`text-2xl font-bold ${tier.textColor}`}>{tier.cashback}</p>
              </div>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {tier.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className={`w-4 h-4 ${tier.textColor} flex-shrink-0`} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`
                  w-full py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r ${tier.color} 
                  hover:opacity-90 transition-opacity
                  flex items-center justify-center gap-2
                `}
              >
                <span>Join {tier.name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* VIP Benefits Banner */}
        <div className="mt-10 bg-gradient-to-r from-primary/20 via-card to-primary/20 border border-primary/30 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
                <Gift className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Unlock Exclusive Rewards</h3>
                <p className="text-muted-foreground">Level up your VIP status and enjoy premium benefits</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-pink-600 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap">
              View All Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
