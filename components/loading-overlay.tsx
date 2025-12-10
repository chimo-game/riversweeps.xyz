"use client"

import { useEffect, useState } from "react"

interface LoadingOverlayProps {
  isLoading: boolean
  messages: string[]
  onComplete?: () => void
}

export function LoadingOverlay({ isLoading, messages, onComplete }: LoadingOverlayProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setCurrentMessageIndex(0)
      setProgress(0)
      return
    }

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Message cycling
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= messages.length - 1) {
          return prev
        }
        return prev + 1
      })
    }, 1000)

    // Complete after all messages shown
    const completeTimeout = setTimeout(
      () => {
        if (onComplete) {
          onComplete()
        }
      },
      messages.length * 1000 + 500,
    )

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
      clearTimeout(completeTimeout)
    }
  }, [isLoading, messages, onComplete])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Animated Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
          {/* Inner pulsing circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-pink-600 animate-pulse flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold text-white mb-2 transition-all duration-300">
          {messages[currentMessageIndex]}
        </h2>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-primary to-pink-600 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Step indicators */}
        <div className="flex justify-center gap-2">
          {messages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentMessageIndex ? "bg-primary" : "bg-secondary"
              }`}
            ></div>
          ))}
        </div>

        {/* Security badge */}
        <p className="text-muted-foreground text-sm mt-6 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          Secure connection
        </p>
      </div>
    </div>
  )
}
