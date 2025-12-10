import Image from "next/image"

export function PromotionsSection() {
  const promotions = [
    {
      title: "DAILY",
      subtitle: "WHEEL",
      gradient: "from-blue-600 to-blue-800",
      image: "/spinning-wheel-fortune-game.jpg",
    },
    {
      title: "FISH",
      subtitle: "TOURNAMENT",
      gradient: "from-purple-600 to-blue-700",
      image: "/golden-fish-tournament-game.jpg",
    },
    {
      title: "CASHBACK",
      subtitle: "WHEEL",
      gradient: "from-pink-600 to-purple-700",
      image: "/cashback-money-wheel.jpg",
    },
    {
      title: "INVITE",
      subtitle: "FRIEND",
      gradient: "from-green-600 to-teal-700",
      image: "/friends-referral-bonus.jpg",
    },
  ]

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6H4V4h16v2zm-8 4l-4-4H4l4 4l-4 4h4l4-4zm4 8H4v2h12v-2z" />
          </svg>
          <h2 className="text-2xl font-bold text-white">Promotions</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${promo.gradient} p-6 h-48 cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">{promo.title}</h3>
                <p className="text-xl font-bold text-primary">{promo.subtitle}</p>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-80">
                <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
