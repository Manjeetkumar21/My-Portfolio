import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Multi Tenant Store Management",
      description: "A store management system that helps companies manage multiple retail stores from one platform. It offers admin and store dashboards, real-time inventory tracking, order processing with QR payments, product management, multi-address checkout, and customizable store pages, built on Firebase with a serverless architecture for scalability",
      tech: ["React", "Node.js", "Express", "Firebase", "Tailwind", "JWT"],
      githubLink: "https://github.com/Manjeetkumar21/Store-Management",
      demoLink: "https://tcplstores.in/admin",
    },
    {
      id: 2,
      title: "QuickPaste - Instant Text Sharing Platform",
      description: "A minimalist, real-time text sharing platform designed for developers and teams to quickly share code snippets, logs, configuration files, and documentation. Features a sleek dark-themed editor with auto-save functionality, shareable links, and real-time content statistics. Built with a modern tech stack for optimal performance and user experience.",
      tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"],
      githubLink: "https://github.com/Manjeetkumar21/Quick-Paste",
      demoLink: "https://quick-paste-21.web.app",
    },
    {
      id: 3,
      title: "Realtime Chess Game",
      description: "A real-time multiplayer chess game built with WebSocket technology for instant move synchronization. Features automatic player assignment, legal move validation, drag-and-drop gameplay, pawn promotion, live chat, move history tracking, and a responsive mobile-friendly interface with visual game state indicators.",
      tech: ["Node.js", "Express", "Socket.io", "EJS", "Chess.js", "CSS"],
      githubLink: "https://github.com/Manjeetkumar21/Chess-Game",
      demoLink: "https://chess-game-hfac.onrender.com",
    },
    {
      id: 4,
      title: "Wanderlust - Airbnb Inspired Accommodation Platform",
      description: "A full-stack accommodation listing platform inspired by Airbnb, enabling users to browse, list, and review properties. Features secure authentication with Google OAuth integration, interactive maps powered by Mapbox, and cloud-based image management. Built with a robust MVC architecture and responsive design for seamless user experience across devices.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Passport.js", "Mapbox"],
      githubLink: "https://github.com/Manjeetkumar21/Wanderlust",
      demoLink: "https://wanderlust-tldy.onrender.com/",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather data with interactive maps and forecasts",
      tech: ["React", "D3.js", "Weather API", "Mapbox"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Content sharing platform with real-time feeds and messaging",
      tech: ["React Native", "Firebase", "Node.js"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  return (
    <section className="bg-transparent text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header - Simplified animation */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 section-underline">
            Personal <span className="shine-text">Projects</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg">
            Building impactful solutions
          </p>
        </div>

        {/* Projects Grid - Optimized animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="card-elegant p-6 h-full flex flex-col relative transition-transform duration-300">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F4E4C1] to-[#D4AF37] 
                                    flex items-center justify-center font-bold text-black text-xl shadow-lg
                                    transition-transform duration-300`}>
                      {String(project.id).padStart(2, '0')}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 transition-opacity duration-300">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className="p-2 glass-gold rounded-lg border border-[rgba(212,175,55,0.3)] transition-transform duration-200 hover:scale-110"
                      >
                        <Github size={18} className="gold-text" />
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        className="p-2 glass-gold rounded-lg border border-[rgba(212,175,55,0.3)] transition-transform duration-200 hover:scale-110"
                      >
                        <ExternalLink size={18} className="gold-text" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold gold-text mb-3 transition-colors duration-300 group-hover:text-[#FFD700]">
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
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm glass-gold rounded-lg border border-[rgba(212,175,55,0.2)]
                                     hover:border-[rgba(212,175,55,0.6)] transition-all duration-200 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
