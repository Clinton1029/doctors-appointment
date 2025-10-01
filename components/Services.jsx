"use client";

import { motion } from "framer-motion";

// Services data with inline SVG icons
const services = [
  {
    title: "General Checkup",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    description: "Comprehensive health examinations for all ages to ensure wellness.",
  },
  {
    title: "Cardiology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    description: "Expert heart care with advanced diagnostics and treatments.",
  },
  {
    title: "Emergency Services",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    description: "24/7 emergency care with prompt and professional response.",
  },
  {
    title: "Laboratory Tests",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    description: "Accurate lab testing with modern equipment for reliable results.",
  },
  {
    title: "Pharmacy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    description: "Wide range of medications available on-site for convenience.",
  },
  {
    title: "Vaccination",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
      </svg>
    ),
    description: "Safe and effective immunizations for all age groups.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 overflow-hidden bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white"
    >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-400/20 rounded-full mb-6 text-cyan-300 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
