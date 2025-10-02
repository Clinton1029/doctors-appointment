"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 via-cyan-900 to-indigo-950">
      <motion.div
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-300">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-gray-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-lg font-bold shadow-lg hover:scale-105 transition"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </section>
  );
}
