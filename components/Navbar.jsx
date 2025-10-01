"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Book Appointment", href: "/booking" },
    { name: "Doctors", href: "/doctors" },
    { name: "Login", href: "/auth/login" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-white flex items-center gap-2"
        >
          🏥 DoctorsApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative text-white/90 hover:text-white font-medium transition group"
            >
              {link.name}
              {/* Underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
            </Link>
          ))}

          {/* Sign Up CTA */}
          <Link
            href="/auth/register"
            className="ml-4 px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white hover:text-gray-200 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 shadow-lg px-6 py-4 space-y-4"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/90 font-medium hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}

            {/* Sign Up CTA in mobile */}
            <Link
              href="/auth/register"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
