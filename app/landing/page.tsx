"use client";

import { motion } from "framer-motion";
import { Globe, Shield, Lock, Activity, ArrowRight, ChevronRight, Bell, User } from "lucide-react";
import { ParticleBackground } from "@/components/particle-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-blue-800 via-black to-gray-900 text-white overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-4">
                        <h1 className="flex items-center gap-2 text-xl font-extrabold text-white">
                            <Shield className="h-6 w-6" />
                            Cyber Bank
                        </h1>
                        <nav className="hidden md:block">
                            <ul className="flex gap-6">
                                <li><a href="#" className="text-sm hover:text-yellow-500">Home</a></li>
                                <li><a href="#features" className="text-sm hover:text-yellow-500">Features</a></li>
                                <li><a href="#how-it-works" className="text-sm hover:text-yellow-500">How It Works</a></li>
                                <li><a href="#testimonials" className="text-sm hover:text-yellow-500">Testimonials</a></li>
                                <li><a href="#faq" className="text-sm hover:text-yellow-500">FAQs</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-yellow-500 text-[10px] font-bold leading-4 text-black">3</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 flex min-h-[80vh] items-center justify-center px-4">
                <div className="container text-center">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl">
                        Secure Your Digital Banking
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg">
                        Experience the future of banking with cutting-edge security, real-time fraud detection, and personalized services.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button className="gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90">Get Started <ArrowRight className="h-4 w-4" /></Button>
                        <Button variant="outline" className="gap-2 hover:text-yellow-500 border-yellow-500">Learn More <ChevronRight className="h-4 w-4" /></Button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative z-10 py-16">
                <div className="container px-4">
                    <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-center">
                        Key Features
                    </motion.h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[{ title: "Real-Time Fraud Detection", description: "Advanced AI-powered fraud detection to protect your transactions.", icon: Shield, color: "bg-blue-500" }, { title: "Cross-Border Monitoring", description: "Monitor international transactions with real-time risk assessment.", icon: Globe, color: "bg-green-500" }, { title: "Insider Threat Detection", description: "Proactively monitor and prevent internal security breaches.", icon: Lock, color: "bg-purple-500" }, { title: "Personalized Services", description: "Tailored financial solutions based on your unique needs.", icon: Activity, color: "bg-yellow-500" }].map((feature, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                                <Card className="border-none shadow-lg hover:scale-105 transform transition bg-gradient-to-tl from-gray-900 to-black backdrop-blur-xl">
                                    <CardContent className="p-6">
                                        <div className={`w-fit rounded-full p-3 ${feature.color}`}>
                                            <feature.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="mt-4 font-bold text-white">{feature.title}</h3>
                                        <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))} 
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="relative z-10 py-16">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="mt-4 text-lg">Our platform leverages Generative AI to combat financial crimes effectively.</p>
                    <div className="mt-8 grid gap-8 sm:grid-cols-3">
                        {["Upload Transaction Data", "Analyze Patterns in Real-Time", "Generate Actionable Insights"].map((step, index) => (
                            <Card key={index} className="bg-gradient-to-br from-black to-gray-800 hover:shadow-lg transform hover:scale-105 transition">
                                <CardContent>
                                    <h3 className="text-xl font-bold text-white">{step}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-center text-white">Testimonials</h2>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {["This platform revolutionized our fraud detection processes!", "Excellent AI solutions for modern banking.", "Highly secure and reliable services."].map((testimonial, index) => (
                            <Card key={index} className="bg-black/50 hover:shadow-md">
                                <CardContent>
                                    <p className="text-white">{testimonial}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16">
                <div className="container px-4">
                    <h2 className="text-3xl font-bold text-center">FAQs</h2>
                    <div className="mt-8 space-y-6">
                        {["How secure is the platform?", "What is Generative AI?", "How do I get started?"].map((faq, index) => (
                            <Card key={index} className="bg-gradient-to-tr from-gray-800 to-black hover:shadow-md">
                                <CardContent>
                                    <h3 className="text-lg font-bold text-white">{faq}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/70 backdrop-blur-xl">
                <div className="container px-4 py-8">
                    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                        {["About", "Services", "Support", "Legal"].map((section, index) => (
                            <div key={index}>
                                <h3 className="mb-3 text-sm font-medium text-white">{section}</h3>
                                <ul className="space-y-2">
                                    {["Link 1", "Link 2", "Link 3"].map((link, i) => (
                                        <li key={i}><a href="#" className="text-sm hover:text-yellow-500">{link}</a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 border-t border-white/10 pt-6 text-center">
                        <p className="text-sm text-white/70">© {new Date().getFullYear()} Cyber Bank. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
