import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  User,
  Briefcase,
  Send,
  Menu,
  X,
  Moon,
  Sun,
  Code,
  Award
} from 'lucide-react'

const NavBar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', icon: Home, section: 'home' },
    { name: 'About', icon: User, section: 'about' },
    { name: 'Projects', icon: Code, section: 'projects' },
    { name: 'Skills', icon: Award, section: 'skills' },
    { name: 'Experience', icon: Briefcase, section: 'experience' },
    { name: 'Contact', icon: Send, section: 'contact' }
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.3, 0.7]
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact']
    sections.forEach(section => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) observer.unobserve(element)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavClick = (section) => {
    scrollToSection(section)
    setActiveSection(section)
    setIsMobileMenuOpen(false)
  }


  return (
    <>
      {/* Dark fade overlay above navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 z-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,15,15,1) 0%, rgba(15,15,15,0.95) 40%, rgba(15,15,15,0.8) 70%, transparent 100%)'
        }}
      />

      <nav className={`fixed z-50 w-full px-4 py-2 transition-all duration-300 
        ${scrolled ? 'top-4' : 'top-6'}`}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`
              ${scrolled ? 'glass-gold/80' : 'glass-gold/60'} 
              backdrop-blur-md rounded-2xl px-8 py-3 
              flex justify-between items-center shadow-lg transition-all duration-300
              border border-[rgba(212,175,55,0.2)]`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"
            >
              Manjeet
            </motion.div>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.section)}
                  className={`
                    flex items-center transition-all duration-300 
                    ${activeSection === item.section
                      ? 'text-[#D4AF37] scale-105'
                      : 'text-[#E8E8E8] hover:text-[#D4AF37]'}
                  `}
                >
                  <item.icon
                    className={`mr-2 transition-colors duration-300
                      ${activeSection === item.section
                        ? 'text-[#D4AF37]'
                        : 'text-[#A0A0A0] group-hover:text-[#D4AF37]'}
                    `}
                    size={18}
                  />
                  {item.name}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden fixed inset-x-0 top-20 glass-gold/90 backdrop-blur-md 
                rounded-xl shadow-lg p-4 mx-4 border border-[rgba(212,175,55,0.3)]"
              >
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.section)}
                      className={`
                      w-full text-left flex items-center transition-all duration-300 
                      ${activeSection === item.section
                          ? 'text-[#D4AF37]'
                          : 'text-[#E8E8E8] hover:text-[#D4AF37]'}
                      py-2
                    `}
                    >
                      <item.icon
                        className={`mr-3 transition-colors duration-300
                        ${activeSection === item.section
                            ? 'text-[#D4AF37]'
                            : 'text-[#A0A0A0] group-hover:text-[#D4AF37]'}
                      `}
                        size={20}
                      />
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}

export default NavBar
