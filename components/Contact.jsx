"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Floating Gradient Circles */}
        <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-12 -right-12 w-20 h-20 rounded-full bg-indigo-500/20 blur-3xl animate-pulse pointer-events-none"></div>

        {/* Contact Form */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
            Get in Touch
          </h2>
          <p className="text-gray-200 mb-6">
            Have questions? Fill in your details and we'll respond promptly.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "name", type: "text", label: "Full Name" },
              { id: "email", type: "email", label: "Email" },
              { id: "phone", type: "tel", label: "Phone Number" },
            ].map((field) => (
              <div key={field.id} className="relative">
                <input
                  type={field.type}
                  id={field.id}
                  required
                  className="peer w-full rounded-xl px-3 pt-5 pb-1 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-indigo-900 transition-all"
                  placeholder={field.label}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-3 top-1 text-gray-300 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
                >
                  {field.label}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="md:col-span-2 relative">
              <textarea
                id="message"
                rows="3"
                required
                className="peer w-full rounded-xl px-3 pt-5 pb-1 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-indigo-900 transition-all"
                placeholder="Your Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-1 text-gray-300 text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 py-2.5 rounded-full font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.8)] hover:shadow-[0_0_40px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-105 text-sm md:text-base"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map + Contact Info */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.918725224205!2d36.8219463!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10a8dbabf3a9%3A0x3d1e25fcb5ec4f0!2sNairobi!5e0!3m2!1sen!2ske!4v1696111111111!5m2!1sen!2ske"
            className="w-full h-48 md:h-64 rounded-3xl shadow-2xl border border-white/20"
            allowFullScreen
            loading="lazy"
            title="Clinic Location"
          ></iframe>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-2">Contact Info</h3>
            <p className="flex items-center gap-2 text-gray-200 mb-1">
              <FaMapMarkerAlt className="text-cyan-400" /> 123 Medical Street, Nairobi
            </p>
            <p className="flex items-center gap-2 text-gray-200 mb-1">
              <FaPhoneAlt className="text-cyan-400" /> +254 712 345 678
            </p>
            <p className="flex items-center gap-2 text-gray-200">
              <FaEnvelope className="text-cyan-400" /> contact@medicalcenter.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
