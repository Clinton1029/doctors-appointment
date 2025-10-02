"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// 🔥 Format numbers (K, M, B)
function formatNumber(value) {
  if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(1) + "B";
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(1) + "M";
  if (value >= 1_000) return (value / 1_000).toFixed(0) + "K";
  return value.toLocaleString();
}

// 🔥 Counter Component
function Counter({ from, to, duration = 2, label, suffix = "+", delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: false });
  const spanRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const node = spanRef.current;
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = formatNumber(Math.floor(value));
        },
        onComplete() {
          // Bounce & Glow when finished
          if (glowRef.current) {
            glowRef.current.classList.add("scale-110", "text-cyan-200");
            setTimeout(() => {
              glowRef.current.classList.remove("scale-110", "text-cyan-200");
            }, 600);
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center md:items-start bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-cyan-400/30 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3
        ref={glowRef}
        className="text-3xl md:text-4xl font-extrabold text-cyan-300 transition-all duration-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
      >
        <span ref={spanRef}>{from}</span>
        {suffix}
      </h3>
      <p className="text-gray-300 mt-2 text-base md:text-lg">{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white"
    >
      {/* Floating Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl absolute -top-28 -left-28"
          animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[350px] h-[350px] bg-indigo-500/20 rounded-full blur-3xl absolute bottom-[-100px] right-[-100px]"
          animate={{ x: [0, -25, 0], y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left Text Column */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-300 mb-4 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            About Our Medical Center
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto md:mx-0 mb-6 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.7)]" />

          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-5">
            We provide world-class healthcare services using the latest
            technology and highly qualified medical professionals. Our mission
            is to ensure every patient receives personalized and compassionate
            care.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            From preventive care to advanced medical treatments, we focus on
            delivering premium services that put your health first.
          </p>

          {/* 🔥 Animated Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <Counter from={0} to={20} label="Years of Experience" delay={0.1} />
            <Counter from={0} to={150} label="Qualified Doctors" delay={0.3} />
            <Counter from={0} to={100000} label="Patients Served" suffix="" delay={0.5} />
          </div>

          <motion.a
            href="#services"
            className="inline-block px-8 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:shadow-[0_0_45px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-110 text-sm md:text-base"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            <motion.img
              src="/team2.png"
              alt="Medical Team"
              className="w-full rounded-xl shadow-2xl object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <div className="absolute -top-10 -left-10 w-28 h-28 bg-cyan-400/25 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
