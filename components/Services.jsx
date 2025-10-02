"use client";

import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaAmbulance, FaMicroscope, FaPills, FaSyringe } from "react-icons/fa";

const services = [
  {
    title: "General Checkup",
    icon: <FaStethoscope size={26} />,
    description: "Comprehensive health exams for all ages."
  },
  {
    title: "Cardiology",
    icon: <FaHeartbeat size={26} />,
    description: "Expert heart care with advanced treatments."
  },
  {
    title: "Emergency Services",
    icon: <FaAmbulance size={26} />,
    description: "24/7 emergency response with professionalism."
  },
  {
    title: "Laboratory Tests",
    icon: <FaMicroscope size={26} />,
    description: "Accurate lab testing with modern equipment."
  },
  {
    title: "Pharmacy",
    icon: <FaPills size={26} />,
    description: "Convenient access to trusted medications."
  },
  {
    title: "Vaccination",
    icon: <FaSyringe size={26} />,
    description: "Safe and effective immunizations for all ages."
  },
];

export default function Services() {
  return (
    <section 
      id="services" 
      className="relative py-20 bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-cyan-300 text-center mb-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.7)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Premium Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/10 overflow-hidden hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all duration-400"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, rgba(14,165,233,0.25), rgba(99,102,241,0.2), rgba(139,92,246,0.25))",
                  filter: "blur(35px)",
                }}
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
              />

              {/* Icon */}
              <motion.div
                className="flex items-center justify-center w-14 h-14 bg-cyan-400/20 rounded-full mb-5 text-cyan-300 shadow-lg"
                whileHover={{ scale: 1.15, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
