"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Crosshair, Network, UserCheck, Server, Globe, Activity, Check } from "lucide-react";
import { ParticleBackground } from "@/components/particle-field";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
            {/* Particle Background with Custom Color */}
            <div className="absolute inset-0 z-0">
                <ParticleBackground />
            </div>

            

            {/* Hero Section with Core Value Proposition */}
            <section className="relative z-10 flex min-h-[80vh] items-center justify-center px-4">
                <div className="container text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl mb-6"
                    >
                        <span className="bg-gradient-to-r from-[#00f2fe] to-white bg-clip-text text-transparent">
                            AI-Powered Financial Protection
                        </span>
                    </motion.h1>
                    <motion.p 
                        className="mx-auto mt-6 max-w-2xl text-lg text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Next-generation fraud prevention combining generative AI, real-time analytics, and Aadhaar-based security
                    </motion.p>
                </div>
            </section>
            {/* Core Capabilities Section */}
            <section id="solutions" className="relative z-10 py-16">
                <div className="container px-4">
                    <motion.h2 
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#00f2fe] to-white bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Enterprise-Grade Protection
                    </motion.h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { 
                                icon: Crosshair, 
                                title: "Real-Time Anomaly Detection", 
                                description: "Generative AI models analyzing 50+ transaction parameters in <50ms" 
                            },
                            { 
                                icon: Network, 
                                title: "Cross-Border Intelligence", 
                                description: "Dynamic risk scoring for international transactions across 150+ jurisdictions" 
                            },
                            { 
                                icon: UserCheck, 
                                title: "Insider Threat Radar", 
                                description: "Employee behavior analysis with 99.8% accuracy in unauthorized access detection" 
                            },
                            { 
                                icon: Server, 
                                title: "Edge Processing", 
                                description: "Aadhaar-secured transactions in low-connectivity regions" 
                            }
                        ].map((feature, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="bg-black/50 backdrop-blur-xl border-[#00f2fe]/20 hover:shadow-[0_0_30px_#00f2fe]/20 transition-transform transform hover:scale-105 hover:border-[#00f2fe] h-full">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <feature.icon className="h-8 w-8 text-[#00f2fe] mb-4" />
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: feature.description }} />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
                {/* Technical Architecture Section */}
                <section id="solutions" className="relative z-10 py-16">
                    <div className="container px-4">
                    <motion.h2 
                        className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#00f2fe] to-white bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        AI-Powered Defense Layers
                    </motion.h2>
                            
                        
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    title: "Generative AI Core",
                                    features: [
                                        "Synthetic fraud pattern generation",
                                        "Adaptive learning engine",
                                        "Behavioral biometrics analysis"
                                    ]
                                },
                                {
                                    title: "Security Framework",
                                    features: [
                                        "Aadhaar-based authentication",
                                        "Military-grade encryption",
                                        "Real-time compliance monitoring"
                                    ]
                                },
                                {
                                    title: "Global Protection",
                                    features: [
                                        "Cross-border transaction screening",
                                        "Jurisdictional risk scoring",
                                        "Multilingual support"
                                    ]
                                }
                            ].map((stack, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-black/50 backdrop-blur-xl border-[#00f2fe]/20 hover:shadow-[0_0_30px_#00f2fe]/20 transition-transform transform hover:scale-105 hover:border-[#00f2fe]">
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-bold text-[#00f2fe] mb-4">{stack.title}</h3>
                                            <ul className="space-y-3">
                                                {stack.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                                                        <div className="h-2 w-2 bg-[#00f2fe] rounded-full" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            {/* Compliance Section */}
            <section id="compliance" className="py-16">
                <div className="container px-4">
                    <motion.div className="bg-gradient-to-r from-black to-[#001519] rounded-xl p-8 backdrop-blur-xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <motion.div>
                                <h3 className="text-2xl font-bold text-[#00f2fe] mb-4">Global Compliance Engine</h3>
                                <p className="text-gray-300 mb-6">
                                    Automated adherence to 120+ regulatory frameworks including:
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {["FATF Recommendations", "RBI Guidelines", "GDPR Standards", "PCI DSS"].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-gray-300">
                                            <Check className="h-4 w-4 text-[#00f2fe]" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div className="bg-black/50 p-6 rounded-lg border border-[#00f2fe]/20">
                                <div className="text-[#00f2fe] text-3xl font-bold mb-2">99.97%</div>
                                <div className="text-gray-300">Compliance Accuracy Rate</div>
                                <div className="mt-4 h-2 bg-gray-800 rounded-full">
                                    <div className="h-2 bg-[#00f2fe] rounded-full w-[99.7%]" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-16 relative z-10">
                <div className="container px-4">
                    <motion.div 
                        className="bg-gradient-to-r from-[#001519] to-black rounded-xl p-8 text-center backdrop-blur-xl"
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                    >
                        <h3 className="text-2xl font-bold text-[#00f2fe] mb-4">Ready to Transform Your Security?</h3>
                        <p className="text-gray-300 mb-8">Schedule a demo to see our AI in action</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button className="bg-[#00f2fe] text-black hover:bg-[#00d9e6] transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_#00f2fe]">
                                Request Enterprise Demo
                            </Button>
                            <Button variant="outline" className="border-[#00f2fe] text-[#00f2fe] hover:bg-[#00f2fe]/10 transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_#00f2fe]">
                                Technical Documentation
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}