"use client"

import { useEffect, useRef } from "react"

export function DataStreamBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Stream {
      x: number
      y: number
      speed: number
      characters: string[]
      opacity: number

      constructor(x: number, y: number, speed: number) {
        this.x = x
        this.y = y
        this.speed = speed
        this.characters = "01".split("")
        this.opacity = Math.random() * 0.5 + 0.5
      }

      draw() {
        const char = this.characters[Math.floor(Math.random() * this.characters.length)]
        ctx!.fillStyle = `rgba(0, 255, 255, ${this.opacity})`
        ctx!.font = "12px monospace"
        ctx!.fillText(char, this.x, this.y)

        if (this.y > canvas.height) {
          this.y = 0
          this.opacity = Math.random() * 0.5 + 0.5
        } else {
          this.y += this.speed
        }
      }
    }

    const streams: Stream[] = []
    const streamCount = Math.floor(canvas.width / 20)

    for (let i = 0; i < streamCount; i++) {
      streams.push(new Stream(i * 20, Math.random() * canvas.height, Math.random() * 3 + 1))
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      streams.forEach((stream) => stream.draw())
      requestAnimationFrame(draw)
    }

    const animation = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animation)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 opacity-30" />
}

