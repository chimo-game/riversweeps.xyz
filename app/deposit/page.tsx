"use client"

import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { LoadingOverlay } from "@/components/loading-overlay"
import {
  DollarSign,
  Bitcoin,
  Gift,
  Shield,
  Zap,
  ChevronRight,
  Check,
  Copy,
  CheckCircle2,
  Coins,
  UserCircle,
} from "lucide-react"

const depositAmounts = [10, 25, 50, 100, 250, 500]

const paymentMethods = [
  {
    id: "btc",
    name: "Bitcoin",
    logo: "/crypto_icons/bitcoin-btc-logo.svg",
    badge: "Bitcoin Network",
    address: "bc1qheujxha5h8evndpcfuf5hpstrg67ppjpkq8l0y",
    qr: "/crypto_qr/BTC_QR.png",
  },
  {
    id: "sol",
    name: "Solana",
    logo: "/crypto_icons/solana-sol-logo.svg",
    badge: "Solana Network",
    address: "J79NUawUXcr5EPWwz8gEXPw3LLALm1DDTVqSPXbzw94i",
    qr: "/crypto_qr/Solana_QR.jpg",
  },
  {
    id: "xrp",
    name: "XRP",
    logo: "/crypto_icons/xrp_logo.svg",
    badge: "XRP Network",
    address: "raj4giHrQxmJYwTnHRBZWQLobDUmp4EREk",
    qr: "/crypto_qr/XRP_QR.jpg",
  },
  {
    id: "doge",
    name: "Doge Coin",
    logo: "/crypto_icons/dogecoin-doge-logo.svg",
    badge: "Dogecoin Network",
    address: "DMq4YifKuUUc2sSUEHKgo2hq8R1fVeiqKD",
    qr: "/crypto_qr/Doge_QR.png",
  },
  {
    id: "bnb",
    name: "BNB",
    logo: "/crypto_icons/bnb-bnb-logo.svg",
    badge: "BNB Smart Chain",
    address: "0x892167B555Cc2C6c4505ca9d782cb128Edfb58fa",
    qr: "/crypto_qr/BNB_QR.jpg",
  },
  {
    id: "tron",
    name: "Tron",
    logo: "/crypto_icons/tron-trx-logo.svg",
    badge: "TRON Network",
    address: "TUsKCntkhEdgbTU71x3UzFQxHziyuQCjor",
    qr: "/crypto_qr/Tron_QR.jpg",
  },
  {
    id: "usdt",
    name: "USDT",
    logo: "/crypto_icons/tether-usdt-logo.svg",
    badge: "BNB Smart Chain",
    address: "0x9c1fff5158a14bded845fb4b2c53edc64bed6e66",
    qr: "/crypto_qr/USDT_QR.jpg",
  },
  {
    id: "usdc",
    name: "USDC",
    logo: "/crypto_icons/usd-coin-usdc-logo.svg",
    badge: "BNB Smart Chain",
    address: "0x9c1fff5158a14bded845fb4b2c53edc64bed6e66",
    qr: "/crypto_qr/USDC_QR.jpg",
  },
]

export default function DepositPage() {
  const router = useRouter()
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedMethod, setSelectedMethod] = useState("btc")
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState("")
  const [pin, setPin] = useState("")
  const [formError, setFormError] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const finalAmount = customAmount ? Number.parseFloat(customAmount) : selectedAmount

  const isUsernameValid = useMemo(() => username.trim().length > 0, [username])
  const isValidPin = useMemo(() => /^\d{2}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}$/.test(pin), [pin])

  const loadingMessages = [
    "Connecting to payment gateway...",
    "Verifying payment details...",
    "Processing transaction...",
    "Adding credits to your account...",
    "Success!",
  ]

  const handlePinInput = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 12)
    const parts = [
      digitsOnly.slice(0, 2),
      digitsOnly.slice(2, 4),
      digitsOnly.slice(4, 6),
      digitsOnly.slice(6, 8),
      digitsOnly.slice(8, 10),
      digitsOnly.slice(10, 12),
    ].filter(Boolean)
    setPin(parts.join("-"))
  }

  const handleDeposit = () => {
    const trimmedUsername = username.trim()

    if (!finalAmount || finalAmount <= 0) {
      setFormError("សូមបញ្ចូលចំនួនទឹកប្រាក់សម្រាប់ដាក់ប្រាក់។")
      return
    }

    if (!trimmedUsername) {
      setFormError("សូមបញ្ចូលឈ្មោះអ្នកប្រើប្រាស់របស់អ្នក។")
      return
    }

    if (!isValidPin) {
      setFormError("PIN must be 12 digits in the format ##-##-##-##-##-##.")
      return
    }

    setFormError(null)
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
                <UserCircle className="w-5 h-5 text-primary" />
                Account Details
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-white mb-2">Username</label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-12"
                  />
                  {isUsernameValid && (
                    <Check className="w-4 h-4 text-green-400 absolute right-4 top-[42px]" aria-hidden="true" />
                  )}
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-white mb-2">PIN (12 digits)</label>
                  <input
                    value={pin}
                    onChange={(e) => handlePinInput(e.target.value)}
                    placeholder="12-34-56-78-90-12"
                    inputMode="numeric"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-12"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Use format ##-##-##-##-##-## (12 digits total)</p>
                  {isValidPin && (
                    <Check className="w-4 h-4 text-green-400 absolute right-4 top-[42px]" aria-hidden="true" />
                  )}
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Bitcoin className="w-5 h-5 text-primary" />
                Crypto Payment Method
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {paymentMethods.map((method) => {
                  const isActive = selectedMethod === method.id
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all text-left ${
                        isActive
                          ? "bg-gradient-to-r from-primary/15 to-primary/5 border-2 border-primary shadow-lg shadow-primary/20"
                          : "bg-secondary/70 border border-border hover:border-primary/40 hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                            isActive ? "bg-white border-primary/40" : "bg-white/90 border-border"
                          }`}
                        >
                          <Image
                            src={method.logo}
                            alt={method.name}
                            width={26}
                            height={26}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="text-white font-semibold leading-tight">{method.name}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-semibold bg-white/5 text-muted-foreground border border-border">
                              {method.badge}
                            </span>
                            <span className="text-[10px] text-muted-foreground uppercase">Crypto</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          isActive ? "border-primary bg-primary" : "border-muted-foreground"
                        }`}
                      >
                        {isActive && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Address & QR */}
            {paymentMethods.find((m) => m.id === selectedMethod) && (
              <div className="bg-card rounded-2xl p-6 border border-border">
                {(() => {
                  const method = paymentMethods.find((m) => m.id === selectedMethod)!
                  return (
                    <div className="grid sm:grid-cols-3 gap-6 items-center">
                      <div className="sm:col-span-2 space-y-3">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          {method.name} Address
                        </h3>
                        <div className="p-4 rounded-xl bg-secondary border border-border">
                          <div className="text-xs text-muted-foreground mb-1">{method.badge}</div>
                          <div className="text-white font-mono break-all text-sm leading-relaxed">{method.address}</div>
                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                navigator.clipboard.writeText(method.address)
                                setCopiedId(method.id)
                                setTimeout(() => setCopiedId(null), 1500)
                              }}
                              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-border text-white text-xs font-semibold hover:bg-white/10 transition-colors"
                            >
                              {copiedId === method.id ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-green-400" /> Copied
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" /> Copy
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-3">
                        <p className="text-center text-xs text-muted-foreground">Scan with your crypto wallet.</p>
                        <div className="w-40 h-40 relative rounded-xl overflow-hidden bg-secondary border border-border">
                          <Image src={method.qr} alt={`${method.name} QR`} fill className="object-cover" />
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

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

              {formError && (
                <div className="mb-4 px-3 py-2 rounded-lg border border-red-500/50 bg-red-500/10 text-red-200 text-sm">
                  {formError}
                </div>
              )}

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
                disabled={isLoading || !finalAmount || !username.trim() || !isValidPin}
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
