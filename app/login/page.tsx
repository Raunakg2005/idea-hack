"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lock, Mail, Scan } from "lucide-react"
import { ParticleBackground } from "@/components/particle-field"
import { CyberInput } from "@/components/ui/cyber-input"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [isAadhaar, setIsAadhaar] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white">Cyber Bank</h1>
            <p className="mt-2 text-sm text-white/70">Secure Banking for the Digital Age</p>
          </div>

          {/* Login Form */}
          <div className="rounded-lg border border-primary/20 bg-black/50 p-6 backdrop-blur-xl">
            <div className="mb-6 flex justify-between">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 rounded-l-md border-r border-primary/20 p-3 text-sm transition-colors ${
                  !isAadhaar ? "bg-primary/10 text-white" : "text-white/70"
                }`}
                onClick={() => setIsAadhaar(false)}
              >
                Password Login
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 rounded-r-md p-3 text-sm transition-colors ${
                  isAadhaar ? "bg-primary/10 text-white" : "text-white/70"
                }`}
                onClick={() => setIsAadhaar(true)}
              >
                Aadhaar Login
              </motion.button>
            </div>

            <form className="space-y-4">
              <div>
                <CyberInput type="email" placeholder="Email Address" icon={<Mail className="h-4 w-4" />} />
              </div>

              {isAadhaar ? (
                <div className="relative aspect-video rounded-md border border-white/50 bg-primary/50">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <Scan className="h-8 w-8 text-white" />
                    <p className="text-sm text-white/70">Click to scan your face</p>
                  </div>
                </div>
              ) : (
                <div>
                  <CyberInput type="password" placeholder="Password" icon={<Lock className="h-4 w-4" />} />
                </div>
              )}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="h-12 w-full bg-white font-medium text-black transition-shadow hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                >
                  Login Securely
                </Button>
              </motion.div>
            </form>

            <div className="mt-6 flex items-center justify-between">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Forgot Password?
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Create Account
              </motion.a>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <p className="text-xs text-white/50">Protected by Advanced Encryption</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

