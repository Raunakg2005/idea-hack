"use client"

import { useEffect, useRef } from "react"

export function CircuitBackground() {
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

    class Node {
      x: number
      y: number
      connections: Node[]
      size: number
      pulseOffset: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.connections = []
        this.size = 2
        this.pulseOffset = Math.random() * Math.PI * 2
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height))
    }

    // Connect nodes
    nodes.forEach((node) => {
      const closestNodes = nodes
        .filter((n) => n !== node)
        .sort((a, b) => {
          const distA = Math.hypot(a.x - node.x, a.y - node.y)
          const distB = Math.hypot(b.x - node.x, b.y - node.y)
          return distA - distB
        })
        .slice(0, 3)

      node.connections = closestNodes
    })

    let time = 0
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.02

      // Draw connections
      nodes.forEach((node) => {
        node.connections.forEach((connection) => {
          const pulse = Math.sin(time + node.pulseOffset) * 0.5 + 0.5
          ctx.strokeStyle = `rgba(0, 255, 255, ${pulse})`
          ctx.lineWidth = 2 // Increased line width
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connection.x, connection.y)
          ctx.stroke()
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(time + node.pulseOffset) * 0.5 + 0.5
        ctx.fillStyle = `rgba(0, 255, 255, ${pulse})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
      })

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
