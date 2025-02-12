"use client"

import { motion } from "framer-motion"
import { FileCheck, Upload, CheckCircle, XCircle, Clock } from "lucide-react"
import { HexGridBackground } from "@/components/backgrounds/hex-grid-background"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DocumentVerificationPage() {
  return (
    <Layout>
      <div className="relative">
        <HexGridBackground />
        <div className="relative z-10">
          <div className="container px-4 py-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">
                <FileCheck className="h-6 w-6" />
                Document Verification
              </h1>
              <Button className="gap-2">
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
                  <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-primary/90">{stat.title}</CardTitle>
                      <stat.icon className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mb-8 border-primary/10 bg-background/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-primary">Recent Documents</CardTitle>
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
                      className="rounded-lg border border-primary/10 bg-background/50 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-primary">{doc.name}</h3>
                          <p className="text-sm text-primary/70">{doc.type}</p>
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
                      <div className="mt-4 flex items-center justify-between text-xs text-primary/70">
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
      </div>
    </Layout>
  )
}

