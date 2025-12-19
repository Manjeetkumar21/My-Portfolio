import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Mail, Github, Linkedin, Code2, Sparkles, Terminal } from "lucide-react"

const HeroSection = ({ scrollToSection }) => {
  const [text, setText] = useState('')
  const fullText = "Full Stack Developer"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 100)
    }
  }, [index])

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[#F4E4C1] to-[#D4AF37] rounded-full opacity-10 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
            <span className="text-sm text-[#E8E8E8]">Available for Opportunities</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
              <span className="shine-text">MANJEET KUMAR</span>
            </h1>
          </motion.div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 text-2xl sm:text-3xl lg:text-4xl text-[#E8E8E8] mb-8"
          >
            <Code2 className="gold-text" size={32} />
            <span className="font-light">{text}</span>
            <span className="animate-pulse gold-text">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg sm:text-xl text-[#A0A0A0] leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Crafting elegant digital experiences with modern technologies.
            Specializing in MERN stack, cloud solutions, and creating
            scalable web applications with attention to detail.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-gold flex items-center gap-2 text-lg px-8 py-4"
            >
              <Mail size={20} />
              Get In Touch
            </button>

            <a
              href="/resume.pdf"
              download
              className="btn-outline-gold flex items-center gap-2 text-lg px-8 py-4"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {['React', 'Node.js', 'MongoDB', 'Express', 'Azure'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 glass-gold rounded-full text-sm gold-text border border-[#D4AF37] border-opacity-30"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex gap-4 justify-center"
          >
            {[
              { Icon: Github, link: "https://github.com/Manjeetkumar21" },
              { Icon: Linkedin, link: "https://www.linkedin.com/in/manjeet-kumar-b24136249/" },
              { Icon: Mail, link: "mailto:21manjeetkumar21@gmail.com" }
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass-gold rounded-lg hover:border-[#D4AF37] transition-all duration-300 gold-border"
              >
                <Icon size={24} className="gold-text" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#A0A0A0] text-sm">Scroll to explore</span>
          <ChevronDown className="gold-text" size={28} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
