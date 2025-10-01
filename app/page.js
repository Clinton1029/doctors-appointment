"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  // Animated counters
  const [stats, setStats] = useState({ doctors: 0, appointments: 0, patients: 0 });

  useEffect(() => {
    let interval = setInterval(() => {
      setStats((prev) => ({
        doctors: Math.min(prev.doctors + 5, 500),
        appointments: Math.min(prev.appointments + 50, 10000),
        patients: Math.min(prev.patients + 100, 20000),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full font-bold">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative w-full text-center py-32 px-6 bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 text-white overflow-hidden shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Background Blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight relative z-10 drop-shadow-lg">
          Smarter Healthcare, <br />
          <span className="text-yellow-400">Simplified Booking</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto relative z-10">
          Book appointments with trusted doctors in seconds. Anytime. Anywhere.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <Link
            href="/booking"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition transform"
          >
            🚀 Book Appointment
          </Link>
          <Link
            href="/auth/register"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-extrabold hover:bg-white hover:text-blue-800 transition shadow-lg"
          >
            ✍️ Register
          </Link>
        </div>

        {/* Search Bar */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center relative z-10 max-w-xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="🔍 Search doctors, specialties..."
            className="w-full px-5 py-4 text-gray-800 font-semibold focus:outline-none"
          />
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 font-extrabold text-blue-900 hover:scale-105 transition">
            Search
          </button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="w-full py-20 bg-gradient-to-r from-gray-50 to-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-inner">
        <div>
          <h3 className="text-5xl font-extrabold text-blue-700">{stats.doctors}+</h3>
          <p className="text-gray-600">Trusted Doctors</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-blue-700">{stats.appointments}+</h3>
          <p className="text-gray-600">Appointments Booked</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold text-blue-700">{stats.patients}+</h3>
          <p className="text-gray-600">Happy Patients</p>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="w-full py-24 bg-gradient-to-r from-blue-50 to-indigo-50 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-900">Meet Our Top Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { name: "Dr. Sarah Mwangi", spec: "Cardiologist", img: "/doctor1.jpg", rating: 4.9, availability: "Mon-Fri" },
            { name: "Dr. John Otieno", spec: "Dermatologist", img: "/doctor2.jpg", rating: 4.8, availability: "Tue-Sat" },
            { name: "Dr. Aisha Kamau", spec: "Pediatrician", img: "/doctor3.jpg", rating: 5.0, availability: "Mon-Sun" },
          ].map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center border border-gray-100"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-32 h-32 rounded-full mb-5 object-cover border-4 border-blue-200 shadow"
              />
              <h3 className="text-2xl font-extrabold mb-1">{doc.name}</h3>
              <p className="text-gray-600">{doc.spec}</p>
              <p className="text-yellow-500 mt-2 font-bold">⭐ {doc.rating}</p>
              <p className="text-sm text-gray-500">Availability: {doc.availability}</p>
              <Link
                href="/booking"
                className="mt-5 inline-block bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 text-gray-300 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm md:text-base">© {new Date().getFullYear()} Doctors Appointment. All rights reserved.</p>
          <div className="flex gap-8 font-bold">
            <Link href="/about" className="hover:text-yellow-400">About</Link>
            <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
            <Link href="/privacy" className="hover:text-yellow-400">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
