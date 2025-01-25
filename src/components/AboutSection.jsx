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
  MapPin,
  Clock,
  Globe,
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
      color: "#DAA520",
    },
    {
      title: "Web Dev Exploration",
      description: "Transitioned to full-stack web development",
      icon: Target,
      color: "#FFA500",
    },
    {
      title: "Tech Mastery",
      description: "Continuously evolving and learning",
      icon: Award,
      color: "#FFD700",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#34495E] to-[#2C3E50] text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#203A43] via-[#598294] to-[#0F2027] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2220%22 height=%2220%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 20 0 L 0 0 0 20%22 fill=%22none%22 stroke=%22%23ffffff%22 stroke-width=%220.2%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%%22 height=%22100%%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-10"></div>
      </div>

      <ScrollAnimation direction="up">
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFA500]">
              Me
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Personal Profile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#1A2533] rounded-2xl p-6 relative overflow-hidden border border-[#2C5364] shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAA520] to-[#FFA500]"></div>
              <div className="flex items-center mb-4">
                <Code className="text-[#FFA500] mr-3" size={28} />
                <h3 className="text-2xl font-bold text-[#FFA500]">Who I Am</h3>
              </div>
              <p className="text-gray-300 mb-4 text-justify">
              MERN Stack Developer with experience building scalable web applications and APIs. Currently working as SDE-1 at Tranzita Systems, specializing in MERN stack, Azure Databricks integration, and cloud-based solutions. Passionate about creating responsive user interfaces, optimizing backend systems, and solving complex problems. Open to connecting and exploring opportunities in web development and cloud computing.
              </p>
              <div className="flex space-x-4 mt-6 justify-center">
                {[
                  { Icon: Github, link: "https://github.com/Manjeetkumar21", color: "#ffffff" },
                  { Icon: Linkedin, link: "https://www.linkedin.com/in/manjeet-kumar-b24136249/", color: "#0A66C2" },
                  { Icon: Mail, link: "mailto:21manjeetkumar21@gmail.com", color: "#EA4335" },
                ].map(({ Icon, link, color }) => (
                  <motion.a
                    key={link}
                    href={link}
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-[#283746] rounded-full hover:bg-[#3B4A6B] transition-all duration-300"
                  >
                    <Icon size={24} color={color} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Professional Journey */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#1A2533] rounded-2xl p-6 relative overflow-hidden border border-[#2C5364] shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAA520] to-[#FFA500]"></div>
              <div className="flex items-center mb-4">
                <Brain className="text-[#FFA500] mr-3" size={28} />
                <h3 className="text-2xl font-bold text-[#FFA500]">
                  My Learning Journey
                </h3>
              </div>
              <div className="space-y-4">
                {professionalJourney.map(
                  ({ title, description, icon: Icon, color }) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center p-3 bg-[#2C3E50] rounded-xl hover:bg-opacity-80 transition-all duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-full mr-4 flex items-center justify-center"
                        style={{
                          backgroundColor: color,
                          boxShadow: `0 0 15px ${color}`,
                        }}
                      >
                        <Icon size={20} className="text-[#0F1729]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#FFA500]">
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#1A2533] rounded-2xl p-6 relative overflow-hidden border border-[#2C5364] shadow-2xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DAA520] to-[#FFA500]"></div>
              <div className="flex items-center mb-4">
                <Rocket className="text-[#FFA500] mr-3" size={28} />
                <h3 className="text-2xl font-bold text-[#FFA500]">My Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-3 py-1 bg-[#2C3E50] text-gray-200 rounded-full text-sm border border-[#DAA520] hover:bg-[#DAA520] hover:text-[#0F1729] transition-all duration-300"
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
