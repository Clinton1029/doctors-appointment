"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // ✅ import should be at the top

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Navbar at the top */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="text-center py-20 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Welcome to Doctors Appointment System
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Book your medical appointments online with trusted doctors.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/booking"
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
          >
            Book Appointment
          </Link>
          <Link
            href="/auth/login"
            className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            Login
          </Link>
        </div>
      </motion.section>

      {/* Featured Doctors Section */}
      <section className="w-full py-16 bg-gray-100 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Featured Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Doctor cards — dynamic later */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Dr. Sarah Mwangi</h3>
            <p className="text-gray-500">Cardiologist</p>
            <Link
              href="/booking"
              className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Dr. John Otieno</h3>
            <p className="text-gray-500">Dermatologist</p>
            <Link
              href="/booking"
              className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Dr. Aisha Kamau</h3>
            <p className="text-gray-500">Pediatrician</p>
            <Link
              href="/booking"
              className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
