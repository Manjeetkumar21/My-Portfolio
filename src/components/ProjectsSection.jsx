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
    <section className="bg-gradient-to-b from-[#0F1729] to-[#1A2333] text-gray-100 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ScrollAnimation direction="up">
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFA500]">
              Projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#1A2533] rounded-2xl overflow-hidden shadow-2xl border border-[#2C5364] group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.2 }}
                      className="bg-[#FFA500] p-3 rounded-full"
                    >
                      <Github size={24} className="text-[#0F1729]" />
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.2 }}
                      className="bg-[#DAA520] p-3 rounded-full"
                    >
                      <ExternalLink size={24} className="text-[#0F1729]" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <project.icon className="text-[#FFA500] mr-3" size={24} />
                    <h3 className="text-xl font-bold text-[#FFA500]">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#2C3E50] text-gray-200 rounded-full text-xs border border-[#DAA520]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectsSection;
