'use client'

import { motion } from 'framer-motion'

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="bg-gray-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2">École Supérieure Privée D'Ingénierie Et De Technologies - ESPRIT</h3>
          <p className="text-gray-400 mb-2">2020 – Present</p>
          <p className="text-purple-500">Computer Engineering</p>
        </motion.div>
        <motion.div
          className="bg-gray-900 p-6 rounded-lg mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">Bachelor's degree in Computer Science</h3>
          <p className="text-gray-400 mb-2">2019 – 2020</p>
        </motion.div>
      </div>
    </section>
  )
}

