import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-400">Get in touch with our luxury vehicle specialists</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Address</h3>
                  <p className="text-white">123 Luxury Avenue<br />Beverly Hills, CA 90210</p>
                </div>
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Phone</h3>
                  <p className="text-white">+1 (310) 555-0123</p>
                </div>
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Email</h3>
                  <p className="text-white">info@luxurydealership.com</p>
                </div>
                <div>
                  <h3 className="text-gold-500 font-semibold mb-2">Hours</h3>
                  <p className="text-white">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 10:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-full text-center transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 