"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const phrases = ["Our Priority", "Our Commitment", "Our Passion"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Smooth typewriter effect
  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1500); // pause before deleting
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setDisplayText(phrases[index].substring(0, subIndex));
    }, deleting ? 100 : 180); // slower typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, phrases]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950"
    >
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl absolute -top-40 -left-40"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl absolute bottom-[-150px] right-[-150px]"
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        {/* Left Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            Your Health,{" "}
            <span className="text-cyan-300">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
            Experience world-class healthcare with advanced technology, modern
            facilities, and dedicated medical experts focused on your well-being.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
            <motion.a
              href="#appointment"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:shadow-[0_0_40px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.a>
            <motion.a
              href="#about"
              className="px-8 py-3 rounded-full border-2 border-cyan-300 text-cyan-300 font-semibold hover:bg-cyan-300 hover:text-blue-900 transition-all duration-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image Column */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/gallery6.png"
            alt="Doctor"
            className="w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-2xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
