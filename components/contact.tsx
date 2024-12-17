'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Github, Gitlab, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="mailto:daaadaa.farouk@live.fr" className="flex items-center text-purple-500 hover:text-purple-400">
            <Mail className="mr-2" /> daaadaa.farouk@live.fr
          </a>
          <a href="tel:+21622366500" className="flex items-center text-purple-500 hover:text-purple-400">
            <Phone className="mr-2" /> +216 22 366 500
          </a>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/farouk-daadaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <Github />
            </a>
            <a href="https://gitlab.com/farouk.daadaa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <Gitlab />
            </a>
            <a href="https://www.linkedin.com/in/farouk-daadaa-78b8aa282/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500">
              <Linkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

