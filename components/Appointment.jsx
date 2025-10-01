"use client";

import { motion } from "framer-motion";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="relative py-28 bg-gradient-to-r from-indigo-950 via-cyan-900 to-blue-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Form */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
            Book an Appointment
          </h2>
          <p className="text-gray-200 mb-6">
            Schedule your appointment with our experts. Fill in your details below.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                required
                className="peer w-full rounded-lg px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Full Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                required
                className="peer w-full rounded-lg px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                required
                className="peer w-full rounded-lg px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Phone Number"
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Phone Number
              </label>
            </div>

            <div className="relative">
              <input
                type="date"
                id="date"
                required
                className="peer w-full rounded-lg px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <label
                htmlFor="date"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Select Date
              </label>
            </div>

            <div className="relative">
              <input
                type="time"
                id="time"
                required
                className="peer w-full rounded-lg px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <label
                htmlFor="time"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Select Time
              </label>
            </div>

            <div className="md:col-span-2 relative">
              <textarea
                id="message"
                rows="4"
                required
                className="peer w-full rounded-lg px-4 pt-6 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-300 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-500"
            >
              Book Appointment
            </button>
          </form>
        </motion.div>

        {/* Illustration / Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/about2.png" // Replace with a medical illustration or doctor image
            alt="Appointment"
            className="w-full rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
