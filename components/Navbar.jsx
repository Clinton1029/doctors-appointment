"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Appointment", href: "#appointment" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // Track scroll for navbar style + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 120;
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-[length:200%_200%] animate-gradient backdrop-blur-md shadow-xl shadow-blue-400/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]"
        >
          Medical<span className="text-white">Center</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`relative font-semibold transition-all duration-300 ${
                  active === link.name
                    ? "text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    : "text-gray-100 hover:text-yellow-200"
                }`}
              >
                {link.name}
                {/* Animated glowing underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-400 transition-all duration-500 ${
                    active === link.name ? "w-full" : "hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-gradient-to-br from-blue-700 via-cyan-600 to-indigo-700 bg-[length:200%_200%] animate-gradient backdrop-blur-md shadow-lg shadow-blue-400/40 px-6 py-6 space-y-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-semibold transition-all duration-300 ${
                  active === link.name
                    ? "text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]"
                    : "text-gray-200 hover:text-yellow-200 hover:drop-shadow-md"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
