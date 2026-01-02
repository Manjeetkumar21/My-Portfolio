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

      <nav className={`fixed z-50 w-full px-4 transition-all duration-500 flex justify-center py-2
        ${scrolled ? 'top-4' : 'top-6'}`}>
        <motion.div
          layout
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className={`
            glass-gold backdrop-blur-2xl rounded-2xl px-2 py-1.5 
            flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500
            border border-[rgba(212,175,55,0.25)] relative group/nav
            w-full md:w-fit
            ${scrolled ? 'md:scale-95' : 'scale-100'}
          `}
        >
          {/* Subtle base glow reactive to hover */}
          <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/5 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => {
              const isActive = activeSection === item.section
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.section)}
                  className={`
                    relative px-4 py-2 flex items-center gap-2 transition-all duration-300 group rounded-xl
                    ${isActive ? 'text-black' : 'text-[#A0A0A0] hover:text-white'}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="premiumActivePill"
                      className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] rounded-xl z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}

                  <item.icon
                    size={16}
                    className={`relative z-10 transition-colors ${isActive ? 'text-black' : 'group-hover:text-[#D4AF37]'}`}
                  />
                  <span className="relative z-10 text-sm font-bold tracking-wide">
                    {item.name}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile View: Dynamic Label + Toggle */}
          <div className="md:hidden flex items-center px-4 py-1 gap-4 w-full justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-2 flex-1 justify-center"
              >
                <span className="text-xs font-black gold-text uppercase tracking-[0.2em] leading-none">
                  {navItems.find(n => n.section === activeSection)?.name}
                </span>
              </motion.div>
            </AnimatePresence>

            <div className="w-[1px] h-6 bg-white/10" />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>
        </motion.div>

        {/* Improved Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              className="md:hidden fixed top-24 left-4 right-4 glass-gold/95 backdrop-blur-3xl 
                        rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] p-6 border border-[rgba(212,175,55,0.4)]
                        max-w-md mx-auto z-[60]"
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.section
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item.section)}
                      className={`
                        flex flex-col items-center justify-center p-5 rounded-2xl transition-all duration-300 relative
                        ${isActive
                          ? 'bg-gradient-to-br from-[#B8860B] to-[#D4AF37] text-black shadow-xl scale-105'
                          : 'glass-gold border-white/5 text-[#E8E8E8] hover:border-[#D4AF37]/50 active:scale-95'}
                      `}
                    >
                      <item.icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
                      <span className="text-xs font-bold mt-2 uppercase tracking-tighter">{item.name}</span>

                      {isActive && (
                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-black rounded-full" />
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default NavBar
