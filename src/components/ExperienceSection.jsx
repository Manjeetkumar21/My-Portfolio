import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  Code, 
  ChevronRight 
} from 'lucide-react'
import { ScrollAnimation } from '../utils/ScrollAnimation'

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tranzita Systems",
      position: "SDE (Full Stack Developer)",
      duration: "Current Role",
      startDate: new Date(2024, 9, 1),
      endDate: null,
      description: "Full-stack development of web applications with modern tech stack.",
      responsibilities: [
        "Develop scalable web solutions using React and Node.js",
        "Design and implement efficient backend APIs",
        "Optimize application performance and database interactions"
      ],
      techStack: ["React", "Next.js", "Node.js", "Express" , "MSSQL"]
    },
    {
      company: "360lutions Pvt. Ltd",
      position: "Frontend Developer Intern",
      duration: "4 months",
      startDate: new Date(2024, 4, 1),
      endDate: new Date(2024, 7, 31),
      description: "Gained hands-on experience in modern frontend development.",
      responsibilities: [
        "Created responsive user interfaces",
        "Implemented performance optimizations",
        "Participated in collaborative development processes"
      ],
      techStack: ["React", "Tailwind", "JavaScript"]
    }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
      <ScrollAnimation>
        <div className="container mx-auto sm:px-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFA500]">Journey</span>
          </h2>
          
          <div className="relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-slate-700">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative sm:pl-16 pl-12 py-8"
              >
                {exp.endDate === null ? (
                  <motion.div 
                    className="absolute sm:w-12 sm:h-12 w-10 h-10 bg-[#FFA500] rounded-full -left-0 
                      border-4 border-slate-800 flex items-center justify-center"
                    animate={{
                      scale: [1, 1, 1],
                      boxShadow: [
                        '0 0 0 0 rgba(255, 165, 0, 0.4)',
                        '0 0 15px 5px rgba(255, 165, 0, 0.6)',
                        '0 0 0 0 rgba(255, 165, 0, 0.4)'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Briefcase size={20} className="text-slate-900" />
                  </motion.div>
                ) : (
                  <div className="absolute sm:w-12 sm:h-12 h-10 w-10 bg-[#FFA500] rounded-full -left-0 
                    border-4 border-slate-800 flex items-center justify-center">
                    <Briefcase size={20} className="text-slate-900" />
                  </div>
                )}
                
                <div className="bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-between flex-col sm:flex-row sm:items-center items-start mb-4 gap-2">
                    <div>
                    <h3 className="sm:text-2xl text-xl font-bold text-[#FFA500]">
                      {exp.position}
                    </h3>
                    <p className="text-md text-slate-300 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm bg-slate-700 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-3 text-slate-300">
                    <Calendar size={18} className="mr-2" />
                    <span>
                      {exp.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} - 
                      {exp.endDate 
                        ? exp.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" }) 
                        : " Present"}
                    </span>
                  </div>
                  
                  <p className="mb-4 text-slate-400">{exp.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start">
                        <ChevronRight size={16} className="mr-2 text-amber-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">{resp}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-slate-700 text-[#FFA500] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default ExperienceSection