"use client"

import { motion } from "framer-motion"
import {
  Shield,
  AlertTriangle,
  Users,
  Activity,
  Search,
  Filter,
  UserX,
  FileWarning,
  Clock,
  AlertCircle,
} from "lucide-react"
import { MatrixBackground } from "@/components/backgrounds/matrix-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InsiderThreatPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MatrixBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-primary/10 bg-background/50 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="flex items-center gap-2 text-xl font-bold text-primary">
                <Shield className="h-5 w-5" />
                Insider Threat Detection
              </h1>
              <span className="rounded-full bg-red-500/10 px-2 py-1 text-xs text-red-500">Admin View</span>
            </div>
            <Button variant="outline" className="gap-2">
              <AlertTriangle className="h-4 w-4" />
              High Alert Mode
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 gap-4">
              <div className="relative flex-1 md:max-w-[300px]">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                <Input className="pl-10" placeholder="Search employees..." type="search" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="gap-2">
              <Filter className="h-4 w-4" />
              Advanced Filters
            </Button>
          </div>

          {/* Overview Stats */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Active Employees",
                value: "1,245",
                icon: Users,
                color: "text-primary",
              },
              {
                title: "High Risk Users",
                value: "23",
                icon: UserX,
                color: "text-red-500",
              },
              {
                title: "Suspicious Activities",
                value: "47",
                icon: Activity,
                color: "text-yellow-500",
              },
              {
                title: "Policy Violations",
                value: "12",
                icon: FileWarning,
                color: "text-orange-500",
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
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Alerts */}
          <Card className="mb-8 border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-primary">Recent Security Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Unusual Data Access Pattern",
                    description: "Multiple attempts to access restricted financial records",
                    time: "2 minutes ago",
                    severity: "high",
                    department: "Finance",
                  },
                  {
                    title: "Off-hours System Access",
                    description: "Login attempt detected outside normal working hours",
                    time: "15 minutes ago",
                    severity: "medium",
                    department: "IT",
                  },
                  {
                    title: "Mass File Download",
                    description: "Large volume of customer data files downloaded",
                    time: "1 hour ago",
                    severity: "high",
                    department: "Sales",
                  },
                ].map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 rounded-lg border border-primary/10 bg-background/50 p-4"
                  >
                    <div
                      className={`rounded-full p-2 ${
                        alert.severity === "high" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-primary">{alert.title}</h3>
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                          {alert.department}
                        </span>
                      </div>
                      <p className="text-sm text-primary/70">{alert.description}</p>
                      <div className="mt-1 flex items-center gap-2 text-xs text-primary/60">
                        <Clock className="h-3 w-3" />
                        {alert.time}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Investigate
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500">
                        Block Access
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-primary">Key Risk Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    factor: "Data Access Patterns",
                    status: "Critical",
                    change: "+15%",
                    details: "Unusual increase in sensitive data access",
                  },
                  {
                    factor: "Authentication Anomalies",
                    status: "Warning",
                    change: "+5%",
                    details: "Multiple failed login attempts detected",
                  },
                  {
                    factor: "Policy Violations",
                    status: "Moderate",
                    change: "-2%",
                    details: "Slight decrease in security policy violations",
                  },
                  {
                    factor: "System Privileges",
                    status: "Warning",
                    change: "+8%",
                    details: "Elevated privilege usage detected",
                  },
                ].map((factor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="rounded-lg border border-primary/10 bg-background/50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-primary">{factor.factor}</h3>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          factor.status === "Critical"
                            ? "bg-red-500/10 text-red-500"
                            : factor.status === "Warning"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-green-500/10 text-green-500"
                        }`}
                      >
                        {factor.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-primary/70">{factor.details}</p>
                    <p className="mt-1 text-xs text-primary/60">{factor.change} this week</p>
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

