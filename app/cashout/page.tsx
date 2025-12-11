"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { LoadingOverlay } from "@/components/loading-overlay"
import {
  Wallet,
  DollarSign,
  Bitcoin,
  Smartphone,
  Building,
  ChevronRight,
  Check,
  Clock,
  AlertCircle,
} from "lucide-react"

const withdrawMethods = [
  { id: "bank", name: "Bank Transfer", icon: Building, time: "1-3 business days", min: 50 },
  { id: "crypto", name: "Cryptocurrency", icon: Bitcoin, time: "Within 24 hours", min: 20 },
  { id: "cashapp", name: "Cash App", icon: Smartphone, time: "Within 24 hours", min: 25 },
]

export default function CashoutPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("bank")
  const [isLoading, setIsLoading] = useState(false)

  const balance = 1250.0
  const pendingWithdrawals = 150.0
  const availableBalance = balance - pendingWithdrawals

  const loadingMessages = [
    "Verifying account...",
    "Checking withdrawal limits...",
    "Processing your request...",
    "Confirming with payment provider...",
    "Withdrawal submitted!",
  ]

  const handleCashout = () => {
    setIsLoading(true)
  }

  const handleLoadingComplete = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <LoadingOverlay isLoading={isLoading} messages={loadingMessages} onComplete={handleLoadingComplete} />

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">
            <span className="rainbow-text">Cash Out</span>
          </h1>
          <p className="text-muted-foreground text-lg">Withdraw your winnings quickly and securely</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card rounded-2xl p-5 border border-border">
                <div className="text-muted-foreground text-sm mb-1">Total Balance</div>
                <div className="text-3xl font-bold text-white">${balance.toFixed(2)}</div>
              </div>
              <div className="bg-card rounded-2xl p-5 border border-border">
                <div className="text-muted-foreground text-sm mb-1">Pending</div>
                <div className="text-3xl font-bold text-yellow-500">${pendingWithdrawals.toFixed(2)}</div>
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-pink-600/20 rounded-2xl p-5 border border-primary">
                <div className="text-muted-foreground text-sm mb-1">Available</div>
                <div className="text-3xl font-bold text-primary">${availableBalance.toFixed(2)}</div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Withdrawal Amount
              </h2>

              <div className="relative mb-4">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full pl-14 pr-4 py-4 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-2xl font-bold"
                />
              </div>

              <div className="flex gap-3">
                {[50, 100, 250, 500].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setAmount(preset.toString())}
                    className="flex-1 py-2 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/80 border border-border transition-all"
                  >
                    ${preset}
                  </button>
                ))}
                <button
                  onClick={() => setAmount(availableBalance.toString())}
                  className="flex-1 py-2 rounded-lg bg-primary/20 text-primary font-semibold hover:bg-primary/30 border border-primary/50 transition-all"
                >
                  MAX
                </button>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Wallet className="w-5 h-5 text-primary" />
                Withdrawal Method
              </h2>

              <div className="space-y-3">
                {withdrawMethods.map((method) => (
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
                        <div className="text-muted-foreground text-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {method.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-muted-foreground text-sm">Min: ${method.min}</div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 ml-auto ${
                          selectedMethod === method.id ? "border-primary bg-primary" : "border-muted-foreground"
                        }`}
                      >
                        {selectedMethod === method.id && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedMethod === "bank" && (
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h2 className="text-xl font-bold text-white mb-4">Bank Details</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Account Holder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Account Number</label>
                    <input
                      type="text"
                      placeholder="Enter account number"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Routing Number</label>
                    <input
                      type="text"
                      placeholder="Enter routing number"
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-6">
              <h2 className="text-xl font-bold text-white mb-4">Withdrawal Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Withdrawal Amount</span>
                  <span className="text-white font-semibold">${amount || 0}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Processing Fee</span>
                  <span className="text-white font-semibold">$0.00</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between text-white">
                  <span className="font-semibold">You Will Receive</span>
                  <span className="text-2xl font-bold text-green-500">${amount || 0}</span>
                </div>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    Withdrawals are processed within 24-48 hours. Make sure your payment details are correct.
                  </div>
                </div>
              </div>

              <button
                onClick={handleCashout}
                disabled={isLoading || !amount}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-pink-600 text-white font-bold text-lg hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                WITHDRAW NOW
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="text-sm font-semibold text-white mb-3">Recent Withdrawals</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-muted-foreground">$150.00</span>
                    </div>
                    <span className="text-yellow-500">Pending</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-muted-foreground">$300.00</span>
                    </div>
                    <span className="text-green-500">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
