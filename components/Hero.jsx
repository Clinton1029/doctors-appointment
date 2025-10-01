"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = ["Our Priority", "Our Commitment", "Our Passion"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
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
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, phrases]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-cyan-800/70 to-indigo-900/80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Text Column */}
        <div className="flex-1 text-center md:text-left">
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
            <a
              href="#appointment"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:shadow-[0_0_40px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-105"
            >
              Book Appointment
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-full border-2 border-cyan-300 text-cyan-300 font-semibold hover:bg-cyan-300 hover:text-blue-900 transition-all duration-500 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 relative">
          <img
            src="/gallery6.png"
            alt="Doctor"
            className="w-full max-w-md mx-auto md:mx-0 rounded-xl shadow-2xl object-contain"
          />
        </div>
      </div>

      {/* Animated Glow Blobs */}
      <div className="absolute inset-0">
        <div className="w-[600px] h-[600px] bg-cyan-400/20 rounded-full blur-3xl absolute -top-40 -left-40 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl absolute bottom-[-150px] right-[-150px] animate-pulse" />
      </div>
    </section>
  );
}
