"use client";

import { motion, useAnimation, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// 🔥 Counter Component with smooth animation
function Counter({ from, to, duration = 2, label, suffix = "+" }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const spanRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const node = spanRef.current;
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.floor(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center md:items-start bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-cyan-400/30 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-4xl font-extrabold text-cyan-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
        <span ref={spanRef}>{from}</span>
        {suffix}
      </h3>
      <p className="text-gray-300 mt-2 text-lg">{label}</p>
    </motion.div>
  );
}

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-300 mb-4 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            About Our Medical Center
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto md:mx-0 mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6">
            We provide world-class healthcare services using the latest
            technology and highly qualified medical professionals. Our mission
            is to ensure every patient receives personalized and compassionate
            care.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
            From preventive care to advanced medical treatments, we focus on
            delivering premium services that put your health first.
          </p>

          {/* 🔥 Animated Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <Counter from={0} to={20} label="Years of Experience" />
            <Counter from={0} to={150} label="Qualified Doctors" />
            <Counter from={0} to={100000} label="Patients Served" suffix="" />
          </div>

          <motion.a
            href="#services"
            className="inline-block px-10 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:shadow-[0_0_55px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <motion.img
              src="/team2.png"
              alt="Medical Team"
              className="w-full rounded-xl shadow-2xl object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-400/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
