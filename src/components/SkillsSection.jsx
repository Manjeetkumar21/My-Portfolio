import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation } from '../utils/ScrollAnimation'
import {
  Sparkles, Star, Palette, Settings,
  Database, Wrench, Code2, Zap, Box, Cpu
} from 'lucide-react'

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const allSkills = [
    // Frontend - Top
    { name: "React", category: "Frontend", level: 90, x: 50, y: 15, color: "#61DAFB" },
    { name: "Next.js", category: "Frontend", level: 85, x: 70, y: 20, color: "#000000" },
    { name: "Tailwind", category: "Frontend", level: 95, x: 30, y: 20, color: "#06B6D4" },
    { name: "Redux", category: "Frontend", level: 80, x: 50, y: 5, color: "#764ABC" },

    // Backend - Right
    { name: "Node.js", category: "Backend", level: 88, x: 80, y: 40, color: "#339933" },
    { name: "Express", category: "Backend", level: 90, x: 85, y: 55, color: "#000000" },
    { name: "REST API", category: "Backend", level: 75, x: 90, y: 45, color: "#FF6C37" },

    // Database - Bottom
    { name: "MongoDB", category: "Database", level: 85, x: 50, y: 85, color: "#47A248" },
    { name: "MSSQL", category: "Database", level: 80, x: 35, y: 80, color: "#CC2927" },
    { name: "Firebase", category: "Database", level: 75, x: 65, y: 80, color: "#FFCA28" },
    { name: "MySQL", category: "Database", level: 65, x: 50, y: 95, color: "#4479A1" },

    // Tools - Left
    { name: "JavaScript", category: "Tools", level: 90, x: 10, y: 45, color: "#F7DF1E" },
    { name: "Python", category: "Tools", level: 75, x: 15, y: 55, color: "#3776AB" },
    { name: "Git", category: "Tools", level: 70, x: 5, y: 40, color: "#F05032" },
    { name: "GitHub", category: "Tools", level: 75, x: 20, y: 35, color: "#181717" },
  ]

  const categories = [
    { name: "Frontend", color: "#D4AF37", icon: Palette },
    { name: "Backend", color: "#B8860B", icon: Settings },
    { name: "Database", color: "#F4E4C1", icon: Database },
    { name: "Tools", color: "#E6C7A3", icon: Wrench }
  ]

  const filteredSkills = selectedCategory
    ? allSkills.filter(s => s.category === selectedCategory)
    : allSkills

  return (
    <section className="text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ScrollAnimation>
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              My <span className="shine-text">Tech Stack</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto mb-8">
              An interactive constellation of technologies I master
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(null)}
                className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${selectedCategory === null
                    ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black'
                    : 'glass-gold gold-border'
                  }`}
              >
                All Skills
              </motion.button>
              {categories.map((cat) => (
                <motion.button
                  key={cat.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${selectedCategory === cat.name
                      ? 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black'
                      : 'glass-gold gold-border'
                    }`}
                >
                  <cat.icon size={16} />
                  <span className="hidden sm:inline">{cat.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Desktop Constellation View */}
          <div className="hidden md:block relative w-full max-w-5xl mx-auto" style={{ height: '600px' }}>
            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 rounded-full glass-gold flex items-center justify-center relative"
                style={{
                  boxShadow: '0 0 60px rgba(212, 175, 55, 0.4)'
                }}
              >
                <Sparkles className="gold-text" size={48} />

                {/* Orbiting rings */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-[#D4AF37] border-opacity-20 rounded-full"
                  style={{ width: '150%', height: '150%', top: '-25%', left: '-25%' }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-[#B8860B] border-opacity-10 rounded-full"
                  style={{ width: '200%', height: '200%', top: '-50%', left: '-50%' }}
                />
              </motion.div>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              {filteredSkills.map((skill, index) => (
                <motion.line
                  key={`line-${skill.name}`}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  x1="50%"
                  y1="50%"
                  x2={`${skill.x}%`}
                  y2={`${skill.y}%`}
                  stroke="#D4AF37"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                />
              ))}
            </svg>

            {/* Skill Nodes */}
            {filteredSkills.map((skill, index) => {
              const size = 60 + (skill.level / 100) * 40
              return (
                <motion.div
                  key={skill.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.3,
                    zIndex: 50,
                    transition: { duration: 0.2 }
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                  }}
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{
                        background: categories.find(c => c.name === skill.category)?.color || '#D4AF37'
                      }}
                    />

                    <div
                      className="relative w-full h-full rounded-full glass-gold flex flex-col items-center justify-center border-2 transition-all duration-300"
                      style={{
                        borderColor: categories.find(c => c.name === skill.category)?.color || '#D4AF37',
                      }}
                    >
                      <div className="text-xs font-bold gold-text text-center px-2">
                        {skill.name}
                      </div>

                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        className="absolute -bottom-2 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-black text-xs font-bold px-2 py-1 rounded-full"
                      >
                        {skill.level}%
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className="absolute inset-0 rounded-full border-2"
                      style={{
                        borderColor: categories.find(c => c.name === skill.category)?.color || '#D4AF37',
                      }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile Grid View */}
          <div className="md:hidden grid grid-cols-2 gap-4 max-w-md mx-auto">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-elegant p-4 text-center"
              >
                <div className="text-sm font-bold gold-text mb-2">{skill.name}</div>
                <div className="relative h-2 bg-[#252525] rounded-full overflow-hidden mb-2">
                  <motion.div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${categories.find(c => c.name === skill.category)?.color}, #D4AF37)`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <div className="text-xs text-[#A0A0A0]">{skill.level}%</div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
              {categories.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <cat.icon size={14} className="gold-text" />
                  <span className="text-sm text-[#E8E8E8]">{cat.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default SkillsSection
