"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/gallery6.png" // replace with your doctor/hospital image
          alt="Medical Center"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-cyan-800/70 to-indigo-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]">
          Your Health, <span className="text-cyan-300">Our Priority</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Professional medical services with modern facilities and expert doctors
          dedicated to your care.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#appointment"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] hover:shadow-[0_0_35px_rgba(59,130,246,1)] transition-all duration-500"
          >
            Book Appointment
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full border-2 border-cyan-300 text-cyan-300 font-semibold hover:bg-cyan-300 hover:text-blue-900 transition-all duration-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
