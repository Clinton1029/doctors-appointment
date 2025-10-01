"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

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

      {/* Hero Section with Gradient + Illustration */}
      <motion.section
        className="relative w-full text-center py-28 px-6 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Blob Background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight relative z-10">
          Smarter Healthcare <br /> Starts With{" "}
          <span className="text-yellow-400">Easy Booking</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto relative z-10">
          Find the right doctor, book an appointment, and manage your health
          journey — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 relative z-10">
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
        <div className="mt-10 flex justify-center relative z-10">
          <input
            type="text"
            placeholder="🔍 Search doctors, specialties..."
            className="w-full max-w-lg px-5 py-3 rounded-l-lg focus:outline-none text-gray-700"
          />
          <button className="bg-yellow-400 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-500">
            Search
          </button>
        </div>
      </motion.section>

      {/* Stats Section with Counters */}
      <section className="w-full py-16 bg-white grid grid-cols-1 md:grid-cols-3 gap-6 text-center shadow-inner">
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

      {/* Featured Doctors Section */}
      <section className="w-full py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Meet Our Top Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Dr. Sarah Mwangi", spec: "Cardiologist", img: "/doctor1.jpg", rating: 4.9 },
            { name: "Dr. John Otieno", spec: "Dermatologist", img: "/doctor2.jpg", rating: 4.8 },
            { name: "Dr. Aisha Kamau", spec: "Pediatrician", img: "/doctor3.jpg", rating: 5.0 },
          ].map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-xl font-bold mb-1">{doc.name}</h3>
              <p className="text-gray-500">{doc.spec}</p>
              <p className="text-yellow-500 mt-2">⭐ {doc.rating}</p>
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

      {/* Testimonials Carousel */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-indigo-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          What Our Patients Say
        </h2>
        <motion.div
          className="max-w-4xl mx-auto flex gap-8 overflow-x-auto pb-4"
          drag="x"
          dragConstraints={{ left: -300, right: 0 }}
        >
          {[
            { name: "Grace K.", text: "Booking my appointment was so easy! The doctor was very professional." },
            { name: "Michael O.", text: "This system saved me so much time. I highly recommend it!" },
            { name: "Fatma A.", text: "Great service, I found a trusted doctor within minutes." },
            { name: "James M.", text: "The platform is smooth, secure, and very reliable." },
          ].map((review, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="min-w-[300px] p-6 bg-white rounded-xl shadow-md"
            >
              <p className="text-gray-600 mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-blue-700">{review.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-white px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">FAQs</h2>
        <div className="space-y-6">
          {[
            { q: "How do I book an appointment?", a: "Simply search for a doctor, choose a time slot, and confirm your booking." },
            { q: "Is it free to use?", a: "Yes, patients can book appointments free of charge. Doctors may set consultation fees." },
            { q: "Can I cancel my appointment?", a: "Yes, cancellations and reschedules are supported from your dashboard." },
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
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
