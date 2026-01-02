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
      techStack: ["React", "Next.js", "Node.js", "Express", "MSSQL"]
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
    <section className="py-16 text-white">
      <ScrollAnimation>
        <div className="container mx-auto sm:px-20 px-4">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 section-underline">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">Journey</span>
          </h2>
          </div>

          <div className="relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-[#1C1C1C] bg-opacity-80">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative sm:pl-16 pl-12 py-8 group"
              >
                {exp.endDate === null ? (
                  <motion.div
                    className="absolute sm:w-12 sm:h-12 w-10 h-10 bg-[#D4AF37] rounded-full -left-0 
                      border-4 border-[#D4AF37] border-opacity-40 flex items-center justify-center"
                    animate={{
                      scale: [1, 1, 1],
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
                  <motion.div
                    className="absolute sm:w-12 sm:h-12 h-10 w-10 bg-[#D4AF37] rounded-full -left-0 
                    border-4 border-[#D4AF37] border-opacity-40 flex items-center justify-center z-20"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Briefcase size={20} className="text-slate-900" />
                  </motion.div>
                )}

                <div className="glass-gold rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex justify-between flex-col sm:flex-row sm:items-center items-start mb-4 gap-2">
                      <div>
                        <h3 className="sm:text-2xl text-xl font-bold text-[#D4AF37]">
                          {exp.position}
                        </h3>
                        <p className="text-md text-slate-300 mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm bg-[#1C1C1C] bg-opacity-80 px-3 py-1 rounded-full">
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
                          className="px-3 py-1.5 text-sm glass-gold rounded-lg border border-[rgba(212,175,55,0.2)]
                                     hover:border-[rgba(212,175,55,0.6)] transition-all duration-200 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section >
  )
}

export default ExperienceSection
