"use client";

import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaSyringe } from "react-icons/fa";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="relative py-20 bg-gradient-to-r from-indigo-950 via-cyan-900 to-blue-950 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-stretch gap-8">
        {/* Form Card */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-all duration-700 flex flex-col justify-between min-h-[500px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-cyan-400 mb-4 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              Book an Appointment
            </h2>
            <p className="text-gray-200 mb-6 text-sm md:text-base">
              Schedule your appointment with our experts. Fill in your details below.
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: "name", type: "text", label: "Full Name" },
                { id: "email", type: "email", label: "Email" },
                { id: "phone", type: "tel", label: "Phone Number" },
                { id: "date", type: "date", label: "Select Date" },
                { id: "time", type: "time", label: "Select Time" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    required
                    className="peer w-full rounded-lg px-3 pt-5 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-indigo-900 transition-all text-sm"
                    placeholder={field.label}
                  />
                  <label
                    htmlFor={field.id}
                    className="absolute left-3 top-1 text-gray-300 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm transition-all"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="md:col-span-2 relative">
                <textarea
                  id="message"
                  rows="3"
                  required
                  className="peer w-full rounded-lg px-3 pt-5 pb-2 bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-1 focus:ring-offset-indigo-900 transition-all text-sm"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 top-1 text-gray-300 text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm transition-all"
                >
                  Message
                </label>
              </div>

              {/* Premium CTA Button */}
              <button
                type="submit"
                className="md:col-span-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 py-2 px-5 rounded-full font-semibold text-white text-sm md:text-base shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:shadow-[0_0_40px_rgba(59,130,246,1)] transition-all duration-500 hover:scale-105"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </motion.div>

        {/* Illustration / Image Card with Floating Icons */}
        <motion.div
          className="flex-1 relative rounded-3xl overflow-hidden min-h-[500px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/contact_form.png"
            alt="Appointment"
            className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-700"
          />

          {/* Animated Floating Icons */}
          <motion.div
            className="absolute top-8 left-6 text-cyan-400 text-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <FaStethoscope />
          </motion.div>
          <motion.div
            className="absolute bottom-12 right-8 text-pink-400 text-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <FaHeartbeat />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-10 text-indigo-400 text-xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <FaSyringe />
          </motion.div>

          {/* Gradient floating circles */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-cyan-400/20 blur-3xl animate-pulse pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 rounded-full bg-indigo-500/20 blur-3xl animate-pulse pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
