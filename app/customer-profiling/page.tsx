"use client"

import { motion } from "framer-motion"
import { UserCheck, Shield, FileCheck, AlertTriangle, Fingerprint, Camera, Upload, CheckCircle } from "lucide-react"
import { CircuitBackground } from "@/components/backgrounds/circuit-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CustomerProfilingPage() {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <CircuitBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl">
          <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h1 className="flex items-center gap-2 text-xl font-bold text-[#00f2fe]">
                <UserCheck className="h-5 w-5" />
                Customer Profiling & Onboarding
              </h1>
            </div>
            <Button variant="outline" className="gap-2">
              <Shield className="h-4 w-4" />
              Security Level: High
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-8 space-y-8">
          {/* Progress Overview */}
          <Card className="border-[#00f2fe]/10 bg-transparent backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#00f2fe]">
                <FileCheck className="h-5 w-5" />
                Onboarding Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Progress value={75} className="h-2" />
                  <span className="text-sm text-[#00f2fe]">75%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    { title: "Identity Verified", icon: UserCheck, complete: true },
                    { title: "Documents Uploaded", icon: Upload, complete: true },
                    { title: "Biometrics Recorded", icon: Fingerprint, complete: true },
                    { title: "Final Approval", icon: CheckCircle, complete: false },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 rounded-lg border border-[#00f2fe]/10 p-3 ${
                        step.complete ? "bg-[#00f2fe]/10" : "bg-transparent"
                      }`}
                    >
                      <step.icon className={`h-4 w-4 ${step.complete ? "text-[#00f2fe]" : "text-[#00f2fe]/40"}`} />
                      <span className={`text-sm ${step.complete ? "text-[#00f2fe]" : "text-[#00f2fe]/40"}`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Tabs */}
          <Tabs defaultValue="verification" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
              <TabsTrigger value="verification">Identity Verification</TabsTrigger>
              <TabsTrigger value="biometrics">Biometric Data</TabsTrigger>
            </TabsList>

            <TabsContent value="verification">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-[#00f2fe]/10 bg-transparent backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#00f2fe]">
                      <AlertTriangle className="h-5 w-5" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {["Government ID", "Proof of Address", "Tax ID Number", "Employment Verification"].map(
                        (doc, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 text-[#00f2fe]/90"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {doc}
                          </motion.li>
                        ),
                      )}
                    </ul>
                    <Button variant="outline" className="gap-2 mt-4">
                      Download Documents
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-[#00f2fe]/10 bg-transparent backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#00f2fe]">
                      <Shield className="h-5 w-5" />
                      Security Checks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Identity Match", progress: 100 },
                        { name: "Document Authenticity", progress: 100 },
                        { name: "Background Check", progress: 85 },
                        { name: "Risk Assessment", progress: 70 },
                      ].map((check, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between text-sm">
                            <span className="text-[#00f2fe]/90">{check.name}</span>
                            <span className="text-[#00f2fe]">{check.progress}%</span>
                          </div>
                          <Progress value={check.progress} className="h-1" />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="biometrics">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-[#00f2fe]/10 bg-transparent backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#00f2fe]">
                      <Camera className="h-5 w-5" />
                      Facial Recognition
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg border border-[#00f2fe]/20 bg-black/50">
                      <div className="flex h-full flex-col items-center justify-center gap-4">
                        <Camera className="h-8 w-8 text-[#00f2fe]" />
                        <p className="text-sm text-[#00f2fe]/70">Facial scan complete</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#00f2fe]/10 bg-transparent backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#00f2fe]">
                      <Fingerprint className="h-5 w-5" />
                      Fingerprint Data
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((index) => (
                        <div key={index} className="aspect-square rounded-lg border border-[#00f2fe]/20 bg-black/50 p-4">
                          <div className="flex h-full flex-col items-center justify-center gap-2">
                            <Fingerprint className="h-6 w-6 text-[#00f2fe]" />
                            <span className="text-xs text-[#00f2fe]/70">Print {index}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </motion.div>
  )
}
