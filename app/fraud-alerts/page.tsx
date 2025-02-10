"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Shield, Search, AlertCircle, CheckCircle2, XCircle, Filter } from "lucide-react"
import { ParticleBackground } from "@/components/particle-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FraudAlertsPage() {
  return (
    <motion.div
      className="relative min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 pointer-events-none -z-10">
        <ParticleBackground />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          className="border-b border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container flex h-16 items-center px-4">
            <h1 className="flex items-center gap-2 text-xl font-bold text-[#00f2fe]">
              <AlertTriangle className="h-5 w-5" />
              Fraud Detection Alerts
            </h1>
          </div>
        </motion.header>

        {/* Main Content */}
        <motion.main
          className="container px-4 py-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Filters and Search */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <motion.div 
              className="flex flex-1 gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative flex-1 md:max-w-[300px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input className="pl-10" placeholder="Search alerts..." type="search" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Alerts</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button>
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </motion.div>
          </div>

          {/* Alert Stats */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            {[
              { title: "Total Alerts", value: "24", icon: AlertCircle, color: "text-[#00f2fe]" },
              { title: "High Risk", value: "5", icon: XCircle, color: "text-red-500" },
              { title: "Medium Risk", value: "12", icon: AlertTriangle, color: "text-yellow-500" },
              { title: "Resolved", value: "7", icon: CheckCircle2, color: "text-green-500" },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-[#00f2fe]">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-[#00f2fe]">{stat.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Alert List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-[1.005] transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-[#00f2fe]">Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Suspicious International Transaction",
                      description: "Large transaction detected from unusual location",
                      time: "2 minutes ago",
                      risk: "high",
                    },
                    {
                      title: "Multiple Failed Login Attempts",
                      description: "5 failed login attempts from unknown IP",
                      time: "15 minutes ago",
                      risk: "medium",
                    },
                    {
                      title: "Unusual Account Activity",
                      description: "Multiple small transactions in short period",
                      time: "1 hour ago",
                      risk: "medium",
                    },
                  ].map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-4 rounded-lg border border-[#00f2fe]/10 bg-background/50 p-4 backdrop-blur-xl hover:shadow-[0_0_15px_#00f2fe] transition-all duration-300"
                    >
                      <div
                        className={`rounded-full p-2 ${
                          alert.risk === "high"
                            ? "bg-red-500/10 text-red-500"
                            : alert.risk === "medium"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        <Shield className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-[#00f2fe]">{alert.title}</h3>
                        <p className="text-sm text-[#00f2fe]/70">{alert.description}</p>
                        <p className="text-xs text-[#00f2fe]/60">{alert.time}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-[#00f2fe] border-[#00f2fe]/10 hover:bg-[#00f2fe]/10 hover:border-[#00f2fe]/30"
                        >
                          Investigate
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-[#00f2fe] border-[#00f2fe]/10 hover:bg-[#00f2fe]/10 hover:border-[#00f2fe]/30"
                        >
                          Dismiss
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