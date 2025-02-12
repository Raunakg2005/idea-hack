"use client"

import { motion } from "framer-motion"
import { UserCircle, Gift, Sparkles, Zap, Shield, Bell, Settings, ChevronRight } from "lucide-react"
import { ParticleBackground } from "@/components/particle-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PersonalizedServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <ParticleBackground  />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header 
          className="border-b border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring" }}
        >
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <motion.h1 
                className="flex items-center gap-2 text-xl font-bold text-[#00f2fe]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Sparkles className="h-5 w-5" />
                Personalized Services
              </motion.h1>
            </div>
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="text-[#00f2fe]">
                  <Bell className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Button variant="ghost" size="icon" className="text-[#00f2fe]">
                  <Settings className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="container px-4 py-8">
          {/* User Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="mb-8 border-[#00f2fe]/20 bg-black/50 backdrop-blur-xl">
              <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#00f2fe]/10 p-4">
                    <UserCircle className="h-8 w-8 text-[#00f2fe]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#00f2fe]">Welcome back, Alex</h2>
                    <p className="text-sm text-[#00f2fe]/70">Premium Member</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#00f2fe]/70">Loyalty Points</span>
                    <span className="text-sm font-bold text-[#00f2fe]">2,450</span>
                  </div>
                  <Progress 
                    value={65} 
                    className="h-2 bg-[#00f2fe]/10"
                  />
                  <p className="text-xs text-[#00f2fe]/60">535 points until next reward</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Service Categories */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Premium Benefits",
                description: "Exclusive rewards and perks",
                icon: Gift,
                gradient: "from-purple-600 to-[#00f2fe]",
              },
              {
                title: "Smart Insights",
                description: "AI-powered financial advice",
                icon: Zap,
                gradient: "from-yellow-600 to-[#00f2fe]",
              },
              {
                title: "Security Suite",
                description: "Advanced protection services",
                icon: Shield,
                gradient: "from-green-600 to-[#00f2fe]",
              },
              {
                title: "Custom Solutions",
                description: "Tailored financial products",
                icon: Sparkles,
                gradient: "from-blue-600 to-[#00f2fe]",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-[#00f2fe]/20 bg-black/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-105 transform transition-transform">
                  <CardContent className="flex cursor-pointer flex-col gap-4 p-6">
                    <div className={`w-fit rounded-full bg-gradient-to-br ${category.gradient} p-3`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#00f2fe]">{category.title}</h3>
                      <p className="text-sm text-[#00f2fe]/70">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Personalized Recommendations */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-[#00f2fe]/20 bg-black/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-[#00f2fe]">Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "High-Yield Savings Account",
                      description: "Earn 4.5% APY with our premium savings account",
                      tag: "Trending",
                      tagColor: "bg-green-500/10 text-green-500",
                    },
                    {
                      title: "Investment Portfolio Review",
                      description: "Get a free analysis of your investments",
                      tag: "Premium",
                      tagColor: "bg-purple-500/10 text-purple-500",
                    },
                    {
                      title: "Travel Insurance Bundle",
                      description: "Comprehensive coverage for your next trip",
                      tag: "New",
                      tagColor: "bg-blue-500/10 text-blue-500",
                    },
                  ].map((recommendation, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex cursor-pointer items-center gap-4 rounded-lg border border-[#00f2fe]/20 bg-black/50 p-4 backdrop-blur-xl hover:shadow-[0_0_15px_#00f2fe]/10 hover:border-[#00f2fe]"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-[#00f2fe]">{recommendation.title}</h3>
                          <span className={`rounded-full px-2 py-1 text-xs ${recommendation.tagColor}`}>
                            {recommendation.tag}
                          </span>
                        </div>
                        <p className="text-sm text-[#00f2fe]/70">{recommendation.description}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-[#00f2fe]/40" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}