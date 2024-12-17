'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My name is Farouk Daadaa, a Computer Engineering student at ESPRIT with a passion for web, mobile  
          and game development. Through various academic projects, I've gained valuable hands-on experience in
          software engineering. I'm seeking a six-month internship to further develop my skills and contribute to
          impactful projects. With a strong programming foundation and a proactive approach, I'm eager to bring
          innovative solutions to your team.
        </motion.p>
      </div>
    </section>
  )
}

