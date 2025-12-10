import { Crown, Headphones, Gift, Megaphone } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Crown,
      title: "HD games",
      description: "Experience the wow: Only epic wins in our epic games!",
      color: "text-orange-400",
    },
    {
      icon: Headphones,
      title: "Customer support",
      description: "Need Help? Our Support Team is just a click away, 24/7!",
      color: "text-green-400",
    },
    {
      icon: Gift,
      title: "Daily offers",
      description: "Get extra entries with your purchases - simply too good to miss!",
      color: "text-pink-400",
    },
    {
      icon: Megaphone,
      title: "Promotions",
      description: "Here, fun and rewards never stop. Discover our promos!",
      color: "text-teal-400",
    },
  ]

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Gift className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-white">TOP Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 dotted-pattern flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-secondary ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
