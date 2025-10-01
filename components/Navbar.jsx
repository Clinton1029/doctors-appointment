"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          🏥 DoctorsApp
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/booking" className="hover:text-primary transition">
            Book Appointment
          </Link>
          <Link href="/doctors" className="hover:text-primary transition">
            Doctors
          </Link>
          <Link href="/auth/login" className="hover:text-primary transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
