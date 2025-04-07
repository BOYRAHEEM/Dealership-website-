import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookTestDrive = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const vehicle = location.state?.vehicle || null;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Show success message and redirect
    alert('Test drive scheduled successfully! We will contact you shortly.');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Schedule Your Test Drive</h1>
            {vehicle && (
              <p className="text-xl text-gold-500">
                {vehicle.brand} {vehicle.model}
              </p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-white mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-white mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-gold-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-full text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Test Drive
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BookTestDrive; 