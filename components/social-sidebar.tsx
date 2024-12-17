import { Github, Gitlab, Linkedin, Mail } from 'lucide-react'

export function SocialSidebar() {
  return (
    <div className="fixed left-10 bottom-0 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        <a 
          href="https://github.com/FaroukDaadaa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://gitlab.com/FaroukDaadaa" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all"
        >
          <Gitlab size={20} />
        </a>
        <a 
          href="https://www.linkedin.com/in/farouk-daadaa-a7b5b7200/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="mailto:daaadaa.farouk@live.fr"
          className="text-gray-400 hover:text-[#64ffda] hover:-translate-y-1 transition-all"
        >
          <Mail size={20} />
        </a>
        <div className="w-px h-24 bg-gray-400"></div>
      </div>
    </div>
  )
}

