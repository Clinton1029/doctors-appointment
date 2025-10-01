"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Appointment from "@/components/Appointment";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Appointment />
    </main>
  );
}


 
