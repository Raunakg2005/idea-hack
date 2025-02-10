"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertTriangle, BarChart, PieChart, Download } from "lucide-react"
import { MatrixBackground } from "@/components/backgrounds/matrix-background"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function FraudTrendsPage() {
  return (
    <Layout>
      <div className="relative">
        <MatrixBackground />
        <div className="relative z-10">
          <div className="container px-4 py-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">
                <TrendingUp className="h-6 w-6" />
                Fraud Trend Analysis
              </h1>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Export Report
              </Button>
            </div>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Total Fraud Attempts",
                  value: "1,247",
                  change: "+12%",
                  icon: AlertTriangle,
                },
                {
                  title: "Prevention Rate",
                  value: "98.5%",
                  change: "+0.5%",
                  icon: BarChart,
                },
                {
                  title: "Average Loss Prevention",
                  value: "$125K",
                  change: "+15%",
                  icon: PieChart,
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
                <CardTitle className="text-primary">Fraud Categories</CardTitle>
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
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-medium text-primary">{category.category}</h3>
                        <span className="text-sm text-primary/70">{category.count} cases</span>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                      <div className="mt-1 flex items-center justify-between text-xs">
                        <span className="text-primary/70">{category.percentage}%</span>
                        <span
                          className={
                            category.trend === "increasing"
                              ? "text-red-500"
                              : category.trend === "decreasing"
                                ? "text-green-500"
                                : "text-primary/70"
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
          </div>
        </div>
      </div>
    </Layout>
  )
}

