"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const doctors = [
  { name: "Dr. John Smith", specialty: "Cardiologist", image: "/team1.png" },
  { name: "Dr. Emily Clark", specialty: "Neurologist", image: "/about1.png" },
  { name: "Dr. Michael Lee", specialty: "Surgeon", image: "/gallery4.png" },
  { name: "Dr. Sarah Johnson", specialty: "Pediatrician", image: "/team3.png" },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="relative py-28 bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white overflow-hidden"
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
          Meet Our Doctors
        </motion.h2>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500 pt-28 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Glowing background circles */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-500/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

              {/* Circular Avatar (perfectly centered) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg bg-white/20 backdrop-blur-lg">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/30 via-blue-500/20 to-indigo-500/30 blur-xl animate-pulse"></div>
              </div>

              {/* Doctor Info */}
              <div className="mt-16 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-cyan-300 mb-4">{doctor.specialty}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-white hover:text-cyan-300 transition-colors duration-300">
                    <FaLinkedinIn />
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
