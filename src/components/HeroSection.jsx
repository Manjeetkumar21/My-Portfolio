import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown,  DownloadIcon, CheckCircleIcon } from "lucide-react"


const HeroSection = ({scrollToSection}) => {
  const [currentSkill, setCurrentSkill] = useState("")
  const skills = ["MERN Stack", "Python", "C/C++", "UI/UX Design", "Problem Solving"]
  const [skillIndex, setSkillIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const handleTyping = () => {
      const fullSkill = skills[skillIndex]

      setCurrentSkill((prev) =>
        isDeleting ? fullSkill.substring(0, prev.length - 1) : fullSkill.substring(0, prev.length + 1),
      )

      if (!isDeleting && currentSkill === fullSkill) {
        setTimeout(() => setIsDeleting(true), 2000)
        setTypingSpeed(50)
      }

      if (isDeleting && currentSkill === "") {
        setIsDeleting(false)
        setSkillIndex((prev) => (prev + 1) % skills.length)
        setTypingSpeed(100)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentSkill, isDeleting, skillIndex, typingSpeed])

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);

    setTimeout(() => {
      // Trigger the download (this could also be immediate, if needed)
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume.pdf';
      link.click();

      // After the download action, set downloading state back to false
      setIsDownloading(false);
    }, 1000); // Optional delay for animation (e.g., show the checkmark for a second)
  };

  return (
    <div className="bg-gradient-to-b from-[#0F1729] to-[#1A2333] text-gray-100 min-h-screen flex flex-col justify-center p-6 py-12 lg:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#3B4A6B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-72 h-72 bg-[#DAA520] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-[#FFA500] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 sm:space-y-8 space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold mt-12 sm-mt-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFA500]">
                Manjeet Kumar
              </span>
            </h1>

            <div className="">
              <h2 className="text-lg sm:text-3xl text-gray-300">
                I know little bit about {" "}
                  <motion.span
                    key={currentSkill}
                
                    className="font-bold text-[#FFA500] inline-block"
                  >
                    {currentSkill}
                  </motion.span>
                <span className="animate-pulse text-[#FFD700]">|</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed sm:text-lg text-md">
              Transforming complex challenges into elegant digital solutions with cutting-edge technologies and
              innovative approaches.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#DAA520] to-[#FFA500] text-[#0F1729] px-8 sm:py-3 py-2 rounded-full
                font-semibold text-lg hover:from-[#FFA500] hover:to-[#DAA520] transition duration-300 shadow-lg
                text-center"
              >
                Get in Touch
              </motion.button>
              <motion.a
                onClick={handleDownloadClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#FFD700] text-[#FFA500] px-8 sm:py-3 py-2 rounded-full font-semibold text-lg
                hover:bg-[#FFD700] hover:text-[#0F1729] transition duration-300 text-center flex items-center justify-center"
              >
                {isDownloading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <CheckCircleIcon className="text-[#0F1729] text-xl mr-2" /> Download Resume
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <DownloadIcon className="hover:text-[#0F1729] text-xl mr-2" />
                    Download Resume
                  </motion.div>
                )}
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-[#DAA520] to-[#FFA500] rounded-full opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
              <motion.img
                src="/profile_image.jpg"
                alt="Manjeet Kumar"
                className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

