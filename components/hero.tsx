'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm <span className="text-purple-500">Farouk Daadaa</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Computer Engineering Student | Web, Mobile, and Game Developer
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          View My Work
          <ArrowRight className="ml-2" />
        </motion.a>
      </div>
    </section>
  )
}

