"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, Search, Plus, ChevronRight, MapPin, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  exit: { opacity: 0, x: 20 },
};

const slotVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 8 },
  },
  hover: { scale: 1.05 },
};

export default function AppointmentsPage() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8"
        style={{ color: '#00f2fe' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Appointment Scheduling
      </motion.h1>

      {/* Search and Filters */}
      <motion.div
        className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <motion.div className="relative w-full" whileHover={{ scale: 1.05 }}>
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" style={{ color: '#00f2fe' }} />
            <Input className="pl-10 bg-background/50 border-primary/20 w-full" placeholder="Search appointments..." />
          </motion.div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-[180px] bg-background/50 border-primary/20">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="in-person">In Person</SelectItem>
              <SelectItem value="virtual">Virtual</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="w-full md:w-auto bg-primary/10 border-primary/50 hover:bg-primary/20 gap-2">
            <Plus className="h-4 w-4" style={{ color: '#00f2fe' }} />
            <span style={{ color: '#00f2fe' }}>New Appointment</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          {
            title: "Today's Appointments",
            value: "8",
            icon: Calendar,
          },
          {
            title: "Pending Requests",
            value: "12",
            icon: Clock,
          },
          {
            title: "Total Scheduled",
            value: "145",
            icon: Users,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4" style={{ color: '#00f2fe' }} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold" style={{ color: '#00f2fe' }}>{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Upcoming Appointments */}
      <Card className="mb-8 bg-background/50 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle style={{ color: '#00f2fe' }}>Upcoming Appointments</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {[
              {
                title: "Account Review Meeting",
                date: "Today, 2:00 PM",
                type: "virtual",
                client: "John Doe",
                duration: "30 min",
              },
              {
                title: "Investment Consultation",
                date: "Tomorrow, 10:00 AM",
                type: "in-person",
                client: "Sarah Smith",
                duration: "1 hour",
              },
              {
                title: "Security Assessment",
                date: "23 Feb, 3:30 PM",
                type: "virtual",
                client: "Mike Johnson",
                duration: "45 min",
              },
            ].map((appointment, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                exit="exit"
                className="flex flex-col md:flex-row items-start md:items-center gap-4 rounded-lg border border-primary/20 bg-background/30 p-4 backdrop-blur-sm"
              >
                <div
                  className={`rounded-full p-2 ${
                    appointment.type === "virtual" ? "bg-purple-500/10 text-purple-500" : "bg-blue-500/10 text-blue-500"
                  }`}
                >
                  {appointment.type === "virtual" ? <Video className="h-5 w-5" style={{ color: '#00f2fe' }} /> : <MapPin className="h-5 w-5" style={{ color: '#00f2fe' }} />}
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-medium" style={{ color: '#00f2fe' }}>{appointment.title}</h3>
                  <div className="mt-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm">
                    <div className="flex items-center gap-1" style={{ color: '#00f2fe' }}>
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-1" style={{ color: '#00f2fe' }}>
                      <Clock className="h-4 w-4" />
                      {appointment.duration}
                    </div>
                    <div className="flex items-center gap-1" style={{ color: '#00f2fe' }}>
                      <Users className="h-4 w-4" />
                      {appointment.client}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full md:w-auto gap-2 border-primary/50 hover:bg-primary/20">
                  Details
                  <ChevronRight className="h-4 w-4" style={{ color: '#00f2fe' }} />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>

      {/* Available Time Slots */}
      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle style={{ color: '#00f2fe' }}>Available Time Slots</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                day: "Today",
                slots: ["2:00 PM", "3:30 PM", "4:00 PM"],
              },
              {
                day: "Tomorrow",
                slots: ["10:00 AM", "11:30 AM", "2:00 PM", "3:00 PM"],
              },
              {
                day: "23 Feb",
                slots: ["9:00 AM", "1:00 PM", "4:30 PM"],
              },
            ].map((timeSlot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="rounded-lg border border-primary/20 bg-background/30 p-4 backdrop-blur-sm"
              >
                <h3 className="mb-3 font-medium" style={{ color: '#00f2fe' }}>{timeSlot.day}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {timeSlot.slots.map((slot, slotIndex) => (
                    <motion.div
                      key={slotIndex}
                      variants={slotVariants}
                      initial="hidden"
                      animate="show"
                      whileHover="hover"
                    >
                      <Button
                        key={slotIndex}
                        variant="outline"
                        size="sm"
                        className="w-full border-primary/50 hover:bg-primary/20"
                        style={{ color: '#00f2fe' }}
                      >
                        {slot}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}