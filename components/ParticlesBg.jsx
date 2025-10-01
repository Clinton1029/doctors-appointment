"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Navbar from "@/components/Navbar";
import ParticlesBg from "@/components/ParticlesBg";
import doctorAnimation from "@/public/doctor-animation.json";

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
    <div className="flex flex-col items-center w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative w-full py-28 px-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white overflow-hidden flex flex-col lg:flex-row items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Particles Background */}
        <ParticlesBg />

        {/* Gradient Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Smarter Healthcare, <br />
            <span className="text-yellow-400">Simplified Booking</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Book appointments with trusted doctors in seconds. Anytime. Anywhere.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/booking"
              className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
            >
              Book Appointment
            </Link>
            <Link
              href="/auth/register"
              className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Register
            </Link>
          </div>

          {/* Search Bar */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start relative z-10 max-w-lg">
            <input
              type="text"
              placeholder="🔍 Search doctors, specialties..."
              className="w-full px-5 py-3 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none focus:outline-none text-gray-700"
            />
            <button className="bg-yellow-400 px-6 py-3 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none font-semibold hover:bg-yellow-500">
              Search
            </button>
          </div>
        </div>

        {/* Right Side Animation */}
        <motion.div
          className="w-full lg:w-1/2 mt-12 lg:mt-0 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Lottie animationData={doctorAnimation} loop={true} />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white grid grid-cols-1 sm:grid-cols-3 gap-6 text-center shadow-inner">
        <div>
          <h3 className="text-4xl font-bold text-blue-700">{stats.doctors}+</h3>
          <p className="text-gray-500">Trusted Doctors</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-700">{stats.appointments}+</h3>
          <p className="text-gray-500">Appointments Booked</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-blue-700">{stats.patients}+</h3>
          <p className="text-gray-500">Happy Patients</p>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="w-full py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Top Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Dr. Sarah Mwangi", spec: "Cardiologist", img: "/doctor1.jpg", rating: 4.9, availability: "Mon-Fri" },
            { name: "Dr. John Otieno", spec: "Dermatologist", img: "/doctor2.jpg", rating: 4.8, availability: "Tue-Sat" },
            { name: "Dr. Aisha Kamau", spec: "Pediatrician", img: "/doctor3.jpg", rating: 5.0, availability: "Mon-Sun" },
          ].map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-xl font-bold mb-1">{doc.name}</h3>
              <p className="text-gray-500">{doc.spec}</p>
              <p className="text-yellow-500 mt-2">⭐ {doc.rating}</p>
              <p className="text-sm text-gray-400">Availability: {doc.availability}</p>
              <Link
                href="/booking"
                className="mt-4 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Patients Say</h2>
        <motion.div
          className="max-w-5xl mx-auto flex gap-8 overflow-x-auto pb-4 scrollbar-hide"
          drag="x"
          dragConstraints={{ left: -400, right: 0 }}
        >
          {[
            { name: "Grace K.", text: "Booking was seamless and the doctor was excellent." },
            { name: "Michael O.", text: "This saved me time. Highly recommended!" },
            { name: "Fatma A.", text: "Trusted platform, I felt very secure." },
            { name: "James M.", text: "User-friendly, reliable and efficient." },
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="min-w-[300px] p-6 bg-white rounded-xl shadow-md"
            >
              <p className="text-gray-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-blue-700">{review.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="w-full py-20 bg-white px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "How do I book an appointment?", a: "Search for a doctor, pick a slot, and confirm instantly." },
            { q: "Is it free?", a: "Yes. Patients don’t pay to use our platform. Doctors may charge consultation fees." },
            { q: "Can I cancel or reschedule?", a: "Yes. Manage appointments easily from your dashboard." },
          ].map((faq, i) => (
            <details key={i} className="p-4 border rounded-lg shadow-sm">
              <summary className="font-semibold text-blue-700 cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-gray-400 py-10 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Doctors Appointment. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
