"use client";

import { useEffect, useState } from "react";
import { Shield, Lock, Twitter, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const [lastScanTime, setLastScanTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLastScanTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { title: "Support", items: ["Help Center", "Contact Us", "FAQs"] },
    { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Security"] },
    { title: "Services", items: ["Consulting", "Penetration Testing", "Training"] },
    { title: "Resources", items: ["Blog", "Whitepapers", "Case Studies"] },
  ];

  return (
    <footer
      className={`bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white py-8 px-4 relative ${className}`}
    >
      <div className="container mx-auto grid gap-8 md:grid-cols-4 sm:grid-cols-2">
        {/* Quick Links */}
        {links.map((section) => (
          <div key={section.title} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="text-[#00f2fe] w-5 h-5" />
              <h3 className="text-xl font-semibold text-[#00f2fe]">{section.title}</h3>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: "#00f2fe" }}
                  className="cursor-pointer hover:text-[#00f2fe]"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Lock className="text-[#00f2fe] w-5 h-5" />
            <h3 className="text-xl font-semibold text-[#00f2fe]">Contact</h3>
          </div>
          <motion.div whileHover={{ color: "#00f2fe" }}>
            <p>Email: support@cybersecure.com</p>
            <p>Phone: +91 9004575152</p>
            <p>Address: KJSSE, Mumbai</p>
          </motion.div>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#00f2fe]">Follow Us</h3>
          <div className="flex space-x-4">
            {[Twitter, Linkedin, Github].map((Icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="text-white hover:text-[#00f2fe] cursor-pointer"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* New Appointment */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#00f2fe]">New Appointment</h3>
          <motion.div whileHover={{ color: "#00f2fe" }}>
            <p>Schedule your next appointment with us!</p>
          </motion.div>
          </div>
      </div>

      {/* Security Badge and Status */}
      <div className="mt-8 flex flex-col items-center">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="flex items-center space-x-2"
        >
          <Shield className="text-[#00f2fe] w-6 h-6 animate-pulse" />
          <span className="text-[#00f2fe] font-semibold">Verified Secure</span>
        </motion.div>

        <div className="mt-4 w-3/4 relative overflow-hidden">
          <motion.div
        className="bg-[#00f2fe] h-0.5 w-full"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        <div className="mt-2 text-sm">
          System Secure | Last Scan: {lastScanTime}
        </div>
      </div>

      <div className="mt-8"></div>
    </footer>
  );
};

export default Footer;