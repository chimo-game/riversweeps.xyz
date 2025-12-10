"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Minimize2 } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "support"
  time: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! Welcome to RiverSweeps support. How can I help you today?",
    sender: "support",
    time: "Just now",
  },
]

const quickReplies = ["Deposit Issue", "Withdrawal Help", "Bonus Question", "Account Problem"]

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
      time: "Just now",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate support response
    setTimeout(() => {
      setIsTyping(false)
      const responses = [
        "Thank you for reaching out! Let me look into that for you.",
        "I understand your concern. Our team is here to help 24/7.",
        "I'll connect you with a specialist who can assist with this.",
        "That's a great question! Let me provide you with more information.",
      ]
      const supportMessage: Message = {
        id: Date.now() + 1,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "support",
        time: "Just now",
      }
      setMessages((prev) => [...prev, supportMessage])
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    sendMessage(reply)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-4 bottom-44 md:bottom-24 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed right-4 z-50 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${
            isMinimized ? "bottom-4 w-72 h-14" : "bottom-4 w-80 md:w-96 h-[500px]"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Live Support</h3>
                <p className="text-white/80 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  Online - Avg. reply: 2 min
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="h-[340px] overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.sender === "user" ? "bg-primary text-white" : "bg-secondary text-white"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-60 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                        <span
                          className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <span
                          className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage(inputValue)}
                    placeholder="Type a message..."
                    className="flex-1 bg-secondary rounded-xl px-4 py-2 text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={() => sendMessage(inputValue)}
                    className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}
