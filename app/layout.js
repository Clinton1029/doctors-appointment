import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Appointment System",
  description: "Book and manage medical appointments easily",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950 text-white">
        {/* Navbar */}
        <header className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-lg shadow-lg">
          <h1 className="text-2xl font-bold text-cyan-300">MediCare</h1>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-cyan-300">Home</Link>
            <Link href="/services" className="hover:text-cyan-300">Services</Link>
            <Link href="/doctors" className="hover:text-cyan-300">Doctors</Link>
            <Link href="/blog" className="hover:text-cyan-300">Blog</Link>
            <Link href="/contact" className="hover:text-cyan-300">Contact</Link>
            {/* Auth Buttons */}
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-indigo-500 font-semibold shadow-md hover:scale-105 transition"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold shadow-md hover:scale-105 transition"
            >
              Register
            </Link>
          </nav>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
