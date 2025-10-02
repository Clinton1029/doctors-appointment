"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const doctors = [
  { name: "Dr. John Smith", specialty: "Cardiologist", image: "/team1.png" },
  { name: "Dr. Emily Clark", specialty: "Neurologist", image: "/female doc.jpg" },
  { name: "Dr. Michael Lee", specialty: "Surgeon", image: "/gallery4.png" },
  { name: "Dr. Sarah Johnson", specialty: "Pediatrician", image: "/team3.png" },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="relative py-20 bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white overflow-hidden"
    >
      {/* Floating Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="w-[350px] h-[350px] bg-cyan-400/15 rounded-full blur-3xl absolute -top-20 -left-20"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
        />
        <motion.div
          className="w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl absolute bottom-[-80px] right-[-80px]"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 26, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-cyan-300 text-center mb-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Doctors
        </motion.h2>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-400"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Doctor Image */}
              <div className="w-full h-64 md:h-72 relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-1">{doctor.name}</h3>
                <p className="text-cyan-300 text-sm md:text-base mb-3">{doctor.specialty}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FaFacebookF size={14} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FaTwitter size={14} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
