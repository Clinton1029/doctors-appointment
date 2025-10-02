"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white"
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

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
          },
        }}
      >
        {/* Left Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-300 mb-4 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            About Our Medical Center
          </h2>
          {/* Gradient Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto md:mx-0 mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

          <motion.p
            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1 }}
          >
            We provide world-class healthcare services using the latest technology 
            and highly qualified medical professionals. Our mission is to ensure 
            every patient receives personalized and compassionate care.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1 }}
          >
            From preventive care to advanced medical treatments, we focus on delivering 
            premium services that put your health first.
          </motion.p>

          <motion.a
            href="#services"
            className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:shadow-[0_0_55px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div
          className="flex-1 relative"
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <motion.img
              src="/team2.png"
              alt="Medical Team"
              className="w-full rounded-xl shadow-2xl object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              animate={{ y: [0, -10, 0] }}
              // floating effect
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            {/* Glowing Accent Circles */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-400/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
