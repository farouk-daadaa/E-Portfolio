'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: "CityScape Manager",
    description: "Developed a multiplayer urban management simulation game using Unity, Maya, C#, Node.js, MongoDB, GitLab, and Mirror Multiplayer, incorporating SDGs: Good Health and Well-being (3), Gender Equality (5), Affordable and Clean Energy (7), Industry, Innovation, and Infrastructure (9), Responsible Consumption and Production (12), and Climate Action (13).",
    year: "2024"
  },
  {
    title: "Internship at Esprit Group",
    description: "Developed a centralized web application using Spring Boot and Angular to streamline event management for the Esprit Group's Job Fair, automating processes, enhancing communication, and improving user experience.",
    year: "2024"
  },
  {
    title: "PC Building Simulation",
    description: "Developed a VR game for PC building and customization using Unity, Maya, C#, GitLab, and Meta Quest 2.",
    year: "2023"
  },
  {
    title: "PI DEV (Majesty)",
    description: "Developed a multi-platform freelance application with desktop functionality using Java and JavaFX, a website with Symfony, PHP, HTML, and CSS, and a mobile app with Codename One.",
    year: "2023"
  },
  {
    title: "Desktop Application",
    description: "Developed a desktop application using Qt, C++ and GitHub.",
    year: "2023"
  },
  {
    title: "Artounsi",
    description: "An art gallery mobile application showcasing and selling artwork. Built with Flutter and integrated with Firebase for secure backend functionality.",
    year: "2022"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-900 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-purple-500">{project.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

