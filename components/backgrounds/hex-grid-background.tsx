"use client"

import { useEffect, useRef } from "react"

export function HexGridBackground() {
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

    const hexSize = 30
    const hexWidth = hexSize * 2
    const hexHeight = Math.sqrt(3) * hexSize
    let time = 0

    const drawHexagon = (x: number, y: number, size: number, time: number) => {
      const vertices = []
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        vertices.push({
          x: x + size * Math.cos(angle),
          y: y + size * Math.sin(angle),
        })
      }

      const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5
      ctx.strokeStyle = `rgba(0, 255, 255, ${pulse * 0.3})`
      ctx.beginPath()
      ctx.moveTo(vertices[0].x, vertices[0].y)
      for (let i = 1; i < vertices.length; i++) {
        ctx.lineTo(vertices[i].x, vertices[i].y)
      }
      ctx.closePath()
      ctx.stroke()
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 1
      const rows = Math.ceil(canvas.height / hexHeight) + 1

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * hexWidth * 0.75
          const y = i * hexHeight + (j % 2) * (hexHeight / 2)
          drawHexagon(x, y, hexSize, time)
        }
      }

      time += 0.02
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

