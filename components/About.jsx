"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white"
    >
      {/* Floating Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-3xl absolute -top-32 -left-32"
          animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl absolute bottom-[-100px] right-[-100px]"
          animate={{ x: [0, -25, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-300 mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            About Our Medical Center
          </h2>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
            We provide world-class healthcare services using the latest technology 
            and highly qualified medical professionals. Our mission is to ensure 
            every patient receives personalized and compassionate care.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            From preventive care to advanced medical treatments, we focus on delivering 
            premium services that put your health first.
          </p>
          <motion.a
            href="#services"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:shadow-[0_0_50px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
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
            <motion.img
              src="/team2.png" // Replace with your illustration/doctor image
              alt="Medical Team"
              className="w-full rounded-xl shadow-2xl object-contain"
              animate={{ y: [0, -10, 0] }} // subtle floating effect
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            {/* Glowing Accent Circles */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
