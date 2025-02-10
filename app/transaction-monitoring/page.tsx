"use client"

import { motion } from "framer-motion"
import { Globe, AlertTriangle, ArrowLeftRight, DollarSign, Map, Activity, Search, Filter } from "lucide-react"
import { MatrixBackground } from "@/components/backgrounds/matrix-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TransactionMonitoringPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-primary/10 bg-background/50 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="flex items-center gap-2 text-xl font-bold text-primary">
                <Globe className="h-5 w-5" />
                Cross-Border Transaction Monitoring
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="asia">Asia Pacific</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="americas">Americas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 gap-4">
              <div className="relative flex-1 md:max-w-[300px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                <Input className="pl-10" placeholder="Search transactions..." type="search" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
            <div className="flex gap-2">
              <Button className="gap-2">
                <Activity className="h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>

          {/* Transaction Stats */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Total Transactions",
                value: "$1.2M",
                change: "+12%",
                icon: ArrowLeftRight,
              },
              {
                title: "High Risk Transfers",
                value: "24",
                change: "-3%",
                icon: AlertTriangle,
              },
              {
                title: "Average Amount",
                value: "$50K",
                change: "+5%",
                icon: DollarSign,
              },
              {
                title: "Active Corridors",
                value: "12",
                change: "0%",
                icon: Map,
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

          {/* Recent Transactions */}
          <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-primary">Recent Cross-Border Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    from: "United States",
                    to: "Japan",
                    amount: "$75,000",
                    status: "completed",
                    risk: "low",
                  },
                  {
                    from: "United Kingdom",
                    to: "Singapore",
                    amount: "$120,000",
                    status: "pending",
                    risk: "medium",
                  },
                  {
                    from: "Germany",
                    to: "India",
                    amount: "$250,000",
                    status: "flagged",
                    risk: "high",
                  },
                ].map((transaction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 rounded-lg border border-primary/10 bg-background/50 p-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <ArrowLeftRight className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary/90">
                          {transaction.from} → {transaction.to}
                        </span>
                      </div>
                      <p className="text-sm text-primary/70">{transaction.amount}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          transaction.risk === "high"
                            ? "bg-red-500/10 text-red-500"
                            : transaction.risk === "medium"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {transaction.risk} risk
                      </span>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </div>
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

