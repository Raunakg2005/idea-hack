"use client"

import { motion } from "framer-motion"
import { MessageSquare, ThumbsUp, ThumbsDown, Send, Star } from "lucide-react"
import { DataStreamBackground } from "@/components/backgrounds/data-stream-background"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function FeedbackModulePage() {
  const [rating, setRating] = useState(0)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [feedback, setFeedback] = useState("")

  function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Send to API or perform desired action
    console.log({ rating, selectedTags, feedback })
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 -z-10">
        <DataStreamBackground />
      </div>
      <div className="relative z-10 container px-4 py-8">
        <div className="mb-8">
          <h1 className="flex items-center gap-2 text-2xl font-bold text-[#00f2fe]">
            <MessageSquare className="h-6 w-6" />
            Customer Feedback
          </h1>
          <p className="mt-2 text-[#00f2fe]/70">We value your feedback. Help us improve our services.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#00f2fe]">Submit Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm text-[#00f2fe]/70">
                      How satisfied are you with our service?
                    </label>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setRating(r)}
                          className="rounded-full border border-[#00f2fe]/10 p-2 text-[#00f2fe] hover:bg-[#00f2fe]/10"
                        >
                          <Star className="h-6 w-6" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-[#00f2fe]/70">What did you like most?</label>
                    <div className="flex flex-wrap gap-2">
                      {["Security", "User Interface", "Customer Support", "Speed", "Features"].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() =>
                            setSelectedTags((prev) =>
                              prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
                            )
                          }
                          className="rounded-full border border-[#00f2fe]/10 px-4 py-2 text-sm text-[#00f2fe] hover:bg-[#00f2fe]/10"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-[#00f2fe]/70">Your feedback</label>
                    <Textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share your experience..."
                      className="min-h-[100px] resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] hover:scale-105">
              <CardHeader>
                <CardTitle className="text-[#00f2fe]">Recent Feedback</CardTitle>
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
                      className="rounded-lg border border-[#00f2fe]/10 bg-background/50 p-4 hover:shadow-[0_0_20px_#00f2fe] hover:scale-105"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#00f2fe]">{feedback.user}</span>
                          <div className="flex">
                            {Array.from({ length: feedback.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-[#00f2fe] text-[#00f2fe]" />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-[#00f2fe]/70">{feedback.time}</span>
                      </div>
                      <p className="mt-2 text-sm text-[#00f2fe]/90">{feedback.comment}</p>
                      <div className="mt-4 flex items-center gap-4">
                        <button className="flex items-center gap-1 text-xs text-[#00f2fe]/70">
                          <ThumbsUp className="h-4 w-4" />
                          {feedback.helpful}
                        </button>
                        <button className="flex items-center gap-1 text-xs text-[#00f2fe]/70">
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
  )
}

