import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers"; // ✅ import the SessionProvider wrapper
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


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
  title: "Doctors Appointment",
  description: "Book appointments with doctors easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}