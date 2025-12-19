import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { ScrollAnimation } from "../utils/ScrollAnimation";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack online store with secure payments, inventory management, and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "#",
      demoLink: "#",
      gradient: "from-[#D4AF37] to-[#B8860B]",
    },
    {
      id: 2,
      title: "Airbnb Clone",
      description: "Property rental platform with real-time booking and interactive maps",
      tech: ["React", "Socket.io", "Express", "JWT"],
      githubLink: "#",
      demoLink: "#",
      gradient: "from-[#F4E4C1] to-[#D4AF37]",
    },
    {
      id: 3,
      title: "Chess Multiplayer",
      description: "Real-time chess game with ultra-low latency and player rankings",
      tech: ["React", "Socket.io", "Redux", "WebRTC"],
      githubLink: "#",
      demoLink: "#",
      gradient: "from-[#B8860B] to-[#8B6914]",
    },
    {
      id: 4,
      title: "Task Manager Pro",
      description: "Collaborative workspace with drag-and-drop and real-time updates",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubLink: "#",
      demoLink: "#",
      gradient: "from-[#E6C7A3] to-[#D4AF37]",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather data with interactive maps and forecasts",
      tech: ["React", "D3.js", "Weather API", "Mapbox"],
      githubLink: "#",
      demoLink: "#",
      gradient: "from-[#D4AF37] to-[#F4E4C1]",
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Content sharing platform with real-time feeds and messaging",
      tech: ["React Native", "Firebase", "Node.js"],
      githubLink: "#",
      demoLink: "#",
      gradient: "from-[#B8860B] to-[#D4AF37]",
    },
  ];

  return (
    <section className="bg-transparent text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Sparkles className="gold-text" size={40} />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="shine-text">Projects</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg">
            Building impactful solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="card-elegant p-6 h-full flex flex-col relative overflow-hidden">
                {/* Simple Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} 
                                  flex items-center justify-center font-bold text-black text-xl shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {String(project.id).padStart(2, '0')}
                    </motion.div>

                    {/* Links */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.githubLink}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass-gold rounded-lg border border-[rgba(212,175,55,0.3)]"
                      >
                        <Github size={18} className="gold-text" />
                      </motion.a>
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass-gold rounded-lg border border-[rgba(212,175,55,0.3)]"
                      >
                        <ExternalLink size={18} className="gold-text" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold gold-text mb-3 group-hover:text-[#FFD700] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#E8E8E8] leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <div className="text-xs text-[#A0A0A0] uppercase tracking-wider">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1.5 text-sm glass-gold rounded-lg border border-[rgba(212,175,55,0.2)]
                                     hover:border-[rgba(212,175,55,0.6)] transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  style={{ originX: 0 }}
                />

                {/* Glow Effect on Hover */}
                <motion.div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
