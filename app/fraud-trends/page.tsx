"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertTriangle, BarChart, PieChart, Download } from "lucide-react"
import { MatrixBackground } from "@/components/backgrounds/matrix-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FraudTrendsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <div className="relative z-10 container px-4 py-8">
        <motion.div
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }} // Faster animation
        >
          <h1 className="flex items-center gap-2 text-2xl font-bold text-[#00f2fe]">
            <TrendingUp className="h-6 w-6" />
            Fraud Trend Analysis
          </h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }} // Faster animation
          >
            <Button className="gap-2 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/10">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </motion.div>
        </motion.div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Total Fraud Attempts",
              value: "1,247",
              change: "+12%",
              icon: AlertTriangle,
              color: "text-red-500",
            },
            {
              title: "Prevention Rate",
              value: "98.5%",
              change: "+0.5%",
              icon: BarChart,
              color: "text-[#00f2fe]",
            },
            {
              title: "Average Loss Prevention",
              value: "₹125K", // Changed to rupees
              change: "+15%",
              icon: PieChart,
              color: "text-[#00f2fe]",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }} // Faster animation
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
          transition={{ delay: 0.15 }} // Faster animation
        >
          <Card className="mb-8 border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-[1.005] transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-[#00f2fe]">Fraud Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    category: "Identity Theft",
                    count: 456,
                    percentage: 35,
                    trend: "increasing",
                  },
                  {
                    category: "Transaction Fraud",
                    count: 312,
                    percentage: 25,
                    trend: "stable",
                  },
                  {
                    category: "Account Takeover",
                    count: 289,
                    percentage: 20,
                    trend: "decreasing",
                  },
                  {
                    category: "Card Fraud",
                    count: 190,
                    percentage: 15,
                    trend: "stable",
                  },
                ].map((category, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.03 }} // Faster animation
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-[#00f2fe]/10 bg-background/50 p-4 backdrop-blur-xl hover:shadow-[0_0_15px_#00f2fe] transition-all duration-200"
                    >
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-medium text-[#00f2fe]">{category.category}</h3>
                      <span className="text-sm text-[#00f2fe]/70">{category.count} cases</span>
                    </div>
                    <Progress 
                      value={category.percentage} 
                      className={`h-2 bg-[#00f2fe]/10 ${
                        category.trend === "increasing" 
                          ? "indicator-red" 
                          : category.trend === "decreasing" 
                            ? "indicator-green" 
                            : "indicator-default"
                      }`}
                    />
                    <div className="mt-1 flex items-center justify-between text-xs">
                      <span className="text-[#00f2fe]/70">{category.percentage}%</span>
                      <span
                        className={
                          category.trend === "increasing"
                            ? "text-red-500"
                            : category.trend === "decreasing"
                              ? "text-green-500"
                              : "text-[#00f2fe]/70"
                        }
                      >
                        {category.trend}
                      </span>
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