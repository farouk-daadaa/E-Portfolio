'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const navItems = [
  { number: '01', label: 'About', href: '#about' },
  { number: '02', label: 'Experience', href: '#experience' },
  { number: '03', label: 'Work', href: '#work' },
  { number: '04', label: 'Projects', href: '#projects' },
  { number: '05', label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0a192f]/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="#" className="text-[#64ffda] text-2xl font-bold">FD</a>
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map(({ number, label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="group flex items-center text-sm"
                onClick={() => setActiveSection(label.toLowerCase())}
              >
                <span className="text-[#64ffda] mr-1 text-xs">{number}.</span>
                <span className={cn(
                  "hover:text-[#64ffda] transition-colors",
                  activeSection === label.toLowerCase() && "text-[#64ffda]"
                )}>
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

