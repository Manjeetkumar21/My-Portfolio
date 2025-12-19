import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '../utils/ScrollAnimation'
import {
  Code, Database, Server,
  Cloud, Layout
} from 'lucide-react'

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend')

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
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "Git", level: 70 },
        { name: "Github", level: 75 },

      ]
    }
  ]

  return (
    <section className="bg-transparent text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <ScrollAnimation>
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                onClick={() => setActiveCategory(category.title === activeCategory ? null : category.title)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative overflow-hidden rounded-2xl p-6 
                  transition-all duration-300 cursor-pointer
                  ${activeCategory === category.title
                    ? 'border-4 border-white shadow-2xl'
                    : 'border border-[#67748c]'}
                  bg-[#252525]
                `}
                style={{
                  background: `linear-gradient(145deg, ${category.color}20, ${category.color}10)`,
                  boxShadow: activeCategory === category.title
                    ? `0 0 30px ${category.color}50`
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Animated Border Glow */}
                {activeCategory === category.title && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg, ${category.color}, transparent)`,
                      opacity: 0.1,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}

                <div className="flex items-center mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon
                      className={`mr-3 ${activeCategory === category.title ? 'text-white' : 'text-gray-300'}`}
                      size={28}
                      style={{ color: activeCategory === category.title ? category.color : undefined }}
                    />
                  </motion.div>
                  <h3 className={`text-xl font-bold ${activeCategory === category.title ? 'text-white' : 'text-gray-200'}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className={`
                        relative overflow-hidden rounded-full 
                        ${activeCategory === category.title ? 'bg-[#3C4A5F]' : 'bg-[#3C4A5F]/50'}
                      `}
                    >
                      <motion.div
                        className="absolute left-0 top-0 h-full rounded-full"
                        style={{
                          backgroundColor: category.color,
                          opacity: 0.5,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: activeCategory === category.title ? `${skill.level}%` : 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: skillIndex * 0.1,
                          ease: "easeOut"
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
                          <motion.span
                            className="float-right font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                          >
                            {skill.level}%
                          </motion.span>
                        )}
                      </div>
                    </motion.div>
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
