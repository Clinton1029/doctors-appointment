"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Book Appointment", path: "/booking" },
    { name: "Doctors", path: "/doctors" },
    { name: "Login", path: "/auth/login" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-blue-900/90 to-indigo-900/90 backdrop-blur-md shadow-xl py-2"
          : "bg-gradient-to-r from-blue-900 to-indigo-900 py-4 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold text-white tracking-wide hover:scale-105 transition"
        >
          🏥 DoctorsApp
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.path}
              className={`relative text-white transition group ${
                pathname === link.path ? "text-yellow-400" : "hover:text-yellow-400"
              }`}
            >
              {link.name}
              {/* Fancy underline hover effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          {/* CTA */}
          <Link
            href="/auth/register"
            className="ml-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-blue-800 to-indigo-800 px-6 py-6 space-y-6 font-bold text-white"
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.path}
                className={`block ${
                  pathname === link.path ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/auth/register"
              className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-5 py-3 rounded-lg shadow-lg hover:scale-105 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
