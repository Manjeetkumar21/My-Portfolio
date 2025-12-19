import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  User,
  Mail,
  MessageCircle,
  Map,
  PhoneCall,
  Linkedin,
  Github,
  CheckCircle
} from 'lucide-react'
import { ScrollAnimation } from '../utils/ScrollAnimation'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      console.log(formData)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 1500)
  }

  return (
    <section className="py-16 text-white">
      <ScrollAnimation>
        <div className="container mx-auto sm:px-20 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#D4AF37]">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-xl p-8 shadow-lg border border-[#D4AF37] border-opacity-30"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[#1C1C1C] bg-opacity-80 rounded-lg focus:outline-none focus:ring-2 
                               focus:ring-[#D4AF37] transition-all duration-300 hover:bg-[#252525] bg-opacity-80"
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[#1C1C1C] bg-opacity-80 rounded-lg focus:outline-none focus:ring-2 
                               focus:ring-[#D4AF37] transition-all duration-300 hover:bg-[#252525] bg-opacity-80"
                  />
                </motion.div>

                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <MessageCircle className="absolute left-3 top-3 text-[#D4AF37]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-[#1C1C1C] bg-opacity-80 rounded-lg focus:outline-none focus:ring-2 
                               focus:ring-[#D4AF37] transition-all duration-300 hover:bg-[#252525] bg-opacity-80 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 165, 0, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg transition-all flex items-center justify-center font-semibold
                    ${isSuccess
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] hover:from-[#f6bc2c] hover:to-[#ffb700]'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle className="mr-2" /> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-xl p-8 shadow-lg flex flex-col justify-between border border-[#D4AF37] border-opacity-30"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">Contact Information</h3>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-center p-3 rounded-lg hover:bg-[#1C1C1C] bg-opacity-80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <PhoneCall className="text-[#D4AF37] mr-4" />
                    <span>+91 6392948845</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center p-3 rounded-lg hover:bg-[#1C1C1C] bg-opacity-80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Mail className="text-[#D4AF37] mr-4" />
                    <span className="break-all">21manjeetkumar21@gmail.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center p-3 rounded-lg hover:bg-[#1C1C1C] bg-opacity-80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Map className="text-[#D4AF37] mr-4" />
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">Social Links</h3>
                <div className="flex space-x-4">
                  {[
                    { Icon: Linkedin, link: "https://www.linkedin.com/in/manjeet-kumar-b24136249/", color: "#0A66C2" },
                    { Icon: Github, link: "https://github.com/Manjeetkumar21", color: "#ffffff" },
                    { Icon: Mail, link: "mailto:21manjeetkumar21@gmail.com", color: "#EA4335" }
                  ].map(({ Icon, link, color }, index) => (
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
                      className="p-3 bg-[#1C1C1C] bg-opacity-80 rounded-full hover:bg-[#252525] bg-opacity-80 transition-all"
                    >
                      <Icon size={24} style={{ color }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default ContactSection
