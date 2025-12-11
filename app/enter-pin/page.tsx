"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export default function EnterPinPage() {
  const [pin, setPin] = useState("")
  const [remember, setRemember] = useState(false)

  const handleNumberClick = (num: string) => {
    if (pin.replace(/-/g, "").length < 12) {
      const newPinRaw = pin.replace(/-/g, "") + num
      const formatted = formatPin(newPinRaw)
      setPin(formatted)
    }
  }

  const formatPin = (raw: string) => {
    const chunks = []
    for (let i = 0; i < raw.length; i += 2) {
      chunks.push(raw.substring(i, i + 2))
    }
    return chunks.join("-")
  }

  const handleClear = () => {
    setPin("")
  }

  const handleSubmit = () => {
    console.log("Submitting PIN:", pin)
  }

  return (
    <div className="min-h-screen w-full bg-[#050b14] overflow-hidden relative flex flex-col items-center justify-center font-sans selection:bg-cyan-500/30">
      {/* --- Background Elements --- */}
      
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010115] via-[#050520] to-[#0a1045] z-0" />

      {/* City Skyline Silhouette */}
      <div className="absolute bottom-[35%] left-0 right-0 h-64 flex items-end justify-center px-4 opacity-80 z-0 gap-1 pointer-events-none">
          {/* Building Generator */}
          {[...Array(25)].map((_, i) => {
             const height = Math.random() * 60 + 20 + "%"
             const width = Math.random() * 3 + 2 + "%"
             const hasWindows = Math.random() > 0.3
             return (
               <div 
                 key={i} 
                 className="bg-[#020410] relative"
                 style={{
                   width: width,
                   height: height,
                   boxShadow: '0 0 20px rgba(0, 50, 200, 0.1)'
                 }}
               >
                  {/* Windows */}
                  {hasWindows && (
                    <div className="flex flex-wrap gap-[3px] p-1 content-start w-full h-full overflow-hidden opacity-50">
                       {[...Array(Math.floor(Math.random() * 10) + 2)].map((_, j) => (
                         <div key={j} className={`w-[2px] h-[2px] md:w-[3px] md:h-[3px] rounded-full ${Math.random() > 0.6 ? 'bg-cyan-400' : 'bg-[#1a1a40]'}`} />
                       ))}
                    </div>
                  )}
               </div>
             )
          })}
      </div>

      {/* Retro Grid Floor */}
      <div 
        className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[55%] z-10"
        style={{
          background: `
            linear-gradient(transparent 0%, rgba(4, 59, 168, 0.6) 1px, transparent 2px),
            linear-gradient(90deg, transparent 0%, rgba(4, 59, 168, 0.6) 1px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
          boxShadow: 'inset 0 0 100px #000'
        }}
      />

      {/* Horizon Glow Line */}
      <div className="absolute top-[65%] left-0 right-0 h-1 bg-cyan-500 blur-md opacity-40 z-10" />


      {/* --- Main Content --- */}
      <div className="relative z-30 w-full max-w-md px-4 flex flex-col items-center mt-16 md:mt-0">
        
        {/* Title */}
        <h1 
          className="text-4xl md:text-5xl font-black text-white mb-6 tracking-wide text-center"
          style={{ 
            textShadow: `
              0 0 5px #0066ff,
              0 0 10px #0066ff,
              0 0 20px #00c3ff
            `,
            fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
          }}
        >
          Enter your pin
        </h1>

        {/* PIN Input Display - Pill Shape */}
        <div className="w-full relative mb-8">
            <div className="relative w-full h-16 bg-[#0a0a25] border-2 border-[#8b5cf6] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5),inset_0_0_20px_rgba(0,0,0,0.8)]">
                <span 
                  className="text-2xl md:text-3xl font-bold text-white tracking-widest z-10"
                  style={{ textShadow: '0 0 10px rgba(255, 255, 255, 1)' }}
                >
                    {pin || "00-00-00-00-00-00"}
                </span>
            </div>
        </div>

        {/* Keypad - Pill Shaped Buttons */}
        <div className="grid grid-cols-3 gap-x-4 gap-y-5 w-full mb-8">
            {/* Number Buttons */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <button
                    key={num}
                    onClick={() => handleNumberClick(num.toString())}
                    className="
                      h-14 rounded-full text-2xl font-bold text-white transition-all
                      bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]
                      border-t-[3px] border-l-2 border-r-2 border-b-[3px]
                      border-t-cyan-300 border-l-blue-500 border-r-blue-500 border-b-blue-800
                      shadow-[0_0_20px_rgba(6,182,212,0.6),inset_0_2px_10px_rgba(255,255,255,0.4)]
                      hover:brightness-110 active:scale-95
                    "
                    style={{ textShadow: '0 2px 2px rgba(0,0,0,0.8)' }}
                >
                    {num}
                </button>
            ))}
            
            {/* C Button - Pink/Magenta */}
            <button
                onClick={handleClear}
                className="
                  h-14 rounded-full text-2xl font-bold text-white transition-all
                  bg-gradient-to-b from-[#e879f9] via-[#d946ef] to-[#a21caf]
                  border-t-[3px] border-l-2 border-r-2 border-b-[3px]
                  border-t-fuchsia-300 border-l-fuchsia-500 border-r-fuchsia-500 border-b-fuchsia-800
                  shadow-[0_0_20px_rgba(232,121,249,0.6),inset_0_2px_10px_rgba(255,255,255,0.4)]
                  hover:brightness-110 active:scale-95
                "
                style={{ textShadow: '0 2px 2px rgba(0,0,0,0.8)' }}
            >
                C
            </button>

            {/* 0 Button - Blue */}
            <button
                onClick={() => handleNumberClick("0")}
                className="
                  h-14 rounded-full text-2xl font-bold text-white transition-all
                  bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]
                  border-t-[3px] border-l-2 border-r-2 border-b-[3px]
                  border-t-cyan-300 border-l-blue-500 border-r-blue-500 border-b-blue-800
                  shadow-[0_0_20px_rgba(6,182,212,0.6),inset_0_2px_10px_rgba(255,255,255,0.4)]
                  hover:brightness-110 active:scale-95
                "
                style={{ textShadow: '0 2px 2px rgba(0,0,0,0.8)' }}
            >
                0
            </button>

            {/* OK Button - Lime/Green */}
            <button
                onClick={handleSubmit}
                className="
                  h-14 rounded-full text-2xl font-bold text-white transition-all
                  bg-gradient-to-b from-[#4ade80] via-[#22c55e] to-[#15803d]
                  border-t-[3px] border-l-2 border-r-2 border-b-[3px]
                  border-t-lime-300 border-l-green-500 border-r-green-500 border-b-green-800
                  shadow-[0_0_20px_rgba(74,222,128,0.6),inset_0_2px_10px_rgba(255,255,255,0.4)]
                  hover:brightness-110 active:scale-95
                "
                style={{ textShadow: '0 2px 2px rgba(0,0,0,0.8)' }}
            >
                OK
            </button>
        </div>

        {/* Checkbox */}
        <button 
            onClick={() => setRemember(!remember)}
            className="flex items-center gap-3 text-white cursor-pointer group hover:scale-105 transition-transform"
        >
            <div 
              className={`
                w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300
                ${remember 
                  ? 'bg-lime-500 border-lime-400 shadow-[0_0_10px_rgba(132,204,22,0.8)]' 
                  : 'bg-transparent border-[#8b5cf6] shadow-[0_0_5px_rgba(139,92,246,0.5)]'
                }
              `}
            >
                {remember && <Check className="w-4 h-4 text-white stroke-[4]" />}
            </div>
            <span className="text-lg font-bold tracking-wide text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                Remember my pin
            </span>
        </button>
      </div>
    </div>
  )
}
