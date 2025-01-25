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
  Twitter 
} from 'lucide-react'
import { ScrollAnimation } from '../utils/ScrollAnimation'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement form submission logic
    console.log(formData)
  }

  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
      <ScrollAnimation>
        <div className="container mx-auto sm:px-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DAA520] to-[#FFA500]">Me</span>
            </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-800 rounded-xl p-8 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFA500]" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFA500]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>
                
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-[#FFA500]" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#DAA520] to-[#FFA500] py-3 rounded-lg 
                  hover:from-[#f6bc2c] hover:to-[#ffb700] hover:cursor-pointer transition-all flex items-center justify-center"
                >
                  <Send className="mr-2" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-800 rounded-xl p-8 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#FFA500]">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <PhoneCall className="text-[#FFA500] mr-4" />
                    <span>+91 6392948845</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-[#FFA500] mr-4" />
                    <span>21manjeetkumar21@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="text-[#FFA500] mr-4" />
                    <span>Lucknow, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Social Links</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/manjeet-kumar-b24136249/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#FFA500] transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href="https://github.com/Manjeetkumar21" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#FFA500] transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="mailto:21manjeetkumar21@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#FFA500] transition-colors"
                  >
                    <Mail size={24} />
                  </a>
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