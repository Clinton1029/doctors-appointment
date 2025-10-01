"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Text Column */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-lg">
            About Our Medical Center
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            We provide world-class healthcare services using the latest technology 
            and highly qualified medical professionals. Our mission is to ensure 
            every patient receives personalized and compassionate care.
          </p>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
            From preventive care to advanced medical treatments, we focus on delivering 
            premium services that put your health first.
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.9)] transition-all duration-500 hover:scale-105"
          >
            Learn More
          </a>
        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <img
              src="/team2.png" // Replace with your illustration/doctor image
              alt="Medical Team"
              className="w-full rounded-xl shadow-2xl object-contain"
            />
            {/* Glowing Accent Circle */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
