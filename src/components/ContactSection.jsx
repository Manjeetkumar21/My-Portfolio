import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  User,
  Mail,
  MessageCircle,
  MapPin,
  Phone,
  Linkedin,
  Github,
  CheckCircle,
  Sparkles,
  ArrowRight
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

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      console.log(formData)

      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', email: '', message: '' })
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6392948845",
      link: "tel:+916392948845",
      color: "#D4AF37"
    },
    {
      icon: Mail,
      label: "Email",
      value: "21manjeetkumar21@gmail.com",
      link: "mailto:21manjeetkumar21@gmail.com",
      color: "#B8860B"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, UP, India",
      link: null,
      color: "#F4E4C1"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/manjeet-kumar-b24136249/",
      color: "#0A66C2",
      label: "LinkedIn"
    },
    {
      icon: Github,
      link: "https://github.com/Manjeetkumar21",
      color: "#ffffff",
      label: "GitHub"
    },
    {
      icon: Mail,
      link: "mailto:21manjeetkumar21@gmail.com",
      color: "#EA4335",
      label: "Email"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D4AF37] to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#B8860B] to-transparent rounded-full blur-3xl"
        />
      </div>

      <ScrollAnimation>
        <div className="container mx-auto sm:px-20 px-4 relative z-10">
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
              Let's <span className="shine-text">Connect</span>
            </h2>
            <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="card-elegant p-6 flex items-center gap-4 group hover:border-[#D4AF37] transition-all duration-300"
                      >
                        <div
                          className="p-4 rounded-xl glass-gold"
                          style={{ borderColor: info.color }}
                        >
                          <info.icon size={24} style={{ color: info.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-[#A0A0A0] mb-1">{info.label}</div>
                          <div className="font-medium text-[#E8E8E8] group-hover:text-[#D4AF37] transition-colors break-all">
                            {info.value}
                          </div>
                        </div>
                        <ArrowRight className="gold-text opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                      </a>
                    ) : (
                      <div className="card-elegant p-6 flex items-center gap-4">
                        <div
                          className="p-4 rounded-xl glass-gold"
                          style={{ borderColor: info.color }}
                        >
                          <info.icon size={24} style={{ color: info.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-[#A0A0A0] mb-1">{info.label}</div>
                          <div className="font-medium text-[#E8E8E8]">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="card-elegant p-6"
              >
                <h3 className="text-xl font-bold gold-text mb-4 flex items-center gap-2">
                  <Sparkles size={20} />
                  Connect on Social
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ icon: Icon, link, color, label }, index) => (
                    <motion.a
                      key={link}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        boxShadow: `0 0 30px ${color}80`
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 glass-gold rounded-xl transition-all duration-300 group"
                      aria-label={label}
                    >
                      <Icon size={28} style={{ color }} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elegant p-8"
            >
              <h3 className="text-2xl font-bold gold-text mb-6 flex items-center gap-2">
                <Send size={24} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-[#E8E8E8] mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-[#1C1C1C] bg-opacity-60 rounded-xl border border-[rgba(212,175,55,0.2)] 
                                 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[rgba(212,175,55,0.5)] transition-all duration-300 
                                 hover:bg-opacity-80 hover:border-[rgba(212,175,55,0.3)] text-[#E8E8E8] placeholder-[#606060]"
                    />
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-[#E8E8E8] mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-[#1C1C1C] bg-opacity-60 rounded-xl border border-[rgba(212,175,55,0.2)] 
                                 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[rgba(212,175,55,0.5)] transition-all duration-300 
                                 hover:bg-opacity-80 hover:border-[rgba(212,175,55,0.3)] text-[#E8E8E8] placeholder-[#606060]"
                    />
                  </div>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-[#E8E8E8] mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-4 text-[#A0A0A0]" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 bg-[#1C1C1C] bg-opacity-60 rounded-xl border border-[rgba(212,175,55,0.2)] 
                                 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[rgba(212,175,55,0.5)] transition-all duration-300 
                                 hover:bg-opacity-80 hover:border-[rgba(212,175,55,0.3)] resize-none text-[#E8E8E8] placeholder-[#606060]"
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl transition-all flex items-center justify-center gap-2 font-semibold text-lg
                    ${isSuccess
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gradient-to-r from-[#B8860B] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F4E4C1] text-black'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle size={24} /> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default ContactSection
