import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Server, Database } from "lucide-react";
import { ScrollAnimation } from "../utils/ScrollAnimation";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with secure payment integration and responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubLink: "#",
      demoLink: "#",
      icon: Code,
      image: "https://www.qualityzoneinfotech.com/assets/img/E-Commerce.jpg",
    },
    {
      title: "Airbnb Accomodation Project",
      description:
        "WebSocket-based chat app with user authentication and real-time messaging functionality.",
      technologies: ["React", "Socket.io", "Express", "JWT"],
      githubLink: "#",
      demoLink: "#",
      icon: Server,
      image:
        "https://mohamedirfansh.github.io/Airbnb-Data-Science-Project/images/seattle.jpg",
    },
    {
      title: "Online Chess Game",
      description:
        "Interactive dashboard displaying complex data sets with dynamic charting capabilities.",
      technologies: ["React", "D3.js", "Redux", "GraphQL"],
      githubLink: "#",
      demoLink: "#",
      icon: Database,
      image:
        "https://cdn.shopify.com/s/files/1/0031/8878/5201/files/handmade-wooden-chess_1024x1024.png?v=1676968680",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with secure payment integration and responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubLink: "#",
      demoLink: "#",
      icon: Code,
      image: "https://www.qualityzoneinfotech.com/assets/img/E-Commerce.jpg",
    },
    {
      title: "Airbnb Accomodation Project",
      description:
        "WebSocket-based chat app with user authentication and real-time messaging functionality.",
      technologies: ["React", "Socket.io", "Express", "JWT"],
      githubLink: "#",
      demoLink: "#",
      icon: Server,
      image:
        "https://mohamedirfansh.github.io/Airbnb-Data-Science-Project/images/seattle.jpg",
    },
    {
      title: "Online Chess Game",
      description:
        "Interactive dashboard displaying complex data sets with dynamic charting capabilities.",
      technologies: ["React", "D3.js", "Redux", "GraphQL"],
      githubLink: "#",
      demoLink: "#",
      icon: Database,
      image:
        "https://cdn.shopify.com/s/files/1/0031/8878/5201/files/handmade-wooden-chess_1024x1024.png?v=1676968680",
    },
  ];

  return (
    <section className="bg-transparent text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ScrollAnimation direction="up">
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">
              Projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-[#1C1C1C] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37] border-opacity-30 group relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#D4AF37] p-3 rounded-full shadow-lg hover:shadow-2xl"
                    >
                      <Github size={24} className="text-[#0F0F0F]" />
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#B8860B] p-3 rounded-full shadow-lg hover:shadow-2xl"
                    >
                      <ExternalLink size={24} className="text-[#0F0F0F]" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <project.icon className="text-[#D4AF37] mr-3" size={24} />
                    <h3 className="text-xl font-bold text-[#D4AF37]">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 bg-[#252525] text-gray-200 rounded-full text-xs border border-[#B8860B] 
                                   hover:bg-[#B8860B] hover:text-[#0F0F0F] transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="h-1 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectsSection;
