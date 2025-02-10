"use client"

import { motion } from "framer-motion"
import { Activity, AlertTriangle, Shield, TrendingUp } from "lucide-react"
import { CircuitBackground } from "@/components/backgrounds/circuit-background"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FraudScoringPage() {
  return (
    <Layout>
      <div className="relative">
        <CircuitBackground />
        <div className="relative z-10">
          <div className="container px-4 py-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">
                <Activity className="h-6 w-6" />
                Real-Time Fraud Scoring
              </h1>
              <Button className="gap-2">
                <Shield className="h-4 w-4" />
                Update Rules
              </Button>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-4">
              {[
                {
                  title: "Active Sessions",
                  value: "1,247",
                  change: "+12%",
                  icon: Activity,
                },
                {
                  title: "High Risk Alerts",
                  value: "23",
                  change: "-5%",
                  icon: AlertTriangle,
                },
                {
                  title: "Average Score",
                  value: "82/100",
                  change: "+3",
                  icon: TrendingUp,
                },
                {
                  title: "Blocked Attempts",
                  value: "156",
                  change: "+8%",
                  icon: Shield,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-primary/90">{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <p className="text-xs text-primary/70">{stat.change} from last month</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mb-8 border-primary/10 bg-background/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-primary">Live Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      id: "TX-789",
                      type: "Card Payment",
                      amount: "$1,250",
                      score: 85,
                      risk: "low",
                      location: "New York, US",
                      time: "Just now",
                    },
                    {
                      id: "TX-788",
                      type: "Wire Transfer",
                      amount: "$5,000",
                      score: 45,
                      risk: "high",
                      location: "Unknown",
                      time: "2 min ago",
                    },
                    {
                      id: "TX-787",
                      type: "Login Attempt",
                      amount: "N/A",
                      score: 65,
                      risk: "medium",
                      location: "London, UK",
                      time: "5 min ago",
                    },
                  ].map((transaction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="rounded-lg border border-primary/10 bg-background/50 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-primary">{transaction.type}</h3>
                            <span className="text-sm text-primary/70">{transaction.id}</span>
                          </div>
                          <p className="text-sm text-primary/70">{transaction.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-primary">{transaction.amount}</div>
                          <p className="text-xs text-primary/70">{transaction.time}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-sm text-primary/70">Risk Score</span>
                          <span
                            className={`rounded-full px-2 py-1 text-xs ${
                              transaction.risk === "high"
                                ? "bg-red-500/10 text-red-500"
                                : transaction.risk === "medium"
                                  ? "bg-yellow-500/10 text-yellow-500"
                                  : "bg-green-500/10 text-green-500"
                            }`}
                          >
                            {transaction.score}/100
                          </span>
                        </div>
                        <Progress value={transaction.score} className="h-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

