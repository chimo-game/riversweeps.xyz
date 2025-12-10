"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { LoadingOverlay } from "@/components/loading-overlay"
import { CreditCard, DollarSign, Bitcoin, Smartphone, Gift, Shield, Zap, ChevronRight, Check } from "lucide-react"

const depositAmounts = [10, 25, 50, 100, 250, 500]

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, badge: "Instant" },
  { id: "crypto", name: "Cryptocurrency", icon: Bitcoin, badge: "0% Fee" },
  { id: "cashapp", name: "Cash App", icon: Smartphone, badge: "Popular" },
]

export default function DepositPage() {
  const router = useRouter()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("card")
  const [isLoading, setIsLoading] = useState(false)

  const finalAmount = customAmount ? Number.parseFloat(customAmount) : selectedAmount

  const loadingMessages = [
    "Connecting to payment gateway...",
    "Verifying payment details...",
    "Processing transaction...",
    "Adding credits to your account...",
    "Success!",
  ]

  const handleDeposit = () => {
    setIsLoading(true)
  }

  const handleLoadingComplete = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background">
      <LoadingOverlay isLoading={isLoading} messages={loadingMessages} onComplete={handleLoadingComplete} />

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">
            <span className="rainbow-text">Deposit Funds</span>
          </h1>
          <p className="text-muted-foreground text-lg">Add funds to your account and start playing instantly</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Select Amount
              </h2>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
                {depositAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount)
                      setCustomAmount("")
                    }}
                    className={`py-3 px-4 rounded-xl font-bold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? "bg-gradient-to-r from-primary to-pink-600 text-white shadow-lg shadow-primary/30"
                        : "bg-secondary text-white hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setSelectedAmount(null)
                  }}
                  placeholder="Enter custom amount"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-lg"
                />
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" />
                Payment Method
              </h2>

              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
                      selectedMethod === method.id
                        ? "bg-gradient-to-r from-primary/20 to-pink-600/20 border-2 border-primary"
                        : "bg-secondary border border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          selectedMethod === method.id ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-white font-semibold">{method.name}</div>
                        <div className="text-muted-foreground text-sm">{method.badge}</div>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedMethod === method.id ? "border-primary bg-primary" : "border-muted-foreground"
                      }`}
                    >
                      {selectedMethod === method.id && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedMethod === "card" && (
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-xl font-bold text-white mb-4">Card Details</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Deposit Amount</span>
                  <span className="text-white font-semibold">${finalAmount || 0}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Bonus (100%)</span>
                  <span className="text-green-500 font-semibold">+${finalAmount || 0}</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between text-white">
                  <span className="font-semibold">Total Credits</span>
                  <span className="text-2xl font-bold text-primary">${(finalAmount || 0) * 2}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3">
                  <Gift className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="text-green-500 font-bold">100% BONUS</div>
                    <div className="text-muted-foreground text-sm">Double your first deposit!</div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDeposit}
                disabled={isLoading || !finalAmount}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                DEPOSIT ${finalAmount || 0}
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span>Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
