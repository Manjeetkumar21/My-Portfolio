import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '../utils/ScrollAnimation'
import { 
  Code, Database, Server, 
  Cloud, Layout 
} from 'lucide-react'

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const skillCategories = [
    {
      title: "Frontend",
      icon: Layout,
      color: "#FF6B6B",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Redux", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "#4ECDC4",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 90 },
        { name: "REST APIs", level: 75 },
        // { name: "Django", level: 70 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "#FFD93D",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MSSQL", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "MySQL", level: 65 }
      ]
    },
    {
      title: "Miscellaneous",
      icon: Cloud,
      color: "#6A5ACD",
      skills: [
        { name: "JavaScript", level: 90},
        { name: "Python", level: 75 },
        { name: "Git", level: 70 },
        { name: "Github", level: 75 },
       
      ]
    }
  ]

  return (
    <section className="bg-gradient-to-b from-[#0F1729] to-[#1A2333] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <ScrollAnimation>
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFA500]">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <motion.div 
                key={category.title}
                onClick={() => setActiveCategory(category.title === activeCategory ? null : category.title)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative overflow-hidden rounded-2xl p-6 
                  transition-all duration-300 cursor-pointer
                  ${activeCategory === category.title 
                    ? 'border-4 border-white shadow-2xl' 
                    : 'border border-[#67748c]'}
                  bg-[#2C3E50]
                `}
                style={{
                  background: `linear-gradient(145deg, ${category.color}20, ${category.color}10)`
                }}
              >
                <div className="flex items-center mb-4">
                  <category.icon 
                    className={`mr-3 ${activeCategory === category.title ? 'text-white' : 'text-gray-300'}`} 
                    size={28} 
                  />
                  <h3 className={`text-xl font-bold ${activeCategory === category.title ? 'text-white' : 'text-gray-200'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`
                        relative overflow-hidden rounded-full 
                        ${activeCategory === category.title ? 'bg-[#3C4A5F]' : 'bg-[#3C4A5F]/50'}
                      `}
                    >
                      <div 
                        className="absolute left-0 top-0 h-full rounded-full opacity-50"
                        style={{ 
                          backgroundColor: category.color,
                          width: `${skill.level}%`,
                          display: activeCategory === category.title ? 'block' : 'none'
                        }}
                      />
                      <div 
                        className={`
                          relative z-10 px-3 py-2 
                          ${activeCategory === category.title 
                            ? 'text-white' 
                            : 'text-gray-300'}
                        `}
                      >
                        {skill.name}
                        {activeCategory === category.title && (
                          <span className="float-right font-bold">{skill.level}%</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default SkillsSection