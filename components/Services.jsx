"use client";

import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaAmbulance, FaMicroscope, FaPills, FaSyringe } from "react-icons/fa";

const services = [
  {
    title: "General Checkup",
    icon: <FaStethoscope size={30} />,
    description: "Comprehensive health examinations for all ages to ensure wellness."
  },
  {
    title: "Cardiology",
    icon: <FaHeartbeat size={30} />,
    description: "Expert heart care with advanced diagnostics and treatments."
  },
  {
    title: "Emergency Services",
    icon: <FaAmbulance size={30} />,
    description: "24/7 emergency care with prompt and professional response."
  },
  {
    title: "Laboratory Tests",
    icon: <FaMicroscope size={30} />,
    description: "Accurate lab testing with modern equipment for reliable results."
  },
  {
    title: "Pharmacy",
    icon: <FaPills size={30} />,
    description: "Wide range of medications available on-site for convenience."
  },
  {
    title: "Vaccination",
    icon: <FaSyringe size={30} />,
    description: "Safe and effective immunizations for all age groups."
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-cyan-300 text-center mb-12 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg overflow-hidden hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Animated Gradient Glow Behind Card */}
              <motion.div
                className="absolute inset-0 -z-10 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(14,165,233,0.4), rgba(99,102,241,0.3), rgba(139,92,246,0.4))",
                  filter: "blur(50px)",
                }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
              />

              {/* Icon with Glow */}
              <motion.div
                className="flex items-center justify-center w-16 h-16 bg-cyan-400/20 rounded-full mb-6 text-cyan-300 shadow-lg relative z-10"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white relative z-10">{service.title}</h3>
              <p className="text-gray-200 relative z-10">{service.description}</p>

              {/* Optional subtle glow behind icon */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
