"use client"

import { motion } from "framer-motion"
import { UserCircle, Gift, Sparkles, Zap, Shield, Bell, Settings, ChevronRight } from "lucide-react"
import { HexGridBackground } from "@/components/backgrounds/hex-grid-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PersonalizedServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HexGridBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-primary/10 bg-background/50 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="flex items-center gap-2 text-xl font-bold text-primary">
                <Sparkles className="h-5 w-5" />
                Personalized Services
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8">
          {/* User Profile Summary */}
          <Card className="mb-8 border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-4">
                  <UserCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-primary">Welcome back, Alex</h2>
                  <p className="text-sm text-primary/70">Premium Member</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary/70">Loyalty Points</span>
                  <span className="text-sm font-bold text-primary">2,450</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-primary/60">535 points until next reward</p>
              </div>
            </CardContent>
          </Card>

          {/* Service Categories */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Premium Benefits",
                description: "Exclusive rewards and perks",
                icon: Gift,
                color: "bg-purple-500/10 text-purple-500",
              },
              {
                title: "Smart Insights",
                description: "AI-powered financial advice",
                icon: Zap,
                color: "bg-yellow-500/10 text-yellow-500",
              },
              {
                title: "Security Suite",
                description: "Advanced protection services",
                icon: Shield,
                color: "bg-green-500/10 text-green-500",
              },
              {
                title: "Custom Solutions",
                description: "Tailored financial products",
                icon: Sparkles,
                color: "bg-blue-500/10 text-blue-500",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-primary/10 bg-background/50 backdrop-blur-xl transition-colors hover:bg-primary/5">
                  <CardContent className="flex cursor-pointer flex-col gap-4 p-6">
                    <div className={`w-fit rounded-full p-3 ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{category.title}</h3>
                      <p className="text-sm text-primary/70">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Personalized Recommendations */}
          <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-primary">Recommended for You</CardTitle>
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex cursor-pointer items-center gap-4 rounded-lg border border-primary/10 bg-background/50 p-4 transition-colors hover:bg-primary/5"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-primary">{recommendation.title}</h3>
                        <span className={`rounded-full px-2 py-1 text-xs ${recommendation.tagColor}`}>
                          {recommendation.tag}
                        </span>
                      </div>
                      <p className="text-sm text-primary/70">{recommendation.description}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-primary/40" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

