"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Bell,
  Shield,
  AlertTriangle,
  Activity,
  Lock,
  CreditCard,
  Send,
  Download,
  Upload,
  Search,
} from "lucide-react"
import { ParticleBackground } from "@/components/particle-field"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-primary/10 bg-background/50 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-primary">Cyber Bank</h1>
              <nav className="hidden md:block">
                <ul className="flex gap-4">
                  <li>
                    <a href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                      Transactions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-primary/70 hover:text-primary transition-colors">
                      Analytics
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold leading-4 text-primary-foreground">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <Shield className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Dashboard */}
        <main className="container px-4 py-8">
          {/* Search and Quick Actions */}
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="w-full pl-10 md:w-[300px]" placeholder="Search transactions..." type="search" />
            </div>
            <div className="flex gap-2">
              <Button>
                <Send className="mr-2 h-4 w-4" />
                Send Money
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Receive
              </Button>
            </div>
          </div>

          {/* Balance Cards */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-primary/90">Total Balance</CardTitle>
                  <CreditCard className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$12,450.80</div>
                  <p className="text-xs text-primary/70">+2.5% from last month</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-primary/90">Monthly Spending</CardTitle>
                  <Activity className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">$4,250.00</div>
                  <p className="text-xs text-primary/70">+12% from last month</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-primary/90">Security Score</CardTitle>
                  <Lock className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">92/100</div>
                  <p className="text-xs text-primary/70">Strong protection active</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Activity and Security Alerts */}
          <div className="grid gap-4 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Upload className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-primary/90">Payment to John Doe</p>
                          <p className="text-xs text-primary/70">2 minutes ago</p>
                        </div>
                        <div className="text-sm font-medium text-primary">-$250.00</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Security Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-primary/90">Suspicious login attempt blocked</p>
                          <p className="text-xs text-primary/70">5 minutes ago</p>
                        </div>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}

