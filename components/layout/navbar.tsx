"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const links = ["Dashboard", "Alerts", "Transactions", "Analytics", "Profile"];

  return (
    <nav className="bg-[rgba(10,10,10,0.95)] text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <motion.div
          className="text-xl font-bold text-[#00f2fe] cursor-pointer"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Union Bank of India
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="relative hover:text-[#00f2fe] cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {link}
              <motion.div
                className="h-0.5 bg-[#00f2fe] absolute left-0 right-0 mx-auto w-0"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex space-x-4 items-center">
          {/* Notification Bell */}
          <motion.div
            className="relative cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <Bell className="w-6 h-6 text-white" />
            {notifications > 0 && (
              <motion.div
                className="absolute -top-2 -right-2 bg-[#FF0000] text-xs text-white w-5 h-5 rounded-full flex items-center justify-center"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {notifications}
              </motion.div>
            )}
          </motion.div>

          {/* User Profile */}
          <motion.div
            className="cursor-pointer flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <User className="w-6 h-6 text-white" />
            <span className="hidden md:inline">Profile</span>
          </motion.div>

          {/* Hamburger Menu */}
          <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0A0A0A] text-white md:hidden space-y-4 py-4"
        >
          {links.map((link, index) => (
            <a key={index} href="#" className="block px-4 py-2 hover:bg-[#1A1A1A]">
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
