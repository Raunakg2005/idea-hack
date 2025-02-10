"use client"

import { motion } from "framer-motion"
import { BarChart, PieChart, LineChart, TrendingUp, MessageSquare, ThumbsUp, Users, Search } from "lucide-react"
import { DataStreamBackground } from "@/components/backgrounds/data-stream-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function FeedbackAnalyticsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <DataStreamBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-primary/10 bg-background/50 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="flex items-center gap-2 text-xl font-bold text-primary">
                <BarChart className="h-5 w-5" />
                Feedback Analytics
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/50" />
                <Input className="pl-10" placeholder="Search feedback..." />
              </div>
              <Button>Export Report</Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8">
          {/* Overview Stats */}
          <div className="mb-8 grid gap-4 md:grid-cols-4">
            {[
              {
                title: "Total Feedback",
                value: "2,547",
                change: "+12%",
                icon: MessageSquare,
              },
              {
                title: "Satisfaction Score",
                value: "4.8/5",
                change: "+0.3",
                icon: ThumbsUp,
              },
              {
                title: "Active Users",
                value: "12.5K",
                change: "+5%",
                icon: Users,
              },
              {
                title: "Response Rate",
                value: "92%",
                change: "+2%",
                icon: TrendingUp,
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

          {/* Sentiment Analysis */}
          <Card className="mb-8 border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <PieChart className="h-5 w-5" />
                Sentiment Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { label: "Positive", value: 75, color: "bg-green-500" },
                  { label: "Neutral", value: 20, color: "bg-yellow-500" },
                  { label: "Negative", value: 5, color: "bg-red-500" },
                ].map((sentiment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-primary/90">{sentiment.label}</span>
                      <span className="text-primary">{sentiment.value}%</span>
                    </div>
                    <Progress value={sentiment.value} className={`h-2 ${sentiment.color}`} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card className="mb-8 border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MessageSquare className="h-5 w-5" />
                Recent Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    user: "John Doe",
                    message: "The new security features are impressive. Very satisfied with the service.",
                    rating: 5,
                    time: "2 minutes ago",
                  },
                  {
                    user: "Sarah Smith",
                    message: "Transaction process is smooth, but the interface could be more intuitive.",
                    rating: 4,
                    time: "15 minutes ago",
                  },
                  {
                    user: "Mike Johnson",
                    message: "Customer support response time has improved significantly.",
                    rating: 5,
                    time: "1 hour ago",
                  },
                ].map((feedback, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="rounded-lg border border-primary/10 bg-background/50 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-primary">{feedback.user}</h3>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: feedback.rating }).map((_, i) => (
                          <ThumbsUp key={i} className="h-4 w-4 text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-primary/70">{feedback.message}</p>
                    <p className="mt-2 text-xs text-primary/60">{feedback.time}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trend Analysis */}
          <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <LineChart className="h-5 w-5" />
                Feedback Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {[
                  {
                    category: "Security Features",
                    trend: "Positive",
                    change: "+15%",
                    mentions: 342,
                  },
                  {
                    category: "User Interface",
                    trend: "Neutral",
                    change: "+2%",
                    mentions: 256,
                  },
                  {
                    category: "Customer Support",
                    trend: "Positive",
                    change: "+8%",
                    mentions: 189,
                  },
                ].map((trend, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-medium text-primary">{trend.category}</h3>
                      <p className="text-sm text-primary/70">{trend.mentions} mentions</p>
                    </div>
                    <div className="text-right">
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          trend.trend === "Positive"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {trend.trend}
                      </span>
                      <p className="mt-1 text-sm text-primary">{trend.change}</p>
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

