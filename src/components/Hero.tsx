'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Bienvenue chez <span className="text-blue-600">Dave & Luce</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Votre avenir numérique commence ici.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          🚀 Lancer un projet
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  )
}
