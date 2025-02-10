"use client"

import { motion } from "framer-motion"
import { Activity, AlertTriangle, Shield, TrendingUp } from "lucide-react"
import { CircuitBackground } from "@/components/backgrounds/circuit-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FraudScoringPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CircuitBackground />
      <div className="relative z-10 container px-4 py-8">
        <motion.div
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h1 className="flex items-center gap-2 text-2xl font-bold text-[#00f2fe]">
            <Activity className="h-6 w-6" />
            Real-Time Fraud Scoring
          </h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button className="gap-2 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/10">
              <Shield className="h-4 w-4" />
              Update Rules
            </Button>
          </motion.div>
        </motion.div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            {
              title: "Active Sessions",
              value: "1,247",
              change: "+12%",
              icon: Activity,
              color: "text-[#00f2fe]",
            },
            {
              title: "High Risk Alerts",
              value: "23",
              change: "-5%",
              icon: AlertTriangle,
              color: "text-red-500",
            },
            {
              title: "Average Score",
              value: "82/100",
              change: "+3",
              icon: TrendingUp,
              color: "text-[#00f2fe]",
            },
            {
              title: "Blocked Attempts",
              value: "156",
              change: "+8%",
              icon: Shield,
              color: "text-[#00f2fe]",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#00f2fe]">{stat.title}</CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#00f2fe]">{stat.value}</div>
                  <p className="text-xs text-[#00f2fe]/70">{stat.change} from last month</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card className="mb-8 border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-[1.005] transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-[#00f2fe]">Live Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    id: "TX-789",
                    type: "Card Payment",
                    amount: "₹1,250",
                    score: 85,
                    risk: "low",
                    location: "New York, US",
                    time: "Just now",
                  },
                  {
                    id: "TX-788",
                    type: "Wire Transfer",
                    amount: "₹5,000",
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
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-[#00f2fe]/10 bg-background/50 p-4 backdrop-blur-xl hover:shadow-[0_0_15px_#00f2fe] transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-[#00f2fe]">{transaction.type}</h3>
                          <span className="text-sm text-[#00f2fe]/70">{transaction.id}</span>
                        </div>
                        <p className="text-sm text-[#00f2fe]/70">{transaction.location}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#00f2fe]">{transaction.amount}</div>
                        <p className="text-xs text-[#00f2fe]/70">{transaction.time}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-[#00f2fe]/70">Risk Score</span>
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
                      <Progress 
                        value={transaction.score} 
                        className={`h-2 bg-[#00f2fe]/10 ${
                          transaction.risk === "high" 
                            ? "bg-red-500" 
                            : transaction.risk === "medium" 
                              ? "bg-yellow-500" 
                              : "bg-green-500"
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}