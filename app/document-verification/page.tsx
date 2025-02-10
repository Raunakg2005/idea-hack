"use client"

import { motion } from "framer-motion"
import { FileCheck, Upload, CheckCircle, XCircle, Clock } from "lucide-react"
import { HexGridBackground } from "@/components/backgrounds/hex-grid-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentVerificationPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <HexGridBackground />
      </div>
      <div className="relative z-10 container px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-[#00f2fe]">
            <FileCheck className="h-6 w-6 text-[#00f2fe]" />
            Document Verification
          </h1>
          <Button className="gap-2 bg-[#00f2fe] text-white hover:bg-transparent hover:border hover:border-[#00f2fe] hover:text-[#00f2fe] transition-colors">
            <Upload className="h-4 w-4" />
            Upload Documents
          </Button>
        </div>
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Pending Verification",
              value: "23",
              icon: Clock,
            },
            {
              title: "Verified Today",
              value: "45",
              icon: CheckCircle,
            },
            {
              title: "Rejected",
              value: "12",
              icon: XCircle,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-transparent bg-transparent backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] transition-shadow hover:scale-105 transform transition-transform hover:border-2 hover:border-[#00f2fe]">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-[#00f2fe]/90">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-[#00f2fe]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-[#00f2fe]">{stat.value}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <Card className="mb-8 border-transparent bg-transparent backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] transition-shadow hover:scale-105 transform transition-transform hover:border-2 hover:border-[#00f2fe]">
          <CardHeader>
            <CardTitle className="text-[#00f2fe]">Recent Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  name: "Passport.pdf",
                  type: "Identity Document",
                  status: "Verified",
                  uploadedBy: "John Doe",
                  date: "2 hours ago",
                },
                {
                  name: "Utility_Bill.pdf",
                  type: "Proof of Address",
                  status: "Pending",
                  uploadedBy: "Sarah Smith",
                  date: "5 hours ago",
                },
                {
                  name: "Bank_Statement.pdf",
                  type: "Financial Document",
                  status: "Rejected",
                  uploadedBy: "Mike Johnson",
                  date: "1 day ago",
                },
              ].map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="rounded-lg border border-transparent bg-transparent p-4 hover:border-[#00f2fe] hover:border-2 hover:shadow-[0_0_20px_#00f2fe] transition-shadow hover:scale-105 transform transition-transform"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#00f2fe]">{doc.name}</h3>
                      <p className="text-sm text-[#00f2fe]/70">{doc.type}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs ${
                        doc.status === "Verified"
                          ? "bg-green-500/10 text-green-500"
                          : doc.status === "Rejected"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-[#00f2fe]/70">
                    <span>Uploaded by {doc.uploadedBy}</span>
                    <span>{doc.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
