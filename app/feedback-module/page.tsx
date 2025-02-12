"use client"

import { motion } from "framer-motion"
import { MessageSquare, ThumbsUp, ThumbsDown, Send, Star } from "lucide-react"
import { DataStreamBackground } from "@/components/backgrounds/data-stream-background"
import { Layout } from "@/components/layout/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function FeedbackModulePage() {
  return (
    <Layout>
      <div className="relative">
        <DataStreamBackground />
        <div className="relative z-10">
          <div className="container px-4 py-8">
            <div className="mb-8">
              <h1 className="flex items-center gap-2 text-2xl font-bold text-primary">
                <MessageSquare className="h-6 w-6" />
                Customer Feedback
              </h1>
              <p className="mt-2 text-primary/70">We value your feedback. Help us improve our services.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-primary">Submit Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm text-primary/70">
                          How satisfied are you with our service?
                        </label>
                        <div className="flex gap-4">
                          {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                              key={rating}
                              type="button"
                              className="rounded-full border border-primary/10 p-2 text-primary hover:bg-primary/10"
                            >
                              <Star className="h-6 w-6" />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm text-primary/70">What did you like most?</label>
                        <div className="flex flex-wrap gap-2">
                          {["Security", "User Interface", "Customer Support", "Speed", "Features"].map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              className="rounded-full border border-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary/10"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm text-primary/70">Your feedback</label>
                        <Textarea placeholder="Share your experience..." className="min-h-[100px] resize-none" />
                      </div>
                      <Button className="w-full gap-2">
                        <Send className="h-4 w-4" />
                        Submit Feedback
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card className="border-primary/10 bg-background/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-primary">Recent Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          user: "John D.",
                          rating: 5,
                          comment: "Excellent security features and user interface!",
                          time: "2 hours ago",
                          helpful: 12,
                        },
                        {
                          user: "Sarah M.",
                          rating: 4,
                          comment: "Great service, but could improve transaction speed.",
                          time: "1 day ago",
                          helpful: 8,
                        },
                        {
                          user: "Mike R.",
                          rating: 5,
                          comment: "The customer support team is exceptional.",
                          time: "2 days ago",
                          helpful: 15,
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
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-primary">{feedback.user}</span>
                              <div className="flex">
                                {Array.from({ length: feedback.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                              </div>
                            </div>
                            <span className="text-xs text-primary/70">{feedback.time}</span>
                          </div>
                          <p className="mt-2 text-sm text-primary/90">{feedback.comment}</p>
                          <div className="mt-4 flex items-center gap-4">
                            <button className="flex items-center gap-1 text-xs text-primary/70">
                              <ThumbsUp className="h-4 w-4" />
                              {feedback.helpful}
                            </button>
                            <button className="flex items-center gap-1 text-xs text-primary/70">
                              <ThumbsDown className="h-4 w-4" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

