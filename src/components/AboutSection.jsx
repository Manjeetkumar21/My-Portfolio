import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  TrendingUp,
  MapPin,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { ScrollAnimation } from "../utils/ScrollAnimation";

const AboutSection = () => {
  const skills = [
    "React", "Next.js", "Node.js", "Express", "MongoDB",
    "Python", "C++", "JavaScript", "TypeScript",
    "HTML/CSS", "Tailwind CSS", "Git", "GitHub", "RESTful APIs",
    "Azure", "Azure Databricks", "GCP", "Firebase",
    "Redux", "Preact", "Vite", "SQL", "MSSQL", "MySQL"
  ];

  const socialLinks = [
    { Icon: Github, link: "https://github.com/Manjeetkumar21", color: "#ffffff", label: "GitHub" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/manjeet-kumar-b24136249/", color: "#0A66C2", label: "LinkedIn" },
    { Icon: Mail, link: "mailto:21manjeetkumar21@gmail.com", color: "#EA4335", label: "Email" },
  ];

  return (
    <section className="text-gray-100 py-20 px-4 sm:px-6 lg:px-8 bg-transparent">

      <ScrollAnimation direction="up">
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="shine-text">Me</span>
            </h2>
          </motion.div>

          {/* Main Content - Single Flowing Layout */}
          <div className="space-y-12">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-xl sm:text-2xl text-[#E8E8E8] leading-relaxed mb-6">
                I'm a <span className="gold-text font-semibold">MERN Stack Developer</span> passionate about building scalable web applications and elegant user experiences.
              </p>
              <p className="text-lg text-[#A0A0A0] leading-relaxed">
                Currently working as <span className="gold-text font-semibold">SDE-1 at Tranzita Systems</span>, specializing in full-stack development, Azure Databricks integration, and cloud-based solutions. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </motion.div>

            {/* Highlights Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-4 rounded-full glass-gold mb-4"
                >
                  <Code2 className="gold-text" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold gold-text mb-2">Full Stack</h3>
                <p className="text-sm text-[#A0A0A0]">End-to-end development with modern tech stack</p>
              </div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-4 rounded-full glass-gold mb-4"
                >
                  <Rocket className="gold-text" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold gold-text mb-2">Problem Solver</h3>
                <p className="text-sm text-[#A0A0A0]">Elegant solutions to complex challenges</p>
              </div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex p-4 rounded-full glass-gold mb-4"
                >
                  <TrendingUp className="gold-text" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold gold-text mb-2">Always Learning</h3>
                <p className="text-sm text-[#A0A0A0]">Exploring new technologies daily</p>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="gold-divider"></div>

            {/* Skills Section - CSS-only Scroller */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="gold-text">Technical</span> Arsenal
              </h3>

              {/* Infinite Scroll Container */}
              <div
                className="relative overflow-hidden py-4 rounded-full"
                style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
                }}
              >
                {/* Scrolling Content - CSS Animation */}
                <div className="skills-scroll flex gap-4">
                  {/* First set of skills */}
                  {skills.map((skill, index) => (
                    <div
                      key={`skill-1-${index}`}
                      className="px-6 py-3 glass-gold rounded-full text-sm font-medium text-[#E8E8E8] 
                                 border border-[rgba(212,175,55,0.2)] whitespace-nowrap flex-shrink-0
                                 hover:border-[rgba(212,175,55,0.5)] transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                  {/* Second set for seamless loop */}
                  {skills.map((skill, index) => (
                    <div
                      key={`skill-2-${index}`}
                      className="px-6 py-3 glass-gold rounded-full text-sm font-medium text-[#E8E8E8] 
                                 border border-[rgba(212,175,55,0.2)] whitespace-nowrap flex-shrink-0
                                 hover:border-[rgba(212,175,55,0.5)] transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="gold-divider"></div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-[#A0A0A0]"
            >
              <MapPin className="gold-text" size={18} />
              <span>Lucknow, Uttar Pradesh, India</span>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default AboutSection;
