'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://res.cloudinary.com/dko5sommz/image/upload/v1743812649/logo_rblwxd.png"
          alt="Logo Dave & Luce"
          width={120}
          height={120}
          className="mx-auto mb-4"
          priority
        />
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
    </section>
  )
}
