import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Mail, Github, Linkedin, Sparkles, Award } from "lucide-react"

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

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold"
            >
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
              <span className="text-sm text-[#E8E8E8]">Available for Opportunities</span>
            </motion.div>

            {/* Name with Shine Effect */}
            <div>
              <motion.h1
                className="text-5xl sm:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="shine-text">MANJEET</span>
                <br />
                <span className="gold-text">KUMAR</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-2xl sm:text-3xl text-[#E8E8E8]"
              >
                <Award className="gold-text" size={28} />
                <span className="font-light">{text}</span>
                <span className="animate-pulse gold-text">|</span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-[#A0A0A0] leading-relaxed max-w-xl"
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
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-gold flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </button>

              <a
                href="/resume.pdf"
                download
                className="btn-outline-gold flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4"
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
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 glass-gold rounded-lg hover:border-[#D4AF37] transition-all duration-300 gold-border"
                >
                  <Icon size={24} className="gold-text" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Elegant Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="card-elegant p-8"
              >
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#252525] rounded-lg">
                      <div className="text-3xl font-bold shine-text">2+</div>
                      <div className="text-sm text-[#A0A0A0] mt-1">Years Exp</div>
                    </div>
                    <div className="text-center p-4 bg-[#252525] rounded-lg">
                      <div className="text-3xl font-bold shine-text">10+</div>
                      <div className="text-sm text-[#A0A0A0] mt-1">Projects</div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold gold-text mb-3">Core Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'MongoDB', 'Express', 'Azure'].map((skill, i) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#252525] rounded-full text-sm gold-text-light border border-[#D4AF37] border-opacity-30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="border-l-2 border-[#D4AF37] pl-4">
                    <p className="text-sm italic text-[#A0A0A0]">
                      "Code is like humor. When you have to explain it, it's bad."
                    </p>
                  </div>
                </div>

                {/* Floating Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -right-6 p-4 glass-gold rounded-full gold-border"
                >
                  <Sparkles className="gold-text" size={32} />
                </motion.div>
              </motion.div>
            </div>
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
