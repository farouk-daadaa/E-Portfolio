'use client'

import { motion } from 'framer-motion'

const technicalSkills = [
  'C', 'C++', 'C#', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'HTML/CSS', 
  'Node.js', 'Symfony', 'Spring', 'Angular', 'Flutter', 'Unity', 'Unreal Engine',
  'MongoDB', 'SQL', 'Firebase', 'Git/GitHub', 'Scrum'
]

const softSkills = ['Communication', 'Problem Solving', 'Teamwork', 'Time Management', 'Adaptability']

const languages = ['English', 'French', 'Arabic']

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <span key={skill} className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-4 mt-6">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <span key={language} className="bg-gray-700 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {language}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

