"use client";

import { motion } from "framer-motion";
import { Users, Star, TrendingUp, Clock, UserCheck } from "lucide-react";
import { CircuitBackground } from "@/components/backgrounds/circuit-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

const customerVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
  hover: { scale: 1.02 },
};

export default function CustomerPriorityPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none -z-10"></div>
      <div className="absolute inset-0 -z-10">
        <CircuitBackground />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="container px-4 py-8">
          <motion.div
            className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="flex items-center gap-2 text-2xl font-bold text-[#00f2fe]">
              <Star className="h-6 w-6" />
              Customer Prioritization
            </h1>
            <Button className="gap-2 text-white bg-[#00f2fe] hover:text-[#00f2fe] hover:shadow-lg hover:shadow-[#00f2fe]/50 transition-transform transform hover:scale-105">
              <UserCheck className="h-4 w-4" />
              Update Priority Levels
            </Button>
          </motion.div>

          <motion.div
            className="mb-8 grid gap-4 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {[
              { title: "Total Customers", value: "2,547", icon: Users },
              { title: "Priority Customers", value: "856", icon: Star },
              { title: "Average Score", value: "7.8/10", icon: TrendingUp },
              { title: "Recent Updates", value: "124", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={itemVariants}
                whileHover="hover"
              >
                <Card className="border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] transition-shadow hover:scale-105 transform transition-transform hover:border-[#00f2fe] hover:border-2">
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
          </motion.div>

          <Card className="mb-8 border-[#00f2fe]/10 bg-background/50 backdrop-blur-xl hover:shadow-[0_0_20px_#00f2fe] transition-shadow hover:scale-105 transform transition-transform hover:border-[#00f2fe] hover:border-2">
            <CardHeader>
              <CardTitle className="text-[#00f2fe]">Priority Customers</CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="space-y-6"
              >
                {[
                  {
                    name: "John Doe",
                    score: 95,
                    status: "VIP",
                    lastActivity: "2 hours ago",
                    products: ["Investment Account", "Premium Credit Card"],
                  },
                  {
                    name: "Sarah Smith",
                    score: 88,
                    status: "Gold",
                    lastActivity: "1 day ago",
                    products: ["Savings Account", "Personal Loan"],
                  },
                  {
                    name: "Michael Johnson",
                    score: 82,
                    status: "Silver",
                    lastActivity: "3 days ago",
                    products: ["Checking Account", "Insurance"],
                  },
                ].map((customer, index) => (
                  <motion.div
                    key={index}
                    variants={customerVariants}
                    whileHover="hover"
                    className="rounded-lg border border-[#00f2fe]/10 bg-background/50 p-4 hover:border-[#00f2fe] hover:border-2"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-[#00f2fe]">{customer.name}</h3>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="rounded-full bg-[#00f2fe]/10 px-2 py-1 text-xs text-[#00f2fe]">
                            {customer.status}
                          </span>
                          <span className="text-xs text-[#00f2fe]/70">Last active {customer.lastActivity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#00f2fe]">Priority Score: {customer.score}</div>
                        <Progress value={customer.score} className="mt-2 h-2" />
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {customer.products.map((product, productIndex) => (
                        <span key={productIndex} className="rounded-full bg-[#00f2fe]/5 px-3 py-1 text-xs text-[#00f2fe]">
                          {product}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}