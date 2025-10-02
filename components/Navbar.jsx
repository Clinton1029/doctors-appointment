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

  // ✅ Dynamic links (Appointment protected)
  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Appointment", href: session ? "/appointment" : "/login" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // ✅ Always scroll to Hero on refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Force the hash to #home if not already
      if (window.location.hash !== "#home") {
        window.history.replaceState(null, null, "#home");
      }

      // Smooth scroll into Hero
      const hero = document.querySelector("#home");
      if (hero) {
        setTimeout(() => {
          hero.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay so DOM is ready
      }
    }
  }, []);

  // ✅ Handle scroll and progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / totalHeight) * 100);

      const scrollPos = window.scrollY + 120;
      links.forEach((link) => {
        if (link.href.startsWith("#")) {
          const section = document.querySelector(link.href);
          if (section) {
            if (
              scrollPos >= section.offsetTop &&
              scrollPos < section.offsetTop + section.offsetHeight
            ) {
              setActive(link.name);
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

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

            {/* Auth Buttons */}
            {!session ? (
              <>
                <a
                  href="/login"
                  className="ml-4 px-5 py-2 rounded-full bg-cyan-500 text-white font-bold shadow hover:scale-105 transition"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="ml-2 px-5 py-2 rounded-full bg-indigo-500 text-white font-bold shadow hover:scale-105 transition"
                >
                  Register
                </a>
              </>
            ) : (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow hover:scale-105 transition"
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
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-900 via-cyan-800 to-indigo-900 text-white px-6 py-6 space-y-6 absolute top-full left-0 w-full shadow-xl">
            <ul className="space-y-6">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`block font-semibold tracking-wide transition-all ${
                      active === link.name
                        ? "text-cyan-300 drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
                        : "text-gray-200 hover:text-yellow-200"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Auth Buttons (Mobile) */}
            {!session ? (
              <div className="space-y-4">
                <a
                  href="/login"
                  className="block w-full text-center px-5 py-2 rounded-full bg-cyan-500 text-white font-bold shadow hover:scale-105 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="block w-full text-center px-5 py-2 rounded-full bg-indigo-500 text-white font-bold shadow hover:scale-105 transition"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </a>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut({ callbackUrl: "/" });
                }}
                className="block w-full text-center px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold shadow hover:scale-105 transition"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </>
  );
}
