import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Rocket,
  Github,
  Linkedin,
  Mail,
  Award,
  Target,
  Zap,
} from "lucide-react";
import { ScrollAnimation } from "../utils/ScrollAnimation";

const AboutSection = () => {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Git",
    "Github",
    "RESTful APIs",
  ];

  const professionalJourney = [
    {
      title: "Coding Inception",
      description: "Began programming journey with C++",
      icon: Zap,
      color: "#B8860B",
    },
    {
      title: "Web Dev Exploration",
      description: "Transitioned to full-stack web development",
      icon: Target,
      color: "#D4AF37",
    },
    {
      title: "Tech Mastery",
      description: "Continuously evolving and learning",
      icon: Award,
      color: "#FFD700",
    },
  ];

  const socialLinks = [
    { Icon: Github, link: "https://github.com/Manjeetkumar21", color: "#ffffff", label: "GitHub" },
    { Icon: Linkedin, link: "https://www.linkedin.com/in/manjeet-kumar-b24136249/", color: "#0A66C2", label: "LinkedIn" },
    { Icon: Mail, link: "mailto:21manjeetkumar21@gmail.com", color: "#EA4335", label: "Email" },
  ];

  return (
    <section className=" text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ScrollAnimation direction="up">
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">
              Me
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Profile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)" }}
              className="bg-[#1C1C1C] rounded-2xl p-6 relative overflow-hidden border border-[#D4AF37] border-opacity-30 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"></div>
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="text-[#D4AF37] mr-3" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#D4AF37]">Who I Am</h3>
              </div>
              <p className="text-gray-300 mb-4 text-justify leading-relaxed">
                MERN Stack Developer with experience building scalable web applications and APIs. Currently working as SDE-1 at Tranzita Systems, specializing in MERN stack, Azure Databricks integration, and cloud-based solutions. Passionate about creating responsive user interfaces, optimizing backend systems, and solving complex problems. Open to connecting and exploring opportunities in web development and cloud computing.
              </p>
              <div className="flex space-x-4 mt-6 justify-center">
                {socialLinks.map(({ Icon, link, color, label }, index) => (
                  <motion.a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      boxShadow: `0 0 20px ${color}80`
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-[#283746] rounded-full hover:bg-[#3B4A6B] transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={24} color={color} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Professional Journey */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)" }}
              className="bg-[#1C1C1C] rounded-2xl p-6 relative overflow-hidden border border-[#D4AF37] border-opacity-30 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"></div>
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Brain className="text-[#D4AF37] mr-3" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#D4AF37]">
                  My Learning Journey
                </h3>
              </div>
              <div className="space-y-4">
                {professionalJourney.map(
                  ({ title, description, icon: Icon, color }, index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{
                        x: 10,
                        backgroundColor: "#34495E",
                        boxShadow: `0 0 15px ${color}50`
                      }}
                      className="flex items-center p-3 bg-[#252525] rounded-xl transition-all duration-300"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 0 15px ${color}`,
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={20} className="text-[#0F0F0F]" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-[#D4AF37]">
                          {title}
                        </h4>
                        <p className="text-gray-300 text-sm">{description}</p>
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255, 165, 0, 0.3)" }}
              className="bg-[#1C1C1C] rounded-2xl p-6 relative overflow-hidden border border-[#D4AF37] border-opacity-30 shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B8860B] to-[#D4AF37]"></div>
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="text-[#D4AF37] mr-3" size={28} />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#D4AF37]">My Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.15,
                      y: -5,
                      backgroundColor: "#B8860B",
                      color: "#0F0F0F",
                      boxShadow: "0 5px 15px rgba(218, 165, 32, 0.5)"
                    }}
                    className="px-3 py-1 bg-[#252525] text-gray-200 rounded-full text-sm border border-[#B8860B] 
                               transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default AboutSection;
