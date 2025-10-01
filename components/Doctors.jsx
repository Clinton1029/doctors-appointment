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
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {/* Doctor Image */}
              <div className="w-full h-80 md:h-96 relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-contain rounded-t-2xl"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{doctor.name}</h3>
                <p className="text-cyan-300 mb-4">{doctor.specialty}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-cyan-300 transition-colors duration-300"
                  >
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
