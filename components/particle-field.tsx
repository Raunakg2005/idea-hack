"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"

function ParticleField() {
  const ref = useRef<any>()

  // Create a smaller, controlled set of particles
  const count = 2000
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    // Generate positions in a controlled range (-1 to 1)
    positions[i3] = (Math.random() - 0.5) * 2
    positions[i3 + 1] = (Math.random() - 0.5) * 2
    positions[i3 + 2] = (Math.random() - 0.5) * 2
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00FFFF" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

