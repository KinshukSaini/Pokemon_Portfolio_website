import React, { useState } from 'react'

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add email service integration here
    alert('Message sent! (Demo)')
  }

  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="text-white max-w-4xl w-full">
        <h2 className="text-6xl mb-8 text-center text-[#D9B458]">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl mb-4 text-[#D9B458]">Get In Touch</h3>
            <p className="text-lg leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#D9B458] rounded-full flex items-center justify-center">
                  📧
                </div>
                <span>your.email@example.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#D9B458] rounded-full flex items-center justify-center">
                  📱
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#D9B458] rounded-full flex items-center justify-center">
                  🌐
                </div>
                <span>linkedin.com/in/yourprofile</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#3B4A52] to-[#1D2B32] p-6 rounded-lg">
            <h3 className="text-2xl mb-4 text-[#D9B458]">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2B343A] border border-[#5D6BAD] rounded text-white placeholder-gray-400 focus:border-[#D9B458] focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#2B343A] border border-[#5D6BAD] rounded text-white placeholder-gray-400 focus:border-[#D9B458] focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 bg-[#2B343A] border border-[#5D6BAD] rounded text-white placeholder-gray-400 focus:border-[#D9B458] focus:outline-none resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#D9B458] text-black font-bold py-3 px-6 rounded hover:bg-[#B37137] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen