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

  // Handle scroll
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
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 shadow-lg shadow-blue-300/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text drop-shadow-md"
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
                    ? "text-white"
                    : "text-gray-100 hover:text-yellow-200"
                }`}
              >
                {link.name}
                {/* Glowing underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-cyan-300 transition-all duration-300 ${
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
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-500 shadow-lg shadow-blue-300/40 px-6 py-6 space-y-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-semibold transition-all duration-300 ${
                  active === link.name
                    ? "text-white drop-shadow-md"
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
