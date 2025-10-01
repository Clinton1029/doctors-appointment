"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative">
        {/* Floating gradient circles */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-indigo-500/20 blur-3xl animate-pulse pointer-events-none"></div>

        {/* Contact Form */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            Get in Touch
          </h2>
          <p className="text-gray-200 mb-8">
            Have questions or need assistance? Send us a message and our team will respond promptly.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="peer w-full rounded-xl px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-indigo-900 transition-all"
                  placeholder={field.label}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
                >
                  {field.label}
                </label>
              </div>
            ))}

            {/* Message */}
            <div className="md:col-span-2 relative">
              <textarea
                id="message"
                rows="4"
                required
                className="peer w-full rounded-xl px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-indigo-900 transition-all"
                placeholder="Your Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Your Message
              </label>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 py-3 rounded-full font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:shadow-[0_0_50px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Illustration / Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/contact_form.png"
            alt="Contact"
            className="w-full rounded-3xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
