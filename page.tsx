"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ValentinePage() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null)
  const [noCount, setNoCount] = useState(0)

  const handleNo = (e: React.MouseEvent) => {
    e.stopPropagation()
    setNoCount(noCount + 1)
    setAnswer("no")
  }

  const handleYes = (e: React.MouseEvent) => {
    e.stopPropagation()
    setAnswer("yes")
  }

  const generateYesButtons = () => {
    const buttons = []
    for (let i = 0; i < noCount + 1; i++) {
      buttons.push(
        <button
          key={i}
          onClick={handleYes}
          className="px-4 py-2 bg-[#e74c3c] text-white rounded-full font-semibold hover:bg-[#c0392b] transition-colors text-sm md:text-base"
        >
          Yes
        </button>,
      )
    }
    return buttons
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#fff5f2]">
      <motion.div
        className="relative w-full max-w-[600px] aspect-[1.6/1] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
      >
        <div
          className={`absolute inset-0 rounded-xl bg-[#e74c3c] shadow-lg p-8 backface-hidden
            ${isFlipped ? "opacity-0" : "opacity-100"}`}
        >
          <div className="absolute top-4 right-4 w-16 h-16">
            <img
              src="https://sjc.microlink.io/Or2qUm1vknZ7kQUIluxpW7W0nrnZ8jSeu1f4af-9lqFn3R2ChftKuqjAzcG1EeRXQXuUav6hRGQx1AHLUKt0RA.jpeg"
              alt="2023 Stamp"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-full flex items-center justify-center">
            <h1 className="text-white font-dancing text-5xl md:text-7xl">For You</h1>
          </div>
        </div>
        <div
          className={`absolute inset-0 rounded-xl bg-white shadow-lg p-8 backface-hidden overflow-y-auto
            ${isFlipped ? "opacity-100" : "opacity-0"}`}
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="h-full flex flex-col items-center justify-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-dancing text-[#e74c3c]">Will you be my Valentine&apos;s?</h2>
            {answer === "yes" ? (
              <p className="text-2xl md:text-3xl font-dancing text-[#e74c3c]">❤️ Yay! Aha man ta Date? 😍❤️</p>
            ) : (
              <div className="flex flex-wrap justify-center gap-4 max-w-[400px]">
                {generateYesButtons()}
                {noCount < 4 && (
                  <button
                    onClick={handleNo}
                    className="px-4 py-2 border-2 border-[#e74c3c] text-[#e74c3c] rounded-full font-semibold hover:bg-[#fff5f2] transition-colors text-sm md:text-base"
                  >
                    No
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

