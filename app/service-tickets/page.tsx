"use client"

import { motion } from "framer-motion"
import { TicketIcon, Search, Filter, Plus } from "lucide-react"
import { DataStreamBackground } from "@/components/backgrounds/data-stream-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function ServiceTicketsPage() {
  return (

      <div className="relative">
        <DataStreamBackground />
        <div className="relative z-10">
          <div className="container px-4 py-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="flex items-center gap-2 text-2xl font-bold text-[#00f2fe]">
                <TicketIcon className="h-6 w-6" />
                Service Tickets
              </h1>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Ticket
              </Button>
            </div>

            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#00f2fe]/50" />
                <Input className="pl-10" placeholder="Search tickets..." />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="grid gap-6">
              {[
                {
                  id: "TK-001",
                  title: "Account Access Issue",
                  status: "In Progress",
                  priority: "High",
                  created: "2 hours ago",
                  progress: 45,
                },
                {
                  id: "TK-002",
                  title: "Transaction Dispute",
                  status: "Open",
                  priority: "Medium",
                  created: "5 hours ago",
                  progress: 20,
                },
                {
                  id: "TK-003",
                  title: "Security Alert Investigation",
                  status: "Resolved",
                  priority: "High",
                  created: "1 day ago",
                  progress: 100,
                },
              ].map((ticket, index) => (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-105 transform transition-transform hover:border-[#00f2fe]">
                    <CardContent className="grid gap-4 p-6 sm:grid-cols-2 md:grid-cols-4">
                      <div>
                        <p className="text-sm text-[#00f2fe]/70">Ticket ID</p>
                        <p className="font-medium text-[#00f2fe]">{ticket.id}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#00f2fe]/70">Status</p>
                        <p className="font-medium text-[#00f2fe]">{ticket.status}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#00f2fe]/70">Priority</p>
                        <p className="font-medium text-[#00f2fe]">{ticket.priority}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#00f2fe]/70">Created</p>
                        <p className="font-medium text-[#00f2fe]">{ticket.created}</p>
                      </div>
                      <div className="sm:col-span-2 md:col-span-4">
                        <h3 className="mb-2 font-medium text-[#00f2fe]">{ticket.title}</h3>
                        <Progress value={ticket.progress} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

  )
}

