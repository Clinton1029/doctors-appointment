"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white py-12 overflow-hidden">
      {/* Premium Floating Circles */}
      <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-12 -right-12 w-28 h-28 rounded-full bg-indigo-500/20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            Medical Center
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            Delivering world-class healthcare with modern facilities, expert professionals, and compassionate care.
          </p>
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-400 hover:text-white transition-all duration-500 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]"
              >
                <Icon className="text-white hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            {["Home", "About", "Services", "Doctors", "Appointment", "Blog", "Contact"].map((link, idx) => (
              <li key={idx}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative inline-block group text-gray-300 hover:text-cyan-300 transition-colors duration-300"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 text-gray-200 text-sm md:text-base">
            <span className="text-cyan-400">📍</span> 123 Medical Street, Nairobi
          </p>
          <p className="flex items-center gap-2 text-gray-200 text-sm md:text-base">
            <span className="text-cyan-400">📞</span> +254 712 345 678
          </p>
          <p className="flex items-center gap-2 text-gray-200 text-sm md:text-base">
            <span className="text-cyan-400">✉️</span> contact@medicalcenter.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 text-center text-gray-400 text-sm md:text-base relative z-10">
        &copy; {new Date().getFullYear()} Medical Center. All rights reserved.
      </div>
    </footer>
  );
}
