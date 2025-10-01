"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [theme, setTheme] = useState("light");
  const [progress, setProgress] = useState(0);

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

      // progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);

      // active section highlight
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

  // Toggle dark/light theme
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gradient-to-r from-blue-700 via-cyan-600 to-indigo-700 bg-[length:300%_300%] animate-gradient backdrop-blur-lg shadow-xl border-b border-cyan-400/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 animate-fade-in">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(56,189,248,0.8)]"
          >
            Medical<span className="text-white">Center</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative font-semibold tracking-wide transition-all duration-500 ${
                      active === link.name
                        ? "text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]"
                        : "text-gray-200 hover:text-yellow-200 hover:animate-pulse"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 via-cyan-300 to-blue-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-500 ${
                        active === link.name ? "w-full" : "hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#appointment"
              className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.7)] hover:shadow-[0_0_30px_rgba(59,130,246,1)] transition-all duration-500"
            >
              Book Appointment
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              {theme === "light" ? (
                <Moon size={20} className="text-white" />
              ) : (
                <Sun size={20} className="text-yellow-300" />
              )}
            </button>
          </div>

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
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center bg-gradient-to-br from-blue-800 via-cyan-700 to-indigo-800 bg-[length:300%_300%] animate-gradient backdrop-blur-lg shadow-lg shadow-blue-400/40 px-6 py-8 space-y-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-semibold tracking-wide transition-all duration-500 ${
                    active === link.name
                      ? "text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.9)]"
                      : "text-gray-200 hover:text-yellow-200 hover:animate-pulse"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <a
              href="#appointment"
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-white font-bold shadow-[0_0_20px_rgba(59,130,246,0.9)] hover:shadow-[0_0_35px_rgba(59,130,246,1)] transition-all duration-500"
            >
              Book Appointment
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
