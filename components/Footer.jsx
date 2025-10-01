"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white py-12 overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-indigo-500/20 blur-3xl animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]">
            Medical Center
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            Providing world-class healthcare with modern facilities and expert medical professionals dedicated to your care.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-cyan-300 transition-colors duration-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-300 transition-colors duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-300 transition-colors duration-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-cyan-300 transition-colors duration-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#home" className="hover:text-cyan-300 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-300 transition-colors duration-300">About</a></li>
            <li><a href="#services" className="hover:text-cyan-300 transition-colors duration-300">Services</a></li>
            <li><a href="#doctors" className="hover:text-cyan-300 transition-colors duration-300">Doctors</a></li>
            <li><a href="#appointment" className="hover:text-cyan-300 transition-colors duration-300">Appointment</a></li>
            <li><a href="#contact" className="hover:text-cyan-300 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]">
            Contact Us
          </h3>
          <p className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
            <span className="text-cyan-400">📍</span> 123 Medical Street, Nairobi
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
            <span className="text-cyan-400">📞</span> +254 712 345 678
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
            <span className="text-cyan-400">✉️</span> contact@medicalcenter.com
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-400 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Medical Center. All rights reserved.
      </div>
    </footer>
  );
}
