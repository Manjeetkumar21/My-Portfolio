import { useState, useRef } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import NavBar from './components/NavBar';
import ParticleBackground from './components/ParticleBackground';
import CursorTrail from './components/CursorTrail';
import ScrollProgress from './components/ScrollProgress';
import FloatingActionButton from './components/FloatingActionButton';
import GlobalBackground from './components/GlobalBackground';

export function App() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null)
  }

  const scrollToSection = (sectionName) => {
    sectionRefs[sectionName].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className='relative min-h-screen'>
      {/* Global Background */}
      <GlobalBackground />

      {/* Interactive Background Elements */}
      <ParticleBackground />
      <CursorTrail />
      <ScrollProgress />
      <FloatingActionButton />

      {/* Main Content */}
      <div className='relative z-10'>
        <NavBar scrollToSection={scrollToSection} />
        <div id="home" ref={sectionRefs.home}>
          <HeroSection scrollToSection={scrollToSection} />
        </div>
        <div id="about" ref={sectionRefs.about}>
          <AboutSection />
        </div>
        <div id="projects" ref={sectionRefs.projects}>
          <ProjectsSection />
        </div>
        <div id="skills" ref={sectionRefs.skills}>
          <SkillsSection />
        </div>
        <div id="experience" ref={sectionRefs.experience}>
          <ExperienceSection />
        </div>
        <div id="contact" ref={sectionRefs.contact}>
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
