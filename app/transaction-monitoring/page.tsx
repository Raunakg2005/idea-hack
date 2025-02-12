"use client"

import { motion } from "framer-motion"
import { Globe, AlertTriangle, ArrowLeftRight, DollarSign, Map, Activity, Search, Filter } from "lucide-react"
import { ParticleBackground } from "@/components/particle-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TransactionMonitoringPage() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        <motion.header
          className="border-b border-[#00f2fe]/10 bg-black/80 backdrop-blur-xl"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <motion.h1 
                className="flex items-center gap-2 text-xl font-bold text-[#00f2fe]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Globe className="h-5 w-5" />
                Cross-Border Transaction Monitoring
              </motion.h1>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-[#00f2fe]/20 text-[#00f2fe]">
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#00f2fe]/20">
                  <SelectItem value="all" className="hover:bg-[#00f2fe]/10">All Regions</SelectItem>
                  <SelectItem value="asia" className="hover:bg-[#00f2fe]/10">Asia Pacific</SelectItem>
                  <SelectItem value="europe" className="hover:bg-[#00f2fe]/10">Europe</SelectItem>
                  <SelectItem value="americas" className="hover:bg-[#00f2fe]/10">Americas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.header>

        <motion.main
          className="container px-4 py-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 gap-4">
              <motion.div 
                className="relative flex-1 md:max-w-[300px]"
                initial={{ x: -20 }}
                animate={{ x: 0 }}
              >
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00f2fe]/50" />
                <Input className="pl-10 border-[#00f2fe]/20" placeholder="Search transactions..." type="search" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button variant="outline" className="gap-2 border-[#00f2fe] text-[#00f2fe] hover:bg-[#00f2fe]/10 hover:border-[#00f2fe] hover:shadow-[0_0_10px_#00f2fe]">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </motion.div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button className="gap-2 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/20 hover:shadow-[0_0_10px_#00f2fe]">
                <Activity className="h-4 w-4" />
                Generate Report
              </Button>
            </motion.div>
          </div>

          {/* Transaction Stats */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Total Transactions",
                value: "$1.2M",
                change: "+12%",
                icon: ArrowLeftRight,
                color: "from-[#00f2fe] to-[#00a3ff]",
              },
              {
                title: "High Risk Transfers",
                value: "24",
                change: "-3%",
                icon: AlertTriangle,
                color: "from-[#00f2fe] to-[#ff0000]",
              },
              {
                title: "Average Amount",
                value: "$50K",
                change: "+5%",
                icon: DollarSign,
                color: "from-[#00f2fe] to-[#00ff88]",
              },
              {
                title: "Active Corridors",
                value: "12",
                change: "0%",
                icon: Map,
                color: "from-[#00f2fe] to-[#b700ff]",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-[#00f2fe]/20 bg-black/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe]/20 transition-all hover:border-[#00f2fe]">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-[#00f2fe]">{stat.title}</CardTitle>
                    <div className={`rounded-full bg-gradient-to-br ${stat.color} p-2`}>
                      <stat.icon className="h-4 w-4 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#00f2fe]">{stat.value}</div>
                    <p className="text-xs text-[#00f2fe]/70">{stat.change} from last month</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-[#00f2fe]/20 bg-black/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe]/20 hover:border-[#00f2fe]">
              <CardHeader>
                <CardTitle className="text-[#00f2fe]">Recent Cross-Border Transactions</CardTitle>
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
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 rounded-lg border border-[#00f2fe]/20 bg-black/50 p-4 backdrop-blur-xl hover:shadow-[0_0_15px_#00f2fe]/10 hover:border-[#00f2fe]"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <ArrowLeftRight className="h-4 w-4 text-[#00f2fe]" />
                          <span className="text-sm font-medium text-[#00f2fe]">
                            {transaction.from} → {transaction.to}
                          </span>
                        </div>
                        <p className="text-sm text-[#00f2fe]/70">{transaction.amount}</p>
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
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-[#00f2fe]/20 text-[#00f2fe] hover:bg-[#00f2fe]/10 hover:border-[#00f2fe] hover:shadow-[0_0_10px_#00f2fe]"
                        >
                          Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.main>
      </div>
    </motion.div>
  )
}