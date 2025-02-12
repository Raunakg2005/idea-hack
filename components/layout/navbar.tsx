"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications] = useState(3);

  const links = ["Dashboard", "Alerts", "Transactions", "Analytics", "Profile"];

  return (
    <nav className="bg-[rgba(10,10,10,0.95)] backdrop-blur-lg border-b border-white/10 text-white fixed top-0 left-0 right-0 z-50 shadow-xl h-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            className="flex items-center flex-shrink-0"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
              Union Bank of India
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6 flex-1 justify-center">
            {links.map((link, index) => (
              <motion.div
                key={index}
                className="relative"
                whileHover="hover"
                initial="rest"
              >
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium hover:text-[#00f2fe] transition-colors duration-200"
                >
                  {link}
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00f2fe]"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Notification Bell */}
            <motion.button
              className="p-1.5 relative rounded-lg hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <motion.div
                  className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center"
                  initial={{ scale: 1 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  {notifications}
                </motion.div>
              )}
            </motion.button>

            {/* User Profile */}
            <motion.button
              className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline text-sm font-medium">Profile</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white/5 backdrop-blur-sm border-t border-white/10 mt-2"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {links.map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 transition-colors duration-200"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;