"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
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

  useEffect(() => {
    if (window.location.hash !== "#home") {
      window.history.replaceState(null, null, "#home");
    }
    const hero = document.querySelector("#home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);

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
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 z-[60] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />

      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-gradient-to-r from-blue-800 via-cyan-800 to-indigo-900 shadow-2xl py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <a
            href="#home"
            className={`font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(56,189,248,0.9)] transition-all ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
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
                    className={`relative font-semibold tracking-wide transition-all ${
                      active === link.name
                        ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
                        : "text-gray-200 hover:text-yellow-200"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 via-cyan-300 to-blue-400 rounded-full transition-all duration-500 ${
                        active === link.name ? "w-full" : "hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* ✅ Auth Buttons */}
            {!session ? (
              <>
                <a
                  href="/login"
                  className="ml-6 px-5 py-2 rounded-full bg-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="ml-3 px-5 py-2 rounded-full bg-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition"
                >
                  Register
                </a>
              </>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="ml-6 px-5 py-2 rounded-full bg-red-500 text-white font-bold shadow-lg hover:scale-105 transition"
              >
                Logout
              </button>
            )}
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
          className={`md:hidden backdrop-blur-xl bg-gradient-to-br from-blue-900/90 via-cyan-800/90 to-indigo-900/90 shadow-2xl transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center px-6 py-8 space-y-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-semibold tracking-wide transition-all ${
                    active === link.name
                      ? "text-white drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
                      : "text-gray-200 hover:text-yellow-200"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* ✅ Mobile Auth */}
            {!session ? (
              <>
                <a
                  href="/login"
                  className="mt-4 px-6 py-3 rounded-full bg-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="mt-2 px-6 py-3 rounded-full bg-indigo-500 text-white font-bold shadow-lg hover:scale-105 transition"
                >
                  Register
                </a>
              </>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="mt-4 px-6 py-3 rounded-full bg-red-500 text-white font-bold shadow-lg hover:scale-105 transition"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
